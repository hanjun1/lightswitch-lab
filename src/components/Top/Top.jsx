import React from 'react';
import './Top.css';

function Top(props) {
    return (
        <div className="Top">
            {props.on ? (
                <div className="on"></div>
            ) : (
                <div className="off"></div>
            )}
        </div>
    )
}

export default Top;