import Dropdown from '@Components/Dropdown';
import React from 'react';

interface HeaderProps {
  mainTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ mainTitle }) => {
  return (
    <nav className="main-header navbar bg-primary text-white p-3">
      {mainTitle}
      <Dropdown />
    </nav>
  );
};

export default Header;
