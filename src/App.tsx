import React, { useState } from 'react';
import { Typography, Layout, Input, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import groups from './demos/kisi/groups.json';
import { TeamOutlined } from '@ant-design/icons';
import { CardGroup } from './components/CardGroup';
import { ListGroup } from './components/ListGroup';

function App() {
  const { Title, Text } = Typography;
  const groupsNumber = 11;

  console.log(groups);
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
                  style={{ width: '80%', borderRadius: '8px' }}
                  size='large'
                />
              }
              extra={
                <Button
                  type='primary'
                  ghost
                  style={{ borderRadius: '8px' }}
                  size='large'
                >
                  Add Group
                </Button>
              }
            >
              <ListGroup
                data={groups}
                avatar={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '10px',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '	#E8E8E8',
                    }}
                  >
                    <TeamOutlined size={50} style={{ fontSize: '1.5rem' }} />
                  </div>
                }
              />
            </CardGroup>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
