import { gql } from "@apollo/client";

export type Repository = {
  nameWithOwner: number;
  owner: {
    avatarUrl: string;
  };
};

export type RepositoryResult = {
  repository: Repository;
};

export type RepositoryVars = {
  owner: string;
  name: string;
};
export const REPOSITORY = gql`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      nameWithOwner
      owner {
        login
        avatarUrl
      }
    }
  }
`;
