import React from 'react';

import { Nav, Navbar } from "react-bootstrap";
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavItem from '../Atoms/NavItem';

const collapseLeft = [
    { name: 'Recruitment', href: '/recruitment' },
    { name: 'Review', href: '/review' },
    { name: 'Goals', href: '/goal' },
];

const collapseRight = [
    { name: <FontAwesomeIcon icon={faSearch} />, href: '#search' },
]

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navItemLeftList: collapseLeft.map(function (item) { return <NavItem name={item.name} href={item.href}></NavItem> }),
            navItemRightList: collapseRight.map(function (item) { return <NavItem name={item.name} href={item.href}></NavItem> })
        };
    }

    render() {
        return (
            <Navbar className='kt-header kt-header--fixed kt-container  kt-container--fluid '>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav fill className=''>{this.state.navItemLeftList}</Nav>
                </Navbar.Collapse>

                <Navbar.Collapse>
                    <Navbar.Brand href="#home">HRM</Navbar.Brand>
                </Navbar.Collapse>

                <Navbar.Collapse>
                    <Nav>
                        {this.state.navItemRightList}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Header;