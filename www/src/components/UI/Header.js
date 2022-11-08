import React from "react";
import logo from "../../assets/favicon_ico.svg";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-3">
        <img src={logo} alt='Company Logo' className="brand-logo center" />
        <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
      </div>
    </nav>
  );
};

export default Header;
