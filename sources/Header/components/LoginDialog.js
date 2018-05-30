import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';

const LoginDialog = ({ setloginDialogVisible, isVisible }) => (
  <Modal
    width={300}
    title="Bход"
    style={{ top: '30%' }}
    wrapClassName="vertical-center-modal"
    visible={isVisible}
    onOk={() => setloginDialogVisible(false)}
    onCancel={() => setloginDialogVisible(false)}
  >
    <div className="social-buttons-container" >
      <div>
        <Button size="large" type="primary" icon="facebook" className="social-button facebook" >Facebook</Button>
      </div>
      <div>
        <div>
          <Button size="large" type="primary" icon="google-plus" className="social-button google" >Google</Button>
        </div>
      </div>
    </div>
  </Modal>);

LoginDialog.propTypes = {
  dispatch: PropTypes.func,
  setloginDialogVisible: PropTypes.func,
  isVisible: PropTypes.Boolean,
};

export default LoginDialog;

