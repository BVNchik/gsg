export const graphqlUrl = process.env.API_GRAPHQL_URL;
export const secretToken = process.env.SECRET_TOKEN || "secret_token";
export const isProduction = process.env.NODE_ENV === "production";
export const generateTokenUrl =
  process.env.GENERATE_TOKEN_URL ||
  "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token";
