import React from 'react';
import { Modal } from 'antd';

type modalProps = {
  onCancel: () => void;
  open: boolean;
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  modalTitle?: string;
};

export const ModalGroups: React.FC<modalProps> = ({
  onCancel,
  open,
  children,
  modalTitle,
}) => {
  return (
    <div>
      <Modal
        title={modalTitle}
        visible={open}
        onCancel={() => {
          onCancel();
        }}
        onOk={() => {
          onCancel();
        }}
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
};
