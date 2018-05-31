import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, Calendar } from 'antd';

const Option = Select.Option;

class Event extends Component {

  constructor(props) {
    super(props);   
  }


  render() {
    return (
      <div className="event-container">
        <div className="organizations-container">
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={''}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar
            fullscreen={false}
          />
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  dispatch: PropTypes.func,
};

export default Event;

