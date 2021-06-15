import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Cards from './Cards';

const API_URL =
  'https://truckoo-backend-aqkoiog6bq-ew.a.run.app/rest/v1/offers/active-offers';

const Dashboard = (props) => {
  const [vehicles, setVehicles] = useState([]);
  const [hasError, serErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      response
        .json()
        .then((res) => {
          setVehicles(res);
        })
        .catch((error) => serErrors(error));
    }

    fetchData();
  }, []);

  const errors = hasError ? 'Error loading data. Please try again' : null;

  return (
    <div>
      <Menu />
      <div>{errors}</div>
      <Cards cardsData={vehicles} />
    </div>
  );
};

export default Dashboard;
