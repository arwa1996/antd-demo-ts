import React, { ReactNode } from 'react';
import { Card, Button, Row, Col } from 'antd';

type cardProps = {
  onClickCollections?: () => void;
  onClickWorkingHours?: (workingHours: string) => void;
  resturants?: any[];
  title: ReactNode;
  extra: ReactNode;
  children: JSX.Element;
};

export const CardGroup: React.FC<cardProps> = ({ title, extra, children }) => {
  const { Meta } = Card;

  return (
    <Card title={title} extra={extra}>
      {children}
    </Card>
  );
};
