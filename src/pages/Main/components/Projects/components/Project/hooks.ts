import { useQuery } from "@apollo/client";
import {
  REPOSITORY,
  RepositoryResult,
  RepositoryVars,
} from "graphql/Repository/project.query";

import { parseProjectUrl } from "utils/parse-url";

type UseRepositoryProps = {
  project: string;
};

export function useRepository({ project }: UseRepositoryProps) {
  const { owner, name } = parseProjectUrl(project) || {};

  const skipQuery = !owner || !name;

  const { data, loading } = useQuery<RepositoryResult, RepositoryVars>(
    REPOSITORY,
    {
      variables: !skipQuery
        ? {
            owner,
            name,
          }
        : undefined,
      skip: skipQuery,
    }
  );

  const repository = data?.repository;

  return {
    repository,
    loading,
  };
}
