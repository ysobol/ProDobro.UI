import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import Event from './Event';

const EventDialog = ({ setEventDialogVisible, isVisible }) => (
  <Modal
    width={600}
    title="Помочь детям / зверикам"
    style={{ top: '30%' }}
    wrapClassName="vertical-center-modal"
    visible={isVisible}
    onOk={() => setEventDialogVisible(false)}
    onCancel={() => setEventDialogVisible(false)}
  >
    <Event />
  </Modal>
  );

EventDialog.propTypes = {
  dispatch: PropTypes.func,
  setEventDialogVisible: PropTypes.func,
  isVisible: PropTypes.Boolean,
};

export default EventDialog;

