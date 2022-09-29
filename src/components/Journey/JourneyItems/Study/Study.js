import React from 'react';
import "./Study.scss";

const Study = ({ item, i }) => {
    return (
        <div key={i} className="journey-item-study">
            <h3 className="journey-item-title">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                </a>
            </h3>
            <span className="journey-item-year">
                {item.major}, {item.year}
            </span>
        </div>
    );
};

export default Study;