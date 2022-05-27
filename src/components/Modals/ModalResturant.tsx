import React from "react";
import { Modal } from "antd";

type modalProps = {
  onCancel: () => void;
  open: boolean;
  children: JSX.Element | JSX.Element[] | React.ReactNode;
};

export const ModalResturant: React.FC<modalProps> = ({
  onCancel,
  open,
  children,
}) => {
  return (
    <div>
      <Modal
        title="Restaurants"
        visible={open}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
};
