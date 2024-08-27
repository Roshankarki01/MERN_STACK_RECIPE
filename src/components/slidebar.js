import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/category/breakfast"><SidebarOption title="Breakfast" /></Link>
      <Link to="/category/lunch"><SidebarOption title="Lunch" /></Link>
      <Link to="/category/dinner"><SidebarOption title="Dinner" /></Link>
      <Link to="/category/desserts"><SidebarOption title="Desserts" /></Link>
      <Link to="/category/snacks"><SidebarOption title="Snacks" /></Link>
    </div>
  );
}

function SidebarOption({ title }) {
  return (
    <div className="sidebarOption">
      <span>{title}</span>
    </div>
  );
}

export default Sidebar;
