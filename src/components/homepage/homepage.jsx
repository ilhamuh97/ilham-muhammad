import React from 'react'

import './homepage.scss'

const Homepage = () => {
    return (
        <div id="section1" className="section homepage">
            <div className="hero-content">
                <div className="">
                    <h1 className="welcome-text">Hey There!</h1>
                    <h2 className="my-name-text">I am <span>Ilham</span></h2>
                    <p className="description-text"><i>and I am a media informatics student in Berlin</i></p>
                    <div className="button-holder">
                        <a href="#section2">
                            <button>See More</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;