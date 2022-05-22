import React, { useState } from 'react';
import {
  Select,
  Typography,
  Divider,
  Layout,
  Card,
  Input,
  Button,
  List,
  Skeleton,
  Avatar,
} from 'antd';
import { Content } from 'antd/lib/layout/layout';
import groups from './demos/kisi/groups.json';
import {
  TeamOutlined,
  TabletOutlined,
  ClockCircleOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { CardGroup } from './components/CardGroup';
import { ListGroup } from './components/ListGroup';

function App() {
  const { Title, Text } = Typography;
  const groupsNumber = 11;
  return (
    <div>
      <Layout>
        <Layout className='site-layout'>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Title level={3}>Groups {groupsNumber}</Title>
            <Text type='secondary'>
              Add users to Groups and assign different access rights
            </Text>
            <CardGroup
              title={
                <Input
                  placeholder='Search Groups...'
                  style={{ width: '80%' }}
                />
              }
              extra={
                <Button type='primary' ghost>
                  Primary
                </Button>
              }
            >
              <ListGroup
                data={groups}
                actions={[
                  <TabletOutlined />,
                  <Text>6</Text>,
                  <TeamOutlined size={50} />,
                  <Text>1</Text>,
                  <ClockCircleOutlined />,
                  <MobileOutlined />,
                ]}
                avatar={<TeamOutlined size={50} />}
              />
            </CardGroup>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
