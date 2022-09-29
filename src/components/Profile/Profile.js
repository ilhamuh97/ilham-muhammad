import React from 'react';
import MyPic from '../../assets/images/ilham-muhammad.jpeg';
import { profileText } from '../../assets/data/profile';
import './Profile.scss';

const Profile = () => {

    return (
        <div className="profile">
            <div className="detail-me-holder">
                <div className="img-holder">
                    <img className="my-pic" src={MyPic} alt="Ilham Muhammad" />
                </div>
                <p className="text">
                    <span>{profileText.name}</span>
                    <br />
                    {profileText.role}
                </p>
            </div>
        </div>
    );
};

export default Profile;