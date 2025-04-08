import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import Layout from "../layout";

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [...PublicRoutes, ...PrivateRoutes]
  }
]);
