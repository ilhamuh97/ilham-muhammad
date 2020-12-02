import React from 'react';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';

import './intro.scss'

const intro = () => {

    return (
        <div id="intro" className="hero-content">
            <div className="info">
                <div className="image-holder">
                    <div className="background-image"></div>
                </div>
                <div className="description">
                    <div className="title">
                        <p className="main">I'm <span>Ilham Muhammad</span></p>
                        <p className="submain">Informatic for Media Student</p>
                    </div>
                    <div className="detail">
                        <div className="detail-wrapper">
                            <div className="left">
                                Age
                            </div>
                            <div className="right">
                                23
                            </div>
                        </div>
                        <div className="detail-wrapper">
                            <div className="left">
                                Study
                            </div>
                            <div className="right">
                                HTW Berlin
                            </div>
                        </div>
                        <div className="detail-wrapper">
                            <div className="left">
                                Hobby
                            </div>
                            <div className="right">
                                Reading, Sport, and Programming
                            </div>
                        </div>
                        <div className="detail-wrapper">
                            <div className="left">
                                E-mail
                            </div>
                            <div className="right">
                                ilhamh97@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-search">
                <div className="social-media">
                    <a className="facebook" href="https://web.facebook.com/ilhamm.muhammad.5">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a className="twitter" href="https://twitter.com/Ilhamuh97">
                        <img src={twitter} alt="facebook" />
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/ilhammuhammad-735b2b187/">
                        <img src={linkedin} alt="facebook" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default intro;