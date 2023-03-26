import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css'
import Logo from '../../assets/logo1.png'

const Header = () => {
    return (
        <div className='Navigation'>
            <Navbar style={{ backgroundColor: "#34495E", height: "70px", }}>
                <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'><img src={Logo} alt="Logo" width="90px" /></NavbarBrand>
                <Nav className='mr-md-5'>
                    <NavItem>
                        <NavLink herf="#" className='NavLink'>Something</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </div>
    );
};

export default Header;