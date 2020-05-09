import React from 'react'

import './nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="item homepage">Homepage</div>
            <div className="item biodata">Biodata</div>
            <div className="item studies">Studies</div>
            <div className="item skills">Skills</div>
        </div>
    )
}

export default Nav;