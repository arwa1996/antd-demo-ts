import React from "react";
import { Modal } from "antd";

type modalProps = {
  onCancel: () => void;
  open: boolean;
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  footer?: React.ReactNode;
};

export const ModalResturant: React.FC<modalProps> = ({
  onCancel,
  open,
  children,
  footer,
}) => {
  return (
    <div>
      <Modal
        title="Lessons Modal"
        visible={open}
        onCancel={() => {
          onCancel();
        }}
        okButtonProps={{ style: { display: "none" } }}
        //   footer={[null, null]}
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
};
