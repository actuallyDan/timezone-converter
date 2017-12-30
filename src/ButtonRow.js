import React from 'react';

const ButtonRow = (props) => {
    return (
        <div id="button-wrapper">
            <div onClick={props.increaseZones}>Add Zone</div>
            <div onClick={props.decreaseZones}>Remove Zone</div>
        </div>
    )
}

export default ButtonRow;