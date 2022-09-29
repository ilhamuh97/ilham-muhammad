import React from 'react';
import './Nav.scss';
import { useSelector } from 'react-redux';

const Nav = ({ openNav }) => {
    const isMobile = useSelector((state) => state.app.device.isMobile);
    const isTablet = useSelector((state) => state.app.device.isTablet);
    const scrollY = useSelector((state) => state.app.device.scrolled);

    return (
        <nav className={`nav${scrollY > 70 ? ' scroll-70' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <div className="wrapper">
                        <a href="/" className="logo">Ilham</a>
                    </div>
                    {
                        isMobile || isTablet ? (
                            <div className="wrapper">
                                <i onClick={() => openNav()} className="fas fa-bars bar-icon" />
                            </div>
                        ) : (
                            <div className="wrapper links">
                                <a className="link" href="#main">Home</a>
                                <a className="link" href="#journey">Journey</a>
                                <a className="link" href="/#project">Projects</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Nav;