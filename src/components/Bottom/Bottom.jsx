import React from 'react';

function Bottom(props) {
    return (
        <div>
            {props.on ? (
                <button onClick={(e) => {props.changeColor(e)}} value="off">Off</button>
            ) : (
                <button onClick={(e) => {props.changeColor(e)}} value="on">On</button>
            )}
        </div>
    )
}

export default Bottom;