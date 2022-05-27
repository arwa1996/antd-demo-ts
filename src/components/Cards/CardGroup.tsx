import React, { ReactNode } from 'react';
import { Card } from 'antd';

type cardProps = {
  onClickCollections?: () => void;
  onClickWorkingHours?: (workingHours: string) => void;
  resturants?: any[];
  title: ReactNode;
  extra: ReactNode;
  children: JSX.Element;
};

export const CardGroup: React.FC<cardProps> = ({ title, extra, children }) => {
  return (
    <Card
      title={title}
      extra={extra}
      style={{ borderRadius: '10px', marginTop: '20px' }}
    >
      {children}
    </Card>
  );
};
