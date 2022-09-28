import React from 'react';
import './SideNav.scss';

const SideNav = ({ closeNav }) => {
    return (
        <div className="sidenav">
            <div className="links">
                <a className="link" href="#main" onClick={() => closeNav()}>Home</a>
                <a className="link" href="#project" onClick={() => closeNav()}>Projects</a>
                <a className="link" href="#experience">Experiences</a>
                <a className="link" href="#education">Educations</a>
                <a className="link" href="#project">Projects</a>
                <div className="close" onClick={() => closeNav()}>Close</div>
            </div>
        </div>
    );
};

export default SideNav;