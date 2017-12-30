import React from 'react';
import ZonePicker from './ZonePicker';
import UTCPicker from './UTCPicker';

import NewPicker from './NewPicker';

import moment from 'moment-timezone';
import timezones from './newTimezones';

const ZoneWrapper = (props) => {

    // const updateZone = (e) => {
    //     let select = document.getElementById(`zone-picker-${props.id}`);
    //     let zoneArr = select.options[select.selectedIndex].value.split("|");
    //     let res = {
    //         id: props.id,
    //         newOffset: zoneArr[1],
    //         newValue: zoneArr[0],
    //         newUTC: timezones[timezones.findIndex((tz) => { return tz.value === zoneArr[0] })].utc[0]
    //     };
    //     props.changeOffset(res);
    // }
    const updateUTC = (utc) => {
        const zoneObj = timezones[utc];
        console.log(utc, zoneObj);

        // let select = document.getElementById(`zone-picker-${props.id}`);
        // let zoneArr = select.options[select.selectedIndex].value.split("|");
        // let utcSelect = document.getElementById(`utc-picker-${props.id}`);

        let res = {
            id: props.id,
            newOffset: zoneObj.offset,
            newValue: zoneObj.timezone,
            newUTC: zoneObj.utc
        };
        console.log(res);
        props.changeOffset(res);

    }

    const foreignStart = moment("08:00", "HH:mm").tz(props.utc).format("h:mm A");
    const foreignEnd = moment("17:00", "HH:mm").tz(props.utc).format("h:mm A");
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
                {/* <div className="date">
                    <ZonePicker
                        offset={props.offset}
                        updateZone={updateZone.bind(this)}
                        id={props.id}
                        value={props.value}
                    />                    </div>
                <div className="date">
                    <UTCPicker
                        zone={timezones.findIndex((tz) => { return tz.value === props.value })}
                        updateUTC={updateUTC.bind(this)}
                        id={props.id}
                        utc={props.utc}
                    />
                </div> */}
                <NewPicker
                    // zone={timezones.findIndex((tz) => { return tz.value === props.value })}
                    updateUTC={updateUTC}
                    id={props.id}
                    utc={props.utc} />

            </div>

        </div>
    )

};

export default ZoneWrapper;
