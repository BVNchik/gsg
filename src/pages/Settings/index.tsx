import React, {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

import { useLazyQuery } from "@apollo/client";
import { VIEWER, ViewerResult } from "graphql/viewer/viewer.query";

import { PageWrapper } from "components/PageWrapper";
import { checkToken } from "utils/check-token";
import {
  removeApiToken,
  setApiToken,
  getApiToken,
  getProjects,
  setProjects,
} from "utils/store";

import { Projects } from "./components/Projects";
import { TokenInput } from "./components/TokenInput";
import {
  Content,
  Label,
  Button,
  StatisticButton,
  Avatar,
  Spinner,
  ViewerContainer,
  ViewerName,
} from "./styles";

export function Settings(): ReactElement {
  const [myProjects, setMyProjects] = useState<string[]>(getProjects());
  const [token, setToken] = useState<string>(getApiToken() || "");
  const [isValidToken, setIsValidToken] = useState<boolean>(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setToken(event.target.value),
    []
  );

  const [fetchViewer, { data, loading }] = useLazyQuery<ViewerResult>(VIEWER, {
    fetchPolicy: "no-cache",
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
      if (data?.viewer) return setIsValidToken(true);
    },
  });
  const handleSubmit = useCallback(async () => {
    if (!token) return removeApiToken();
    setApiToken(token);
    if (!checkToken(token)) return setIsValidToken(false);
    await fetchViewer();
    return;
  }, [fetchViewer, token]);

  const handleAddEmptyProject = useCallback(() => {
    const projects = [...getProjects(), ""];
    setProjects(projects);
    setMyProjects(projects);
  }, []);

  const handleGSG = useCallback(() => {
    window.open("/statistic", "_self");
  }, []);

  useEffect(() => {
    if (token) fetchViewer();
  }, []);

  return (
    <PageWrapper>
      <Content>
        {data?.viewer && isValidToken ? (
          <ViewerContainer>
            Hello
            <ViewerName>{data.viewer.name}</ViewerName>
            <Avatar src={data.viewer.avatarUrl} />
          </ViewerContainer>
        ) : null}

        <TokenInput
          value={token}
          isValidToken={isValidToken}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} disabled={!token || loading}>
          {loading ? <Spinner /> : "Save token"}
        </Button>
        <Label>Your project</Label>
        <Projects projects={myProjects} onChangeProjects={setMyProjects} />
        <Button onClick={handleAddEmptyProject}>Add project</Button>
        <StatisticButton onClick={handleGSG} disabled={!token}>
          GSG
        </StatisticButton>
      </Content>
    </PageWrapper>
  );
}
