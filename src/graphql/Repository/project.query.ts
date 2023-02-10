import { gql } from "@apollo/client";

export type Repository = {
  id: string;
  nameWithOwner: number;
  owner: {
    id: string;
    login: string;
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
      id
      nameWithOwner
      owner {
        id
        login
        avatarUrl
      }
    }
  }
`;
