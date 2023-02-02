import { gql } from "@apollo/client";

export type ViewerResult = {
  viewer: {
    avatarUrl: string;
    name: string;
  };
};

export const VIEWER = gql`
  query viewer {
    viewer {
      avatarUrl
      name
    }
  }
`;
