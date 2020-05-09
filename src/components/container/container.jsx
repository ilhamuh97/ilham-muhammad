import React from 'react';

import './container.scss'

import Homepage from '../homepage/homepage'
import Biodata from '../biodata/biodata'

const Container = () => {
    return (
        <div className="container">
            <Homepage />
            <Biodata />
        </div>
    );
};

export default Container;