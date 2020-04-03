import React from 'react';
import './App.css';
import NavItem from '../Atoms/NavItem';


class Nav extends React.Component {
    render() {
        return (
            <ul className="kt-menu__nav ">
                <NavItem name='Home' href='/' />
            </ul>
        );
    }
}

export default Nav;