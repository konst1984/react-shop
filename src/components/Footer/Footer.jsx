import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer light-blue black">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://konst1984.github.io/react-shop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
