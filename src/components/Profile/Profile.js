import React from 'react';
import MyPic from '../../assets/images/anon-img.jpeg';
import './Profile.scss';

const Profile = () => {
    return (
        <div className="profile">
            <div className="container">
                <div className="detail-me-holder">
                    <div className="img-holder">
                        <img className="my-pic" src={MyPic} alt="pic-of-me"/>
                    </div>
                    <h1 className="title">a content writer</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;