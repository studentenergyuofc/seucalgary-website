import { Suspense } from "react";
import { Routes as AppRoutesConfig } from "@routes/RouteDefs";
import { RouteInfo } from "@interfaces/RouteInfo";
import { AppPageStringConstants as c } from "@lib/DisplayConstants";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "@layout/AppLayout";
import { checkRouteHasRequiredPermissions } from "./PermissionsUtil";

const AppRoutes = (): JSX.Element => {
  const routes = AppRoutesConfig.filter((route: RouteInfo) => {
    return checkRouteHasRequiredPermissions(route.path);
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <route.Component />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<Navigate to={`/${c.pathId.MAIN}`} />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
