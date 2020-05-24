import React from 'react';
import { navs } from '../../constants/navItems';

const Footer = () => {
  return (
    <div className='footer'>
      <span>
        <ul>
          {navs
            .filter((nav) => nav.type === 'both')
            .map((nav, index) => (
              <li key={index} className='nav-link'>
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
        </ul>
      </span>
      <hr />
      <a href='/'>TMDbCine</a> &copy; {new Date().getFullYear()}. All rights
      reserved.
    </div>
  );
};

export default Footer;
