import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navgator = ({ links }) => {
  return (
    <nav className="navgator">
      {links.map((link, i) => (
        <Link key={i} to={link.href} >
          <i className={`fa fa-${link.icon}`} aria-hidden="true"></i>
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navgator;