import { gql } from "@apollo/client";

export type ViewerResult = {
  viewer: {
    id: string;
    avatarUrl: string;
    name: string;
  };
};

export const VIEWER = gql`
  query viewer {
    viewer {
      id
      avatarUrl
      name
    }
  }
`;
