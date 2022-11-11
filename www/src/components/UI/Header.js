import React from "react";
import logo from "../../assets/favicon_ico.svg";

const Header = () => {
  return (
    <nav className="grey darken-4">
      <div className="nav">
        <img src={logo} alt="Company Logo" className="brand-logo center" />
        <ul id="nav-mobile" className="left hide-on-med-and-down margin all-10">
          <h5 className="deep-purple-text text-lighten-1">To Do App</h5>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
