import React from 'react';
import {Link} from "react-router-dom";

const AppMenu = () => {
    const menuStyle = {
        display: 'flex',
        padding: '10px',
        borderBottom: '1px solid black',
        marginBottom: '10px'
    };
    const menuItemStyle = {
        cursor: 'pointer',
        margin: '10px'
    };

    return (
        <div style={menuStyle}>
            <Link to='/' style={menuItemStyle}>People List</Link>
            <Link to='/favorite-list' style={menuItemStyle}>Favorite List</Link>
        </div>
    );
};

export default AppMenu;