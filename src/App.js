import React, { Component } from 'react';
import './App.css';
import ZoneWrapper from './ZoneWrapper';
import ButtonRow from './ButtonRow';
import Legend from './Legend';

import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import moment from 'moment-timezone';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      localTime: moment(),
      myOffset: moment().utcOffset() / 60,
      zones: []
    }
    // this.changeOffset = this.changeOffset.bind(this);
    // this.increaseZones = this.increaseZones.bind(this);
    // this.decreaseZones = this.decreaseZones.bind(this);
    // this.removeZone = this.removeZone.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem("fav-timezones") !== null) {
      this.loadFromLocalStorage();
    }
  }
  componentDidMount() {
    /* load from localStorage if applicable */
    setInterval(this.updateTime.bind(this), 60000);
  }
  loadFromLocalStorage = () => {
    this.setState({
      zones: JSON.parse(localStorage.getItem("fav-timezones"))
    })
  }
  updateTime = () => {
    this.setState({
      localTime: moment(),
      zones: this.state.zones.slice()
    });

    this.saveData();
  }
  saveData = () => {
    localStorage.setItem("fav-timezones", JSON.stringify(this.state.zones));
  }
  increaseZones = () => {
    const newIndex = this.state.zones.length !== 0 ? this.state.zones[this.state.zones.length - 1].id + 1 : 0;
    this.setState({
      zones: this.state.zones.concat({
        id: newIndex,
        offset: 0,
        value: "Greenwich Standard Time",
        utc: "Atlantic/Reykjavik"
      })
    }, () => { this.saveData() });
  }
  decreaseZones = () => {
    if (this.state.zones.length === 0) {
      return false;
    }
    let newZonesArray = this.state.zones.slice();
    newZonesArray.splice(-1);

    this.setState({
      zones: newZonesArray
    }, () => { this.saveData() });
  }
  changeOffset = (res) => {
    console.log(res);
    let updatedZones = this.state.zones.slice();
    updatedZones[res.id] = {
      id: res.id,
      offset: parseFloat(res.newOffset, 10).toFixed(2),
      value: res.newValue,
      utc: res.newUTC
    }
    this.setState({
      zones: updatedZones
    }, this.saveData);
  }
  removeZone = (index) => {
    let newZonesArray = this.state.zones.slice();
    newZonesArray.splice(index, 1);

    this.setState({
      zones: newZonesArray
    }, () => { this.saveData() });
  }
  render() {
    console.log(this.state.zones);
    return (
      <div className="App">
        <div id="intro">
          <h1>Timezone Workday Converter</h1>
          <p>Keep track of time in different timezones, and display the foreign timezones' working day from your perspective.</p>
          <p>Select your timezones and then filter by UTC region.</p>
        </div>


        <div id="current-time">
          <div style={{ fontSize: "1.5em" }}>Local Time:</div>
          <div className="date-time-wrapper">
            <div className="date">
              {this.state.localTime.format("ddd MMM Do")}
            </div>
            <div className="time">
              {`${this.state.localTime.format("h:mm A")}`}
            </div>
          </div>
        </div>
        <Legend />
        <div id="zones-list">
          {this.state.zones.map((zone) =>
            <SwipeToDelete key={zone.id} onDelete={() => { this.removeZone(zone.id) }}>
              <ZoneWrapper changeOffset={this.changeOffset} {...zone} />
            </SwipeToDelete>
          )
          }
        </div>
        <ButtonRow increaseZones={this.increaseZones} decreaseZones={this.decreaseZones} />

      </div>
    );
  }
}

