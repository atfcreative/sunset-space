import React from 'react';
import LoggedOutNavBar from './LoggedOutNavBar';
import LoggedInNavBar from './LoggedInNavBar';

const NavBar = (props) => {
    console.log(props);
    let navbar;
    if (props.isAuthenticated) {
        navbar = <LoggedInNavBar handleLogout={props.handleLogout} />
    }else{
        navbar = <LoggedOutNavBar />
    }
    return (
            [navbar]
        );
    }

 
export default NavBar;