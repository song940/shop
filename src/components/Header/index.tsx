import React from 'react';

import './index.css';

type HeaderType = {
  title: string,
};

const Header = ({ title }: HeaderType) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;