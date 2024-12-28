import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
