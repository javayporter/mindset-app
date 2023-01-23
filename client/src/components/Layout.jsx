import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <div className="app">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
