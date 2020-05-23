import React from 'react';
import { IconButton } from '@material-ui/core';
import { Tooltip } from 'antd';
import NavItem from './NavItem';

const NavigationBar = ({
  toggleSideNav,
  toggleSearchInput,
  searchInputOpen,
}) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top navigation-bar ${
        !searchInputOpen ? '' : 'inactive'
      }`}
    >
      {!searchInputOpen && (
        <>
          <IconButton onClick={toggleSideNav}>
            <i className='fa fa-bars' />
          </IconButton>
          <a className='navbar-brand ml-3' href='/'>
            TMDbCine
          </a>
          <ul className='navbar-nav ml-auto'>
            <NavItem />
            <Tooltip placement='bottom' title='Search'>
              <li className='nav-item' onClick={toggleSearchInput}>
                <IconButton>
                  <i className='fa fa-search' />
                </IconButton>
              </li>
            </Tooltip>
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
