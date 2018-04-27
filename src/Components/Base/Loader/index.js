import React from 'react';
import CONSTANTS from './../../../Constants';

const Loader = () => {
    return (
        <div className="Loader">
            {CONSTANTS.LOADER_TEXT}
        </div>
    )
}

export default Loader;