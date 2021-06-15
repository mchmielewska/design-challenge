import React from 'react';

const SearchField = (props) => {
  return (
    <div className="searchContainer">
      <form className="formRoot">
        <input
          type="text"
          className="inputField"
          placeholder="Search"
          id="searchInput"
        />
        <button type="submit" className="menuButton">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
