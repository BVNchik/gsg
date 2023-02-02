const VALID_TOKEN_REGEXP = new RegExp("^ghp_[a-zA-Z0-9]{36}$"); // https://gist.github.com/magnetikonline/073afe7909ffdd6f10ef06a00bc3bc88

export function checkToken(token: string) {
  return VALID_TOKEN_REGEXP.test(token);
}
