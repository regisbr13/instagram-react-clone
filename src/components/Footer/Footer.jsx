import React from "react";

import "./Footer.scss";

const Footer = () => (
  <header className="footer" data-testid="footer">
    <div className="container">
      <a href="https://github.com/regisbr13/instagram-react-clone">Código do projeto</a>
      <span>
        Made with <i className="fab fa-react"></i>
      </span>
      <a href="https://www.regislimaprojects.site/">Mais Projetos</a>
    </div>
  </header>
);

export default Footer;
