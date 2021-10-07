import React from 'react';
import CommonTemplate from '@Components/CommonTemplate';
import MainRoutes from './routes/MainRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets';

const App: React.FC = () => {
  return (
    <Router>
      <CommonTemplate>
        <MainRoutes />
      </CommonTemplate>
    </Router>
  );
};

export default App;
