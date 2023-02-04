import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Jumbotron } from "./Jumbotron.jsx";

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
