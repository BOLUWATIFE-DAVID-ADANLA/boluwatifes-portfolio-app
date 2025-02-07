import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar is always visible */}
      <main>
        <Outlet /> {/* Renders the active route’s component */}
      </main>
    </div>
  );
};

export default Layout;
