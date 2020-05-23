import React from 'react';
import { Input } from 'antd';

const SearchInput = ({
  value,
  handleSubmit,
  handleChange,
  handleFocus,
  searchInputOpen,
  toggleSearchInput,
}) => (
  <nav
    className={`navbar-search-input navbar navbar-expand-lg navbar-light bg-light fixed-top ${
      searchInputOpen ? '' : 'inactive'
    }`}
  >
    {searchInputOpen && (
      <form onSubmit={handleSubmit} className='search__search-input container'>
        <Input
          size='middle'
          id='search__search-focus'
          onFocus={handleFocus}
          onChange={handleChange}
          value={value}
          placeholder='Search for Movies, TV and Celebrities.....'
          suffix={
            <i
              className='fa fa-times search__search-close btn'
              onClick={toggleSearchInput}
            />
          }
        />
      </form>
    )}
  </nav>
);

export default SearchInput;
