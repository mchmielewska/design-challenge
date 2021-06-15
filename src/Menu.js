import React from 'react';
import SearchField from './SearchField';
import SortField from './SortField';

const Menu = (props) => {
  return (
    <div className="menuContainer">
      <SearchField />
      <SortField />
    </div>
  );
};

export default Menu;
