import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import { HashLink as Link } from "react-router-hash-link";
import logo from '../logo/logo-light.png'


const NavBar = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };




    return (


        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>

            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="#link1"><img src={logo} alt="Crybox" /></NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">
                            <li><Link className="hover-underline-animation" smooth to="#link1">Home</Link></li>
                            <li><Link className="hover-underline-animation" smooth to="#link2">About</Link></li>
                            <li><Link className="hover-underline-animation" smooth to="#link3">Team</Link></li>
                            <li><Link smooth to="#link4">Company</Link></li>
                            <li><Link smooth to="#link5">Department</Link></li>
                            <li><Link smooth to="#link6">Gallery</Link></li>
                            <li><Link smooth to="#link7">Contact</Link></li>

                           
                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;