import React from 'react';
import MyPic from '../../assets/images/anon-img.jpeg';
import './Profile.scss';

const Profile = () => {
    const profileText = {
        name: "Ilham Muhammad",
        role: "a Frontend Developer"
    }
    return (
        <div className="profile">
            <div className="detail-me-holder">
                <div className="img-holder">
                    <img className="my-pic" src={MyPic} alt="pic-of-me" />
                </div>
                <div className="text">
                    <span>{profileText.name}</span>
                    <br />
                    {profileText.role}
                </div>
            </div>
        </div>
    );
};

export default Profile;