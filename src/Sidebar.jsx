import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Tobi Adegbuji</h2>
        <h4>A dedicated programmer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__statNumber">1,234</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post?</p>
          <p className="sidebar__statNumber">0</p>
        </div>
      </div>

      <div className="sidebar__bottom"></div>
    </div>
  );
}

export default Sidebar;
