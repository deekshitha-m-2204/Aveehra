export const BASE_PATH = "/Aveehra";

/**
 * Returns a basePath-aware URL for assets located in the /public folder.
 * Ensures references resolve through /Aveehra/... on GitHub Pages and local dev.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("//")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === BASE_PATH || cleanPath.startsWith(`${BASE_PATH}/`)) {
    return cleanPath;
  }
  return `${BASE_PATH}${cleanPath}`;
}
