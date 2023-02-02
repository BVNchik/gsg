import { gql } from "@apollo/client";

export type Commit = {
  deletions: number;
  message: string;
  committedDate: string;
  author: {
    name: string;
    email: string;
    avatarUrl: string;
  };
};

export type CommitsResult = {
  repository: {
    ref: {
      target: {
        history: {
          nodes: Commit[];
        };
      };
    };
  };
};

export type CommitsVars = {
  owner: string;
  name: string;
  until: Date | string;
  since: Date | string;
  qualifiedName: string;
  first?: number;
};
export const COMMITS = gql`
  query repository(
    $owner: String!
    $name: String!
    $since: GitTimestamp
    $until: GitTimestamp
    $qualifiedName: String!
    $first: Int
  ) {
    repository(owner: $owner, name: $name) {
      ref(qualifiedName: $qualifiedName) {
        target {
          ... on Commit {
            history(first: $first, since: $since, until: $until) {
              nodes {
                deletions
                oid
                message
                committedDate
                author {
                  name
                  email
                  avatarUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
