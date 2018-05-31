import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Footer = () => (
  <footer className="footer-container" >
    <div className="logo-container">
      <img role="presentation" src="./sources/Base/styles/resources/pro-dobro-logo-img.png" />
    </div>
    <div className="social-container">
      <a href="https://www.facebook.com/profile.php?id=100003915237988" target="_blank" rel="noopener noreferrer" >
        <Button type="primary" className="social-button" shape="circle" icon="facebook" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100003915237988" target="_blank" rel="noopener noreferrer" >
        <Button type="primary" className="social-button" shape="circle" icon="twitter" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100003915237988" target="_blank" rel="noopener noreferrer" >
        <Button type="primary" className="social-button" shape="circle" icon="google-plus" />
      </a>
    </div>
    <div className="copy-container">
        Copyright &copy; 2018, ProDobro, Inc
      </div>
  </footer>
);

Footer.propTypes = {
  dispatch: PropTypes.func,
  setloginDialogVisible: PropTypes.func,
  isVisible: PropTypes.Boolean,
};

export default Footer;

