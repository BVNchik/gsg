import React, {
  useCallback,
  useState,
  createContext,
  PropsWithChildren,
} from "react";

import { getSelectedProject, setSelectedProject } from "utils/store";

export const SelectedProjectContext = createContext<{
  selectedProject: string | null;
  updateSelectedProject: (newProject: string) => void;
}>({
  selectedProject: getSelectedProject(),
  updateSelectedProject: () => {
    const errorMsg = "updateSelectedProject: Not initialized";
    console.error(errorMsg);
  },
});

export function SelectedProjectProvider({
  children,
}: PropsWithChildren<unknown>) {
  const [selectedProject, setProject] = useState<string | null>(
    getSelectedProject()
  );

  const updateSelectedProject = useCallback((newProject: string) => {
    setSelectedProject(newProject);
    setProject(newProject);
  }, []);

  return (
    <SelectedProjectContext.Provider
      value={{
        selectedProject,
        updateSelectedProject,
      }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
}
