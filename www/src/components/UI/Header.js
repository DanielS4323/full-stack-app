import React from "react";
import logo from "../../assets/favicon_ico.svg";

const Header = () => {
  return (
    <nav>
      <div className="primary-bg nav-wrapper">
        <img src={logo} alt='Company Logo' className="brand-logo center" />
        <ul id="nav-mobile" className="left hide-on-med-and-down margin all-10">
          <h5 className="tertiary-c">To Do App</h5>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
