import React, { Component, ReactDOM } from 'react';
import { Select } from 'antd';
const Option = Select.Option;


class Event extends React.Component {
  state = {
    data: [],
    value: '',
  }
  handleChange = (value) => {
    this.setState({ value });
    fetch(value, data => this.setState({ data }));
  }
  render() {
    const options = [{ value: 'hhh', text: 'dddd' }].data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        mode="combobox"
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showSearch
        showArrow
        filterOption
        onChange={this.handleChange}
      >
        {options}
      </Select>
    );
  }
}

ReactDOM.render(
  <SearchInput placeholder="input search text" style={{ width: 200 }} />
, mountNode);
