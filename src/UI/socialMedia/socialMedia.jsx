import React from 'react';
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import linkedin from '../../assets/img/linkedin.png';

import './socialMedia.scss';

const socialMedia = () => {
    return (
        <div className="profile-search">
            <div className="social-media">
                <a className="facebook" href="https://web.facebook.com/ilhamm.muhammad.5">
                    <img src={facebook} alt="facebook" />
                </a>
                <a className="twitter" href="https://twitter.com/Ilhamuh97">
                    <img src={twitter} alt="facebook" />
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/ilhammuhammad-735b2b187/">
                    <img src={linkedin} alt="facebook" />
                </a>
            </div>
        </div>
    );
};

export default socialMedia;