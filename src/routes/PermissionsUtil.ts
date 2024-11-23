import { AppPageStringConstants as c } from "@lib/DisplayConstants";

export function checkRouteHasRequiredPermissions(pathId: string): boolean {
  if (pathId === c.pathId.INTERNAL) {
    return false;
  }
  return true;
}
