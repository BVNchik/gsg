import { useContext, useEffect } from "react";

import { useQuery } from "@apollo/client";
import {
  COMMITS,
  CommitsResult,
  CommitsVars,
} from "graphql/commits/commits.query";

import { SelectedProjectContext } from "lib/selectedProject/context";
import { parseProjectUrl } from "utils/parse-url";

type UseCommitsProps = {
  branchName: string;
  until?: Date | string;
  since?: Date | string;
  rows?: number;
  skip?: boolean;
};

export function useCommits({
  branchName,
  until,
  since,
  skip,
  rows,
}: UseCommitsProps) {
  const { selectedProject } = useContext(SelectedProjectContext);

  const { owner, name } = parseProjectUrl(selectedProject) || {};

  const skipQuery = skip || !branchName || !owner || !name || !until || !since;

  const { data, loading, refetch } = useQuery<CommitsResult, CommitsVars>(
    COMMITS,
    {
      variables: !skipQuery
        ? {
            owner,
            name,
            until,
            since,
            qualifiedName: branchName,
            first: rows,
          }
        : undefined,
      skip: skipQuery,
    }
  );

  const commits = data?.repository.ref.target.history.nodes || [];

  const intervalId = setInterval(() => refetch(), 60000);

  useEffect(() => () => clearInterval(intervalId), [intervalId]);

  return {
    commits: [...commits].reverse(),
    loading,
  };
}
