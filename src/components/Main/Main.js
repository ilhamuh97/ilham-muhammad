import React from "react";
import Hero from "../Hero/Hero";
import Profile from "../Profile/Profile";
import "./Main.scss";

const Main = () => {
    return (
        <div id="main">
            <div className="container">
                <Hero />
                <Profile />
            </div>
        </div>
    );
};

export default Main;
