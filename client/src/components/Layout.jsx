import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="app-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
