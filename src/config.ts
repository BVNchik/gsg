export const graphqlUrl = process.env.API_GRAPHQL_URL;
export const secretToken = process.env.SECRET_TOKEN || "secret_token";
export const isProduction = process.env.NODE_ENV === "production";
