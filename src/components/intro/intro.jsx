import React from 'react';
import SocialMedia from '../../UI/socialMedia/socialMedia'
import detailMe from '../../assets/detailMe'

import './intro.scss'

const intro = () => {
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    const detailWrapper = detailMe.map((detail, i) =>
        <div className="detail-wrapper">
            <div className="left">
                {detail.title}
            </div>
            <div className="right">
                {detail.title === 'Age' ? getAge(detail.value) : detail.value}
            </div>
        </div>
    );
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
                        {detailWrapper}
                    </div>
                </div>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default intro;