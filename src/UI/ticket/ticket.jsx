import React from 'react';
import './ticket.scss';

const ticket = (props) => {
    const {
        title,
        substances
    } = props;
    const substanceDiv = substances.map((substance, i) =>
        <div key={i} className="substance">
            <div className="description">
                <p>{substance.skillTitle}</p>
                <p>{substance.rating.toString()}%</p>
            </div>
            <div className="diagramm">
                <div
                    class="left"
                    style={{ width: substance.rating + '%' }}></div>
                <div
                    class="right"
                    style={{ width: 100 - substance.rating+ '%' }}></div>
            </div>
        </div>
    )
    return (
        <div className="ticket">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="substances">
                {substanceDiv}
            </div>
        </div>
    );
};

export default ticket;
