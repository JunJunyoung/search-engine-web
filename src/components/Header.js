import React, { useState } from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="header1">
      <div className="l-menu1">
        <ul className="menu1">
          <li className="menu__item1">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item1">
            <Link to="/community">커뮤니티</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
