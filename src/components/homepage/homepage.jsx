import React from 'react'

import './homepage.scss'
import PhotoProfile from '../../assets/photoProfile.jpg'

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero-content">
                <div className="">
                    <h1 className="welcome-text">Hey There!</h1>
                    <h2 className="my-name-text">I am <span>Ilham Muhammad</span></h2>
                    <p className="description-text">and I am a media informatics student in Berlin</p>
                    <div className="button-holder">
                        <button>See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;