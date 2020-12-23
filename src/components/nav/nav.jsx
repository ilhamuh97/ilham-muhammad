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
                    <a href="#skills" className="nav-item">Skills</a>
                </div>
                <div className="link">
                    <a href="#experiences" className="nav-item">Experiences</a>
                </div>
                <div className="link">
                    <a href="#educations" className="nav-item">Educations</a>
                </div>
            </div>
        )
    }

}

export default Nav;