import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Menu from './Menu';
import LoginDialog from './../../Login/components/LoginDialog';
import HelpDialog from './HelpDialog';
import EventDialog from './../../Event/components/EventDialog';

class Header extends Component {

  constructor(props) {
    super(props);
    this.setloginDialogVisible = this.setloginDialogVisible.bind(this);
    this.setHelpDialogVisible = this.setHelpDialogVisible.bind(this);
    this.setEventDialogVisible = this.setEventDialogVisible.bind(this);

    this.state = {
      loginDialogVisible: false,
      helpDialogVisible: false,
      eventDialogVisible: false,
    };
  }

  setloginDialogVisible(loginDialogVisible) {
    this.setState({ loginDialogVisible });
  }

  setHelpDialogVisible(helpDialogVisible) {
    this.setState({ helpDialogVisible });
  }

  setEventDialogVisible(eventDialogVisible) {
    this.setState(
      {
        eventDialogVisible,
        helpDialogVisible: false,
      },
    );
  }

  render() {
    return (
      <header className="header" id="home">
        <div className="container">
          <div className="header header-container">
            <a className="logo" href="#home" data-link="home">
              <img role="presentation" src="./sources/Base/styles/resources/pro-dobro-logo-img.png" />
            </a>
            <Menu setloginDialogVisible={this.setloginDialogVisible} />
          </div>
          <div className="header-text">
            <h2 className="header-title title-main title">Добро доступно каждому</h2>
            <div className="header-description">
              <h4>Форум добрых дел</h4>
            </div>
          </div>
          <div className="buttons-container" >
            <div className="helps-buttons">
              <div className="help-button-container">
                <Button className="help-button" >Помощь детям</Button>
              </div>
              <div className="help-button-container">
                <Button className="help-button">Помощь животным</Button>
              </div>
            </div>
            <div className="create-button-container" >
              <Button
                size="large"
                onClick={() => this.setHelpDialogVisible(true)}
                type="primary" className="create-button"
              >
              Организовать акцию
              </Button>
            </div>
          </div>
        </div>
        <LoginDialog
          setloginDialogVisible={this.setloginDialogVisible}
          isVisible={this.state.loginDialogVisible}
        />
        <HelpDialog
          setHelpDialogVisible={this.setHelpDialogVisible}
          isVisible={this.state.helpDialogVisible}
          setEventDialogVisible={this.setEventDialogVisible}
        />
        <EventDialog
          setEventDialogVisible={this.setEventDialogVisible}
          isVisible={this.state.eventDialogVisible}
        />
      </header>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
};

export default Header;

