import React from 'react';

import './container.scss';

import Homepage from '../homepage/homepage';
import Biodata from '../biodata/biodata';
import Educations from '../educations/educations';

const Container = () => {
    return (
        <div className="container">
            <Homepage />
            <Biodata />
            <Educations />
        </div>
    );
};

export default Container;