type ParseUrlResult = {
  owner: string;
  name: string;
};
export function parseProjectUrl(url: string | null): ParseUrlResult {
  if (!url) return { owner: "", name: "" };
  const test = new URL(url);
  const [owner, name] = test.pathname.slice(1).split("/");

  return { owner, name };
}
