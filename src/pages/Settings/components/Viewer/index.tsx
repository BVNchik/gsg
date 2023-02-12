import React, {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useLazyQuery } from "@apollo/client";
import { VIEWER, ViewerResult } from "graphql/viewer/viewer.query";

import { Button } from "components/Button";
import { checkToken } from "utils/check-token";
import { removeApiToken, setApiToken, getApiToken } from "utils/store";

import { TokenInput } from "./components/TokenInput";
import {
  Avatar,
  Spinner,
  ViewerContainer,
  ViewerName,
  Content,
  Container,
} from "./styles";

export function Viewer(): ReactElement {
  const [token, setToken] = useState<string>(getApiToken() || "");
  const [isValidToken, setIsValidToken] = useState<boolean>(false);
  const [isEditingToken, setIsEditingToken] = useState<boolean>(false);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setToken(value);
    if (checkToken(value)) return setIsValidToken(true);
    return setIsValidToken(false);
  }, []);

  const [fetchViewer, { data, loading }] = useLazyQuery<ViewerResult>(VIEWER, {
    onError(error) {
      const { networkError } = error;
      if (
        networkError &&
        "statusCode" in networkError &&
        networkError.statusCode === 401
      ) {
        setIsValidToken(false);
      }
    },
    onCompleted(data) {
      if (data?.viewer) {
        setIsEditingToken(false);
        return setIsValidToken(true);
      }
    },
  });

  const handleSubmit = useCallback(() => {
    if (!token) return removeApiToken();
    if (!checkToken(token)) return setIsValidToken(false);
    setApiToken(token);
    return fetchViewer();
  }, [fetchViewer, token]);

  const handleEditToken = useCallback(() => {
    setIsEditingToken(true);
    setApiToken();
    setToken("");
  }, []);

  useEffect(() => {
    if (token) fetchViewer();
  }, []);

  const disabledButton = useMemo(() => !token || loading, [loading, token]);

  if (loading) {
    return (
      <ViewerContainer>
        <Spinner />
      </ViewerContainer>
    );
  }

  return (
    <Container>
      {!isEditingToken && data?.viewer ? (
        <Content>
          <ViewerContainer>
            Hello
            <ViewerName>{data.viewer.name}</ViewerName>
            <Avatar src={data.viewer.avatarUrl} />
          </ViewerContainer>
          <Button onClick={handleEditToken} disabled={disabledButton}>
            Edit token
          </Button>
        </Content>
      ) : (
        <Content>
          <TokenInput
            value={token}
            isValidToken={isValidToken}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} disabled={disabledButton}>
            Save token
          </Button>
        </Content>
      )}
    </Container>
  );
}
