import { lazy } from "react";
import { AppPageStringConstants as c } from "@lib/DisplayConstants";
import { RouteInfo } from "@interfaces/RouteInfo";

export const Routes: RouteInfo[] = [
  {
    Component: lazy(() => import("@pages/Landing/Home")),
    path: c.pathId.MAIN,
    title: c.title.MAIN,
  },
  {
    Component: lazy(() => import("@pages/About/About")),
    path: c.pathId.ABOUT,
    title: c.title.ABOUT,
  },
  {
    Component: lazy(() => import("@pages/Contact/Contact")),
    path: c.pathId.CONTACT,
    title: c.title.CONTACT,
  },
  {
    Component: lazy(() => import("@pages/Articles/Articles")),
    path: c.pathId.ARTICLES,
    title: c.title.ARTICLES,
  },
  {
    Component: lazy(() => import("@pages/Internal/Internal")),
    path: c.pathId.INTERNAL,
    title: c.title.INTERNAL,
  },
];
