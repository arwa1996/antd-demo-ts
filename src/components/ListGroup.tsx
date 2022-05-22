import { Button, List, ListProps } from 'antd';
import { ReactNode } from 'react';

type listProps = {
  data: unknown[] | undefined;
  actions: ReactNode[] | undefined;
  avatar: ReactNode;
};

export const ListGroup: React.FC<listProps> = ({ data, actions, avatar }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item actions={actions}>
          <List.Item.Meta
            avatar={avatar}
            title={<a href='https://ant.design'>{item.name}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};
