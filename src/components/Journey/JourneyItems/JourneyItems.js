import React from 'react';
import Study from './Study/Study';
import Work from './Work/Work';
import "./JourneyItems.scss";

const JourneyItems = ({ journey }) => {

    const journeyItem = journey.map((item, i) => {
        if (item.type === "work") {
            return (
                <div key={i} className="journey-item">
                    <Work item={item} i={i} />
                    {i === journey.length - 1 ? null : (
                        <div className="vl"></div>
                    )}
                </div>
            )
        } else {
            return (
                <div key={i} className="journey-item">
                    <Study item={item} i={i} />
                    {i === journey.length - 1 ? null : (
                        <div className="vl"></div>
                    )}
                </div>
            )
        }

    })

    return (
        <div className="journey-items">
            {journeyItem}
        </div>
    );
};

export default JourneyItems;