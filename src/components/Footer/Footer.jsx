import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer light-blue black">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="store/src/components/Footer/Footer#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
