import React from "react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>SideBar</li>
      </ul>
    </>
  );
}

export default Sidebar;
