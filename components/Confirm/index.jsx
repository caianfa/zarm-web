
import React, { Component, PropTypes } from 'react';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

class Confirm extends Component {

  render () {
    const { message, onOk, onCancel, ...others } = this.props;
    
    return (
      <Modal {...others}>
        <ModalBody>
          <p style={{textAlign: 'center'}}>{message}</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" onClick={onCancel}>取消</button>
          <button type="button" onClick={onOk}>确定</button>
        </ModalFooter>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  message  : PropTypes.string,
  width    : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onOk     : PropTypes.func,
  onCancel : PropTypes.func,
};

Confirm.defaultProps = {
  message  : '',
  width    : 270,
  onOk     : function () {},
  onCancel : function () {},
};

export default Confirm;

