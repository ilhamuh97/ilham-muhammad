import React from 'react';
import './SideNav.scss';

const SideNav = ({closeNav}) => {
    return (
        <div className="sidenav">
            <div className="links">
                <a className="link" href="#main" onClick={()=>closeNav()}>Home</a>
                <a className="link" href="/">Skills</a>
                <a className="link" href="/">Experiences</a>
                <a className="link" href="/">Educations</a>
                <a className="link" href="/">Galleries</a>
                <div className="close" onClick={()=>closeNav()}>Close</div>
            </div>
        </div>
    );
};

export default SideNav;