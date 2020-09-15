import React from 'react';

import DashboardSidebar from './dashboard-sidebar';
import DashboardMain from './dashboard-main';

import './dashboard.styles.scss';

const DashboardTooltip = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard--main">
        <DashboardSidebar />
        <DashboardMain />
      </div>
      <div className="media">
        <h3>Media Player will go here</h3>
      </div>
    </div>
  );
};

export default DashboardTooltip;
