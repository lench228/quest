// import { URLS } from "@/app/routers/app.urls";
// import { lazy } from "react";
import iRoute from "./types";

import { createElement, lazy, Suspense } from "react";

import Constructor from "../../pages/constructor";
import {URLS} from "app/const";
import Preloader from "shared/ui/loading/preloader";


const HomePage = lazy(() => import("../../pages/home"));


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
