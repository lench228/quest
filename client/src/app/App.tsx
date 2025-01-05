import { RouterProvider } from "react-router-dom";

import { Providers } from "./providers";
import "./styles/global.css";
import { appRouter } from "./routers/router.tsx";

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={appRouter} />
    </Providers>
  );
};
