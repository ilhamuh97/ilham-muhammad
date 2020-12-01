import React, { Component } from 'react';

import './nav.scss'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="link">
                    <a href="#homepage" className="nav-item">Home</a>
                </div>
                <div className="link">
                    <a href="#biodata" className="nav-item">Biodata</a>
                </div>
                <div className="link">
                    <a href="#section3" className="nav-item">Studies</a>
                </div>
                <div className="link">
                    <a href="#section4" className="nav-item">Skills</a>
                </div>
            </div>
        )
    }

}

export default Nav;