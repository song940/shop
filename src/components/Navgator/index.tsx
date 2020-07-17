import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

const Navgator = ({ links }) => {
  return (
    <nav className="navgator">
      {links.map((link, i) => (
        <Link key={i} to={link.href} >
          <FontAwesomeIcon className="fa" icon={link.icon} />
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navgator;