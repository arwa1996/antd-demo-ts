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
            <Card
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
              {/* {groups.map((group) => {
                console.log(group);
                return <p>{group.name}</p>;
              })} */}
              {/* <List
                className='demo-loadmore-list'
                itemLayout='horizontal'
                dataSource={groups}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <a key='list-loadmore-edit'>edit</a>,
                      <a key='list-loadmore-more'>more</a>,
                    ]}
                  >
                    <Skeleton avatar title={false} active>
                      <List.Item.Meta
                        avatar={}
                        title={<a href='https://ant.design'>{item.name}</a>}
                        description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                      />
                      <div>content</div>
                    </Skeleton>
                  </List.Item>
                )}
              /> */}
              <List
                itemLayout='horizontal'
                dataSource={groups}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <TabletOutlined />,
                      <Text>6</Text>,
                      <TeamOutlined size={50} />,
                      <Text>1</Text>,
                      <ClockCircleOutlined />,
                      <MobileOutlined />,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<TeamOutlined size={50} />}
                      title={<a href='https://ant.design'>{item.name}</a>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
