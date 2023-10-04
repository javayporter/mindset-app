import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  // need to add logic for react to wait until page is loaded to run function. if the nav height is updated, the margin will update dynamically to keep the page in place
  const returnHeight = () => {
    const navBar = document.querySelector(".navbar");
    const navHeight = navBar.offsetHeight;
    return `${navHeight}px`;
  };
  // must check if why const is ignored when added to style object
  const marginTop = "56px";

  // this is used as a test to verify returnHeight is working
  // onClick={console.log(returnHeight())}
  return (
    <div className="app">
      <NavBar class="app-navbar" />
      <div
        className="app-outlet"
        style={{
          marginTop: "56px",
        }}
      >
        <Outlet />
      </div>
      <div className="my-footer">
        <footer>&copy;2023. All Rights Reserved.</footer>
      </div>
    </div>
  );
};

export default Layout;
