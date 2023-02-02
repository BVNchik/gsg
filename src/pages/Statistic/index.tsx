import React, {
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Range, RangeKeyDict } from "react-date-range";
import { SingleValue } from "react-select";

import { BranchAutocomplete } from "components/BranchAutocomplete";
import { Commits } from "components/Commits";
import { PageWrapper } from "components/PageWrapper";
import { Select } from "components/Select";
import { SelectedProjectContext } from "lib/selectedProject/context";
import { parseProjectUrl } from "utils/parse-url";
import { getProjects } from "utils/store";

import {
  Content,
  Settings,
  Statistics,
  DateRangePicker,
} from "./styles";

const ROW_OPTIONS = [
  { value: 10, label: 10 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
];

const DEFAULT_OPTION = ROW_OPTIONS[ROW_OPTIONS.length - 1];

type RowOption = {
  value: number;
  label: number;
};

type ProjectOption = {
  value: string;
  label: string;
};

export function Statistic(): ReactElement | null {
  const { updateSelectedProject, selectedProject } = useContext(
    SelectedProjectContext
  );

  const { name: selectedProjectName } = parseProjectUrl(selectedProject) || {};

  const projects = getProjects();
  const projectOptions = projects.map((project) => {
    const { name } = parseProjectUrl(project);
    return { value: project, label: name };
  });

  const [branchName, setBranchName] = useState("");
  const [rows, setRows] = useState<number>(100);
  const [[dateRange], setDateRanges] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  const handleBranchChange = useCallback(
    (branchName: string) => setBranchName(branchName),
    []
  );

  const handleChange = useCallback(
    (item: RangeKeyDict) => setDateRanges([item.selection]),
    []
  );

  const handleChangeRows = useCallback(
    (option: SingleValue<RowOption>) =>
      setRows(option?.value || DEFAULT_OPTION.value),
    []
  );

  const handleChangeProject = useCallback(
    (option: SingleValue<ProjectOption>) => {
      if (option?.value) updateSelectedProject(option.value);
    },
    [updateSelectedProject]
  );

  const defaultProject = useMemo(() => {
    if (!selectedProject) return null;
    return { value: selectedProject, label: selectedProjectName };
  }, [selectedProjectName, selectedProject]);

  return (
    <PageWrapper>
      <Content>
        <Settings>
          <Select<ProjectOption>
            options={projectOptions}
            label="Projects"
            onChange={handleChangeProject}
            defaultValue={defaultProject}
          />
          <BranchAutocomplete
            onChange={handleBranchChange}
            branchName={branchName}
          />
          <DateRangePicker
            label={"Date period"}
            ranges={[dateRange]}
            onChange={handleChange}
          />
          <Select<RowOption>
            options={ROW_OPTIONS}
            label="Rows"
            onChange={handleChangeRows}
            defaultValue={DEFAULT_OPTION}
          />
        </Settings>
        <Statistics>
          <Commits
            rows={rows}
            branchName={branchName}
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
          />
        </Statistics>
      </Content>
    </PageWrapper>
  );
}
