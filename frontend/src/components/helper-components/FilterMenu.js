import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {
  filterURL,
  filterUrlGenre,
  searchParam,
} from '../../services/searchParam';

export const FilterMenu = ({ menu, option, title }) => (
  <Dropdown
    overlay={
      <Menu>
        {menu &&
          menu
            .sort((oldest, latest) => latest - oldest)
            .map((result, index) => {
              const opt = searchParam(option);
              return (
                <Menu.Item
                  key={index}
                  onClick={() => {
                    option === 'with_genre_id'
                      ? filterUrlGenre('with_genre_id', result.id)
                      : filterURL(option, result.value || result);
                  }}
                  className={
                    opt &&
                    (opt === result.value
                      ? 'active'
                      : '' || opt === result
                      ? 'active'
                      : '' ||
                        opt
                          .split(',')
                          .map((s) => (s === `${result.id}` ? 'active' : '')))
                  }
                >
                  {result.name || result}
                </Menu.Item>
              );
            })}
      </Menu>
    }
    trigger={['click']}
  >
    <Button>
      {title}&ensp;
      <i className='fa fa-angle-down' />
    </Button>
  </Dropdown>
);
