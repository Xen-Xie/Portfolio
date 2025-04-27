import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Full height layout */}
      <NavBar />
      <main className="flex-grow"> {/* main grows to fill space */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
