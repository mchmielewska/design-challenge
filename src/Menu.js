import React from 'react';
import SearchField from './SearchField';
import SortField from './SortField';
import { Box } from "@material-ui/core";

const Menu = ( props ) => {
    return (
        <Box className="menu-container" display="flex">
            <SearchField />
            <SortField />
        </Box>
    )
}

export default Menu;