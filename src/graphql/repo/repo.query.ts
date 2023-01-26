import { gql } from "@apollo/client";

export type Branch = {
  nameWithOwner: number;
  owner: {
    avatarUrl: string;
  };
};

export type BranchResult = {
  repository: {
    refs: {
      totalCount: number;
      nodes: {
        name: string;
      }[];
    };
  };
};

export type BranchVars = {
  owner: string;
  name: string;
  refPrefix: string;
  first?: number;
  query?: string;
};

export const BRANCHES = gql`
  query branch(
    $owner: String!
    $name: String!
    $first: Int
    $refPrefix: String!
    $query: String
  ) {
    repository(owner: $owner, name: $name) {
      refs(first: $first, refPrefix: $refPrefix, query: $query) {
        totalCount
        nodes {
          name
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
