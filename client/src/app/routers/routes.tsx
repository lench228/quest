// import { URLS } from "@/app/routers/app.urls";
// import { lazy } from "react";
import iRoute from "./types";

import { createElement, lazy, Suspense } from "react";
import { URLS } from "../const.ts";
import Preloader from "../../shared/ui/loading/ui/preloader.tsx";
import Constructor from "../../pages/constructor";

// import React from "react";

const HomePage = lazy(() => import("../../pages/home"));
//

export const PublicRoutes: iRoute[] = [
  {
    path: URLS.home,
    element: (
      <Suspense fallback={<Preloader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: URLS.constructor,
    element: (
      <Suspense fallback={<Preloader />}>
        <Constructor />
      </Suspense>
    ),
  },
];

export const PrivateRoutes: iRoute[] = [
  {
    path: URLS.constructor,
    element: createElement("div"),
  },
];
