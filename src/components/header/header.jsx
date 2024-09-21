import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../img/лого.svg'
import home from '../../img/logo_home.svg'
import map from '../../img/logo_map.svg'
import heart from '../../img/logo_heart.svg'
const Header = () => {
    const location = useLocation();
    return (
        <header className="header">
            <div className="header_container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>Голодный<span>студент</span></h1>
                </div>
                <nav className="nav">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <img src={home} alt="" />
                        <p>О нас</p>
                    </Link>
                    <Link to="/map" className={`nav-link ${location.pathname === '/map' ? 'active' : ''}`}>
                        <img src={map} alt="" />
                        <p>Карта</p>
                    </Link>
                    <Link to="/favorites" className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}>
                        <img src={heart} alt="" />
                        <p>Избранное</p>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
