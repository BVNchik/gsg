import React, { ReactElement, useCallback, useState } from "react";

import { Button } from "components/Button";
import { PageWrapper } from "components/PageWrapper";
import { getProjects, setProjects } from "utils/store";

import { Projects } from "./components/Projects";
import { Viewer } from "./components/Viewer";
import { Content, Label, Link } from "./styles";

export function Settings(): ReactElement {
  const [myProjects, setMyProjects] = useState<string[]>(getProjects());

  const handleAddEmptyProject = useCallback(() => {
    const projects = [...getProjects(), ""];
    setProjects(projects);
    setMyProjects(projects);
  }, []);

  return (
    <PageWrapper>
        <Content>
          <Viewer />
          <Label>Your project</Label>
          <Projects projects={myProjects} onChangeProjects={setMyProjects} />
          <Button onClick={handleAddEmptyProject}>Add project</Button>
          <Link to="/statistic">GSG</Link>
        </Content>
    </PageWrapper>
  );
}
