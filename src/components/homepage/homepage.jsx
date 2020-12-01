import React from 'react'

import Intro from '../intro/intro'
import './homepage.scss'

const Homepage = () => {
    return (
        <div id="homepage" className="hero homepage">
            <div id="overlay"></div>
            <Intro />
        </div>
    )
}

export default Homepage;