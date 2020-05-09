import React, { Component } from 'react';

import './nav.scss'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <a href="#section1" className="nav-item">Homepage</a>
                <a href="#section2" className="nav-item">Biodata</a>
                <a href="#section3" className="nav-item">Studies</a>
                <a href="#section4" className="nav-item">Skills</a>
            </div>
        )
    }

}

export default Nav;