import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="nav-top">
        <p>music</p>
      </div>
      <div className="nav-bottom">
        <div className="nav-menu">
          <ul>
            <li>Trending</li>
            <li>popular</li>
            <li>New</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
