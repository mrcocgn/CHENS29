import React from "react";
import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Über uns</Link></li>
          <li><Link to="/services">Dienstleistungen</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterNav;
