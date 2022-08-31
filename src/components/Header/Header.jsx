import React from 'react';

const Header = () => {
  return (
    <nav className="light-blue black">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://konst1984.github.io/react-shop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
