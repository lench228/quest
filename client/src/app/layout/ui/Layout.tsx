import { Outlet } from "react-router-dom";
import Navigation from "../../../widgets/navigation/ui/navigation.tsx";

export const Layout = () => {
  return (
    <div className={"h-screen"}>
      <header>
        <Navigation></Navigation>
      </header>
      <main className={"dark:bg-background bg-white"}>
        <Outlet />
      </main>
    </div>
  );
};
