import React from 'react';
import timezones from './newTimezones';
import ReactDatalist from 'react-datalist';

export default class NewPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    checkIfExists(e) {
        const value = e.currentTarget.value;
        if (timezones.hasOwnProperty(value)) {
            this.props.updateUTC(value)
        }
    }
    render() {
        const keys = Object.keys(timezones);
        console.log(keys, this.props);
        return (
            <ReactDatalist
                list={`utc-picker-${this.props.id}`}
                options={keys}
                onOptionSelected={(value) => { this.props.updateUTC(value) }}
                placeholder={/.+\/(.+)(?!.*.+)/.exec(this.props.utc)[1]}
                onInputChange={(e) => { this.checkIfExists(e) }}
            />
        )
    }
}