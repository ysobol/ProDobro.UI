import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';

class MenuComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'user',
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="menu"
      >
        <Menu.Item
          onClick={() => this.props.setloginDialogVisible(true)}
          key="user"
        ><Icon type="user" />Вход
        </Menu.Item>
        <Menu.Item key="global">
          <Icon type="global" />O наc
        </Menu.Item>
        <Menu.Item key="mail">
          <Icon type="mail" />Связаться с нами
        </Menu.Item>
      </Menu>
    );
  }
}

MenuComponent.propTypes = {
  dispatch: PropTypes.func,
  setloginDialogVisible: PropTypes.func,
};

export default MenuComponent;

