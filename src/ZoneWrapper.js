import React from 'react';
import ZonePicker from './ZonePicker';

import moment from 'moment-timezone';
import timezones from './timezones';

const ZoneWrapper = (props) => {
    const updateUTC = (utc) => {
        const zoneObj = timezones[utc];
        console.log(utc, zoneObj);

        let res = {
            id: props.id,
            newOffset: zoneObj.offset,
            newValue: zoneObj.timezone,
            newUTC: zoneObj.utc
        };
        console.log(res);
        props.changeOffset(res);

    }

    const localStart = moment.tz(moment().format("YYYY-MM-DD 08:00"), props.utc).tz(moment.tz.guess()).format("h:mm A");
    const localEnd = moment.tz(moment().format("YYYY-MM-DD 17:00"), props.utc).tz(moment.tz.guess()).format("h:mm A");

    return (
        <div className="zone-wrapper" data-id={props.id}>
            <div className="date-time-wrapper">
                <div className="date">
                    {moment.tz(props.utc).format("ddd MMM Do")}
                </div>
                <div className="time">
                    {moment.tz(props.utc).format("h:mm A")}
                </div>
            </div>
            <div className="date-time-wrapper overlap">
                {localStart + "\n" + localEnd}
            </div>
            <div className="date-time-wrapper timezone-picker">
                <ZonePicker
                    updateUTC={updateUTC}
                    id={props.id}
                    utc={props.utc} />
            </div>

        </div>
    )

};

export default ZoneWrapper;
