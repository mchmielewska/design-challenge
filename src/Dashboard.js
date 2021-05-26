import React from 'react';
import Menu from './Menu';
import Cards from './Cards';
import data from './data';

const Dashboard = ( props ) => {
    let cardsData = data;
    return (
        <div>
            <Menu />
            <Cards cardsData={cardsData}/>
        </div>
    )
}

export default Dashboard;