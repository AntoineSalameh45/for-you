import React, { Suspense, useMemo } from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router";

import { routeNames } from "./routeNames";
import RightNow from "../../components/pages/RightNow/RightNow";

const ForYou = React.lazy(() =>
  import("../../components/pages/ForYou").then((module) => ({
    default: module.ForYou,
  }))
);

const Routes = () => {
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <Route errorElement={<></>}>
          <Route
            path="/"
            element={
                <Navigate to={routeNames.forYou} />
            }
          />
            <Route path={routeNames.forYou} element={<ForYou />} />
            <Route path={routeNames.rightNow} element={<RightNow />} />
        </Route>
      )
    );
  }, []);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export { Routes };
