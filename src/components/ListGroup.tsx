import { List, Tooltip, Typography } from 'antd';
import {
  TeamOutlined,
  TabletOutlined,
  ClockCircleOutlined,
  MobileOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { ReactNode, useState } from 'react';

type listProps = {
  data: unknown[] | undefined;
  actions?: ReactNode[] | undefined;
  avatar?: ReactNode;
};

export const ListGroup: React.FC<listProps> = ({ data, actions, avatar }) => {
  const { Title, Text } = Typography;
  const [time, setTime] = useState(false);
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item
          actions={[
            <Tooltip title='Doors'>
              <TabletOutlined
                style={
                  item.locks_count === 0 ? { color: 'red' } : { color: 'grey' }
                }
              />
            </Tooltip>,
            <Text>{item.locks_count}</Text>,
            <Tooltip title='users'>
              <TeamOutlined
                size={50}
                style={
                  item.members_count === 0
                    ? { color: 'red' }
                    : { color: 'grey' }
                }
              />
            </Tooltip>,
            <Text>{item.members_count}</Text>,
            <Tooltip title='Time Restriction Off'>
              <ClockCircleOutlined
                style={
                  item.time_restriction_enabled === false
                    ? { color: 'red' }
                    : { color: 'grey' }
                }
              />
            </Tooltip>,
            <Tooltip title='Geofence Restriction Off'>
              <EnvironmentOutlined
                style={
                  item.geofence_restriction_enabled === false
                    ? { color: 'red' }
                    : { color: 'grey' }
                }
              />
            </Tooltip>,
            <Tooltip title='Primary Device Restriction Off'>
              <MobileOutlined
                style={
                  item.primary_evice_restriction_enabled === false
                    ? { color: 'red' }
                    : { color: 'grey' }
                }
              />
            </Tooltip>,
            <Tooltip title='Reader Restriction Off'>
              <MobileOutlined
                style={
                  item.reader_restriction_enabled === false
                    ? { color: 'red' }
                    : { color: 'grey' }
                }
              />
            </Tooltip>,
          ]}
          style={{ border: 'none' }}
        >
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
