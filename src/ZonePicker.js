import React from 'react';
import timezones from './timezones';
import ReactDatalist from 'react-datalist';

const ZonePicker = (props) => {
    const checkIfExists = (e) => {
        const value = e.currentTarget.value;
        if (timezones.hasOwnProperty(value)) {
            props.updateUTC(value)
        }
    }
    const keys = Object.keys(timezones);
    return (
        <ReactDatalist
            list={`utc-picker-${props.id}`}
            options={keys}
            onOptionSelected={(value) => { props.updateUTC(value) }}
            placeholder={/.+\/(.+)(?!.*.+)/.exec(props.utc)[1]}
            onInputChange={(e) => { checkIfExists(e) }}
        />
    )
};

export default ZonePicker;