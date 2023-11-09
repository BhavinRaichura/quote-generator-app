import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className=" fixed z-40 top-0 w-screen p-2 bg-yellow-400">
      <div className="flex flex-row justify-between px-10">
        <p
          className={
            path === "/"
              ? "font-semibold hover:font-medium"
              : " font-normal hover:font-medium"
          }
        >
          <Link to="/">Home</Link>
        </p>
        <p
          className={
            path === "/bookmarks"
              ? " font-semibold hover:font-medium"
              : "font-normal hover:font-medium"
          }
        >
          <Link to="/bookmarks">Bookmarks</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
