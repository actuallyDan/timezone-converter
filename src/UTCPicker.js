import React from 'react';
import timezones from './timezones';

const UTCPicker = (props) => {
    return (
        <select className="select" id={`utc-picker-${props.id}`}
            onChange={props.updateUTC}
            defaultValue={props.utc}>
            {timezones[props.zone].utc.map(utc =>
                <option key={utc}
                    value={utc}>
                    {utc}
                </option>)
            }
        </select>
    )
}

export default UTCPicker;
