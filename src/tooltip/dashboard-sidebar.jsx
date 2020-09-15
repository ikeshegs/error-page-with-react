import React from 'react';

import './dashboard.styles.scss';

import playlistSVG from './playlists-icon.svg';
import locationSVG from './Location icon.svg';
import librarySVG from './Library icon.svg';
import logoSVG from './Logo-white.svg';
import manageUserSVG from './manage-users-icon.svg';
import promotionsSVG from './promotions-icon-24px.svg';
import roleSVG from './roles-icon.svg';
import stationsSVg from './stations-icon-24px.svg';

const DashboardSidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container hidden">
        <img className="logo-svg" src={logoSVG} alt="Josplay Logo" />
      </div>

      <div className="sidebar--section">
        <div className="sidebar--section__header hidden">
          <h4 className="h4">Browse Music</h4>
        </div>
        <div className="sidebar--items">
          <div className="sidebar--items__block">
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Station" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={stationsSVg}
                  alt="stations icon"
                />
              </div>
              <p className="hidden">Station</p>
            </div>
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Playlists" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={playlistSVG}
                  alt="stations icon"
                />
              </div>
              <p className="hidden">Playlists</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar--section">
        <div className="sidebar--section__header hidden">
          <h4 className="h4">For You</h4>
        </div>
        <div className="sidebar--items">
          <div className="sidebar--items__block">
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Locations" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={locationSVG}
                  alt="Location icon"
                />
              </div>
              <p className="hidden">Locations</p>
            </div>
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Library" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={librarySVG}
                  alt="A Library icon"
                />
              </div>
              <p className="hidden">Library</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar--section">
        <div className="sidebar--section__header hidden">
          <h4 className="h4">Promotions</h4>
        </div>
        <div className="sidebar--items">
          <div className="sidebar--items__block">
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Promotions" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={promotionsSVG}
                  alt="stations icon"
                />
              </div>
              <p className="hidden">Promotions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar--section">
        <div className="sidebar--section__header hidden">
          <h4 className="h4">User Management</h4>
        </div>
        <div className="sidebar--items">
          <div className="sidebar--items__block">
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Manage Users" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={manageUserSVG}
                  alt="stations icon"
                />
              </div>
              <p className="hidden">Manage Users</p>
            </div>
            <div className="sidebar--items__block-sec">
              <div data-tooltip="Roles and Permissions" className="tooltip">
                <img
                  className="sidebar--items__block--icon"
                  src={roleSVG}
                  alt="stations icon"
                />
              </div>
              <p className="hidden">Roles and Permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
