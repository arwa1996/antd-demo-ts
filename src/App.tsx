import React, { useState } from 'react';
import { Typography, Layout, Input, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import groups from './demos/kisi/groups.json';
import { TeamOutlined } from '@ant-design/icons';
import { CardGroup } from './components/Cards/CardGroup';
import { ListGroup } from './components/Lists/ListGroup';
import { ModalGroups } from './components/Modals/ModalGroups';
import { SelectPlaces } from './components/SelectFields/SelectPlaces';
import { TagGroups } from './components/Tags/Tag';

const options: string[] = ['Jack', 'Lucy', 'Tom', 'Arwa'];

function App() {
  const { Title, Text } = Typography;
  const groupsNumber = 11;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const onSelect = (value: string) => {
    setSelectedItems([...selectedItems, value]);
  };
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
                  onClick={() => setIsModalVisible(true)}
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
            <ModalGroups
              open={isModalVisible}
              onCancel={() => setIsModalVisible(false)}
              modalTitle='Add Doors'
            >
              <div
                style={{
                  marginBottom: '1rem',
                }}
              >
                <SelectPlaces
                  placeholder='Select Places'
                  options={options}
                  onSelect={onSelect}
                />
              </div>
              <div>
                <SelectPlaces placeholder='Select Places' options={options} />
              </div>
              <div style={{ marginTop: '1rem' }}>
                {selectedItems?.map((item, index) => (
                  <TagGroups tagTitle={item} key={index} />
                ))}
              </div>
            </ModalGroups>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
