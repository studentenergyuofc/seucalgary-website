import { lazy } from "react";
import { AppPageStringConstants as c } from "@lib/DisplayConstants";
import { RouteInfo } from "@interfaces/RouteInfo";

export const Routes: RouteInfo[] = [
  {
    Component: lazy(() => import("@pages/landing/index")),
    path: c.pathId.MAIN,
    title: c.title.MAIN,
  },
  {
    Component: lazy(() => import("@pages/about/index")),
    path: c.pathId.ABOUT,
    title: c.title.ABOUT,
  },
  {
    Component: lazy(() => import("@pages/contact/index")),
    path: c.pathId.CONTACT,
    title: c.title.CONTACT,
  },
  {
    Component: lazy(() => import("@pages/projects/index")),
    path: c.pathId.PROJECTS,
    title: c.title.PROJECTS,
  },
  {
    Component: lazy(() => import("@pages/internal/index")),
    path: c.pathId.INTERNAL,
    title: c.title.INTERNAL,
  },
];
