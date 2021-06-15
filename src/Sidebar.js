import React from 'react';
import { Link } from '@reach/router';

const Sidebar = (props) => {
  return (
    <>
      <img
        className="logo"
        alt="logo"
        src="https://www.truckoo.com/img/logo_lightbg.72dba19b.svg"
      ></img>
      <Link to="/">
        <button className="fullWidth">Dashboard</button>
      </Link>
      <Link to="/logout">
        <button className="fullWidth">Logout</button>
      </Link>
    </>
  );
};

export default Sidebar;
