import { RouterProvider } from "react-router-dom";

import { Providers } from "./providers";

import { appRouter } from "./routers/router";
import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.log("App started");
  });
  return (
    <Providers>
      <RouterProvider router={appRouter} />
    </Providers>
  );
};
