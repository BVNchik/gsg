import React, { ReactElement, useCallback } from "react";

import { getProjects, setProjects } from "utils/store";

import { Project } from "./components/Project";

export function Projects({
  projects,
  onChangeProjects,
}: {
  projects: Array<string>;
  onChangeProjects: (projects: string[]) => void;
}): ReactElement {
  const handleRemoveProject = useCallback(
    (index: number) => {
      const savedProjects = getProjects();
      savedProjects.splice(index, 1);
      setProjects(savedProjects);
      onChangeProjects(savedProjects);
    },
    [onChangeProjects]
  );

  return (
    <>
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            project={project}
            index={index}
            onRemove={handleRemoveProject}
          />
        );
      })}
    </>
  );
}
