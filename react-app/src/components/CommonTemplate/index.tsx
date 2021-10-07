import React from 'react';
import Header from '../Header';
import './styles.css';

const CommonTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Header mainTitle="React App"></Header>
      <div className="main-container">
        <div className=" p-3">{children}</div>
      </div>
    </>
  );
};

export default CommonTemplate;
