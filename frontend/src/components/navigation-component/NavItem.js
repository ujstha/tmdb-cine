import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tooltip } from 'antd';
import { IconButton } from '@material-ui/core';
import { navs } from '../../constants/navItems';

const NavItem = ({ location }) =>
  navs
    .filter((filteredNav) => filteredNav.type !== 'loggedIn')
    .map((nav, index) => (
      <Tooltip key={index} placement='bottom' title={nav.title}>
        <li className='nav-item'>
          <a
            href={nav.path}
            className={nav.path === location.pathname ? 'active' : ''}
          >
            <IconButton>
              <i className={nav.icon} />
            </IconButton>
          </a>
        </li>
      </Tooltip>
    ));

export default withRouter(NavItem);
