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
            <li>
              <a href="./Trending">Trending</a>
            </li>
            <li>
              <a href="./Popular">popular</a>
            </li>
            <li>
              <a href="About.js">About</a>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
