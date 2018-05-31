import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';

const HelpDialog = ({ setHelpDialogVisible, isVisible, setEventDialogVisible }) => (
  <Modal
    width={600}
    title="Я хочу помочь"
    style={{ top: '30%' }}
    wrapClassName="vertical-center-modal"
    visible={isVisible}
    onOk={() => setHelpDialogVisible(false)}
    onCancel={() => setHelpDialogVisible(false)}
  >
    <div className="help-options-container">
      <div className="help-container">
        <div className="img-container">
          <img role="presentation" src="./sources/Base/styles/resources/pro-dobro-help-child.png" />
        </div>
        <Button
          size="large"
          type="primary"
          className="help-button"
          onClick={() => setEventDialogVisible(true)}
        >Детям</Button>
      </div>
      <div className="help-container">
        <div className="img-container" >
          <img role="presentation" src="./sources/Base/styles/resources/pro-dobro-help-dog.png" />
        </div>
        <Button
          size="large"
          type="primary"
          className="help-button"
          onClick={() => setEventDialogVisible(true)}
        >Животным</Button>
      </div>
    </div>
  </Modal>
  );

HelpDialog.propTypes = {
  dispatch: PropTypes.func,
  setHelpDialogVisible: PropTypes.func,
  isVisible: PropTypes.Boolean,
  setEventDialogVisible: PropTypes.func,
};

export default HelpDialog;

