import React, {
  ChangeEvent,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { useDebouncedCallback } from "use-debounce";

import { CrossIcon } from "components/Icons";
import { Spinner } from "components/Spinner";
import { SelectedProjectContext } from "lib/selectedProject/context";
import { getProjects, setProjects } from "utils/store";

import { useRepository } from "./hooks";
import {
  ProjectRow,
  ProjectInput,
  SelectButton,
  RemoveButton,
  Logo,
  Icon,
} from "./styles";

export function Project({
  project: initialProject,
  index,
  onRemove,
}: {
  project: string;
  index: number;
  onRemove: (index: number) => void;
}): ReactElement {
  const [project, setProject] = useState(initialProject);
  const { updateSelectedProject, selectedProject } = useContext(
    SelectedProjectContext
  );

  const handleProjectSaveDebounce = useDebouncedCallback((value) => {
    const projects = getProjects();
    projects[index] = value;
    setProjects(projects);
  }, 300);

  const handleProjectChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setProject(event.target.value);
      handleProjectSaveDebounce(event.target.value);
    },
    [handleProjectSaveDebounce]
  );

  const handleRemoveProject = useCallback(
    () => onRemove(index),
    [index, onRemove]
  );

  const handleSelectProject = useCallback(() => {
    updateSelectedProject(project);
  }, [project, updateSelectedProject]);

  const isSelected = useMemo(
    () => project === selectedProject,
    [project, selectedProject]
  );
  const { loading, repository } = useRepository({ project });

  const validLink = useMemo(() => Boolean(repository), [repository]);

  const projectIcon = useMemo(() => {
    if (loading) return <Spinner />;
    const avatarUrl = repository?.owner.avatarUrl;
    if (avatarUrl) return <Logo src={avatarUrl} />;
    if (!validLink && project) return <Icon as={CrossIcon} />;
  }, [loading, project, repository?.owner.avatarUrl, validLink]);

  return (
    <ProjectRow>
      <ProjectInput
        endAdornmentIcon={projectIcon}
        value={project}
        onChange={handleProjectChange}
        placeholder="https://github.com/owner/name"
      />
      <SelectButton onClick={handleSelectProject} disabled={!validLink}>
        {isSelected ? "Selected" : `Select`}
      </SelectButton>
      <RemoveButton onClick={handleRemoveProject}>Remove</RemoveButton>
    </ProjectRow>
  );
}
