import React from 'react';
import { Router } from '@reach/router';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="appRoot">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Router>
          <Dashboard path="/" />
        </Router>
      </div>
    </div>
  );
};

export default App;
