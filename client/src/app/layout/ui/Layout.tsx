import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <h1 className={"text-sm"}>My App</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
