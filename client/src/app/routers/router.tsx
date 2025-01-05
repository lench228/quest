import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes.tsx";

export const appRouter = createBrowserRouter([
  {
    // element: <Layout />,
    children: [...PublicRoutes, ...PrivateRoutes]
  }
]);
