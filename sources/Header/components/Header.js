import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Menu, Icon, Button, Modal  } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {

    constructor(props) {
        super(props);  

        this.state = {
          current: '', //to do set here the key of the menu's item (user or another)
          loginDialogVisible: false,
        }
      }

      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

      seloginDialogVisible(loginDialogVisible) {       
        this.setState({ loginDialogVisible });
      }

  render() {
    return (
      <header className="header" id="home">  
      <div className="container">
        <div className="header header-container">
        <a className="logo" href="#home" data-link="home">
          <img src="./sources/Base/styles/resources/pro-dobro-logo-img.png" alt="logo-picture"/>
        </a>
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="menu"
      >
        <Menu.Item onClick={() => this.seloginDialogVisible(true)} key="user">
          <Icon type="user" />Вход
        </Menu.Item>
       
        <Menu.Item key="login">
          <Icon type="login" />Регистрация
        </Menu.Item>
        {/* <SubMenu title={<span><Icon type="setting" />Четтамеще</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">лаала 1</Menu.Item>
            <Menu.Item key="setting:2">лаала 2</Menu.Item>
          </MenuItemGroup>        
        </SubMenu> */}
        <Menu.Item key="mail">
          <Icon type="mail" />
          Связаться с нами
        </Menu.Item>
      </Menu>
            </div>
        <div className="header-text">       
          <h2 className="header-title title-main title">Добро доступно каждому</h2>
          <div className="header-description">
            <h4>Форум добрых дел</h4>
          </div>
        </div>
        <div className='buttons-container' >
        <div className='helps-buttons'>
        <div className='help-button-container'>
        <Button className='help-button' >Помощь детям</Button>
        </div>
        <div className='help-button-container'>
        <Button  className='help-button'>Помощь животным</Button>
        </div>
        </div>
          <div className='create-button-container' >
        <Button size='large' type="primary" className="create-button" >Организовать акцию</Button>
        </div>

        </div>
      </div>
      <Modal
      width={300}
          title="Bход" 
          style={{ top: '30%' }}
          wrapClassName="vertical-center-modal"
          visible={this.state.loginDialogVisible}
          onOk={() => this.seloginDialogVisible(false)}
          onCancel={() => this.seloginDialogVisible(false)}
        >
        <div className='social-buttons-container' >
        <div>
        <Button size='large' type="primary" icon="facebook" size='large' className="social-button facebook" >Facebook</Button>
        </div>
        <div>
        <Button size='large' type="primary" icon="google-plus" size='large' className="social-button google" >Google</Button>
        </div>  
        </div>              
        </Modal>
    </header>
    )  
    }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  panelState: PropTypes.object,
  dataPage: PropTypes.object,
  userInfo: PropTypes.object,
};

export default Header;

