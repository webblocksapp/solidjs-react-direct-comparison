import React from 'react';
import Header from '../Header';
import './styles.css';

const CommonTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Header mainTitle="React App"></Header>
      <div className="main-container">{children}</div>
    </>
  );
};

export default CommonTemplate;
