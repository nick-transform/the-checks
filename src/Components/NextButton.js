import React from 'react';
import AUbutton from '@gov.au/buttons';

export default ({path, text}) => {
    return (
        <div className="button-wrapper">
            <AUbutton link={path}>{text}</AUbutton>
        </div>
    );
}