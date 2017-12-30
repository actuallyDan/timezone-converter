import React, { Component } from 'react';
import timezones from './timezones';

const ZonePicker = (props) => {

    return (
        <select className="select" id={`zone-picker-${props.id}`}
            onChange={props.updateZone}
            defaultValue={props.value + "|" + props.offset}>
            {timezones.map(tz =>
                <option
                    key={tz.utc[0] + tz.offset + tz.abbr}
                    value={tz.value + "|" + tz.offset}>
                    {tz.value}
                </option>)
            }
        </select>
    )
}

export default ZonePicker;
