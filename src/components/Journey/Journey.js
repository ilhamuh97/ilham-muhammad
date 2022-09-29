import React from 'react';
import JourneyItems from './JourneyItems/JourneyItems';
import { journey } from '../../assets/data/journey';
import "./Journey.scss";

const Journey = () => {
    return (
        <div id="journey" className="journey">
            <div className="container">
                <h2 className="title">
                    My Journey
                </h2>
                <JourneyItems journey={journey} />
            </div>
        </div>
    );
};

export default Journey;