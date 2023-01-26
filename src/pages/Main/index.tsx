import React, { ChangeEvent, ReactElement, useCallback, useState } from "react";

import { LogoAnimation } from "components/LogoAnimation";
import { PageWrapper } from "components/PageWrapper";
import {
  removeApiToken,
  setApiToken,
  getApiToken,
  getProjects,
  setProjects,
} from "utils/store";

import { Projects } from "./components/Projects";
import { TokenInput } from "./components/TokenInput";
import { Content, Label, Button, Title } from "./styles";

export function Main(): ReactElement {
  const [myProjects, setMyProjects] = useState<string[]>(getProjects());
  const [token, setToken] = useState<string>(getApiToken() || "");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setToken(event.target.value),
    []
  );

  const handleSubmit = useCallback(() => {
    if (!token) return removeApiToken();
    return setApiToken(token);
  }, [token]);

  const handleAddEmptyProject = useCallback(() => {
    const projects = [...getProjects(), ""];
    setProjects(projects);
    setMyProjects(projects);
  }, []);

  return (
    <PageWrapper>
      <Title>
        <LogoAnimation />
      </Title>
      <Content>
        <TokenInput value={token} onChange={handleChange} />
        <Button onClick={handleSubmit}>Save token</Button>
        <Label>Your project</Label>
        <Projects projects={myProjects} onChangeProjects={setMyProjects} />
        <Button onClick={handleAddEmptyProject}>Add project</Button>
      </Content>
    </PageWrapper>
  );
}
