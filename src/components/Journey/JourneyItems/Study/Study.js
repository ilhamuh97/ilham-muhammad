import React from "react";
import { RiBook2Fill } from "react-icons/ri";
import "./Study.scss";

const Study = ({ item, i }) => {
    return (
        <div key={i} className="journey-item-study">
            <div className="icon-and-title">
                <RiBook2Fill />
                <h3 className="journey-item-title">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {item.title}
                    </a>
                </h3>
            </div>
            <span className="journey-item-year">
                {item.major}, {item.year}
            </span>
        </div>
    );
};

export default Study;
