// modules
import React from 'react';
import Modal from '@material-ui/core/Modal';

interface ModalWrapperType {
  open: boolean;
  onClose?: void;
  children: React.FC;
}

export const ModalWrapper: React.FC<ModalWrapperType> = props => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
    >
      <>{props.children}</>
    </Modal>
  );
};