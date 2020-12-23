import React from 'react';

import './educations.scss';

const educations = () => {
    return (
        <div id="educations" className="section educations">
            <h1 className="super-title">Educations</h1>
            <div className="educations-wrapper">
                <div className="education-wrapper left">
                    <div className="education">
                        <div className="time-info">
                            2016 - Now
                            </div>
                        <div className="name">
                            <h2>Informatic for Media</h2>
                        </div>
                        <div className="sector-info">
                            Unievrsity of Applied Science, Berlin
                            </div>
                    </div>
                    <div className="education">
                        <div className="time-info">
                            2018-Now
                        </div>
                        <div className="name">
                            <h2>ReactJS Online Course</h2>
                        </div>
                        <div className="sector-info">
                            Udemy
                        </div>
                    </div>
                    <div className="education">
                        <div className="time-info">
                            2014-2015
                        </div>
                        <div className="name">
                            <h2>Intensive German Course</h2>
                        </div>
                        <div className="sector-info">
                            Euro Management Language School
                        </div>
                    </div>
                </div>
                <div className="education-wrapper right">
                    <div className="education">
                        <div className="time-info">
                            2020-Now
                        </div>
                        <div className="name">
                            <h2>Elasticsearch Online Course</h2>
                        </div>
                        <div className="sector-info">
                            Udemy
                        </div>
                    </div>
                    <div className="education">
                        <div className="time-info">
                            2015-2016
                        </div>
                        <div className="name">
                            <h2>Preparatory Courses</h2>
                        </div>
                        <div className="sector-info">
                            Studienkolleg TU Berlin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default educations;