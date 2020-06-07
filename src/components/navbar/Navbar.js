import React from "react";
import './navbar.scss'
const Navbar = () => {
  return (
     
    <nav class="navbar " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
