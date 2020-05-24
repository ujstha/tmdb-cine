import React from 'react';
import { withRouter } from 'react-router-dom';
import { Switch } from 'antd';
import { IconButton } from '@material-ui/core';
import { navs } from '../../constants/navItems';
import storage from '../../services/storage';

const SideNavigationBar = ({
  collapsed,
  setWrapperRef,
  handleThemeChange,
  location,
}) => {
  const dark_theme = storage.get('dark_theme') === 'true' ? true : false;
  const auth = storage.get('authToken') ? true : false;

  return (
    <div
      className={`side-navigation ${collapsed ? '' : 'collapsed'}`}
      ref={setWrapperRef}
    >
      {collapsed && (
        <ul>
          <li className='side-navigation-close-btn'>
            <IconButton>
              <i className='material-icons'>close</i>
            </IconButton>
          </li>
          <hr />
          {navs
            .filter(
              (filteredNav) =>
                filteredNav.type !== (auth ? 'loggedOut' : 'loggedIn')
            )
            .map((nav, index) => {
              return (
                <li key={index}>
                  <a
                    href={nav.path}
                    className={nav.path === location.pathname ? 'active' : ''}
                  >
                    <IconButton disabled>
                      <i className={nav.icon} />
                    </IconButton>
                    <span className='side-navigation-title'>{nav.title}</span>
                  </a>
                </li>
              );
            })}
          <li>
            <span>
              <IconButton>
                <i className='fa fa-moon-o' />
              </IconButton>
              <span className='side-navigation-title'>
                Dark Theme: {dark_theme ? 'On' : 'Off'}
              </span>
              &ensp;
              <Switch
                defaultChecked={dark_theme}
                onChange={handleThemeChange}
              />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default withRouter(SideNavigationBar);
