import React, { useState } from 'react';
import { ModalResturant } from '../../components/Modals/ModalResturant';
import { CardResturant } from '../../components/Cards/CardResturant';
import { ListResturant } from '../../components/Lists/ListResturant';
import { FilterResturant } from '../../components/SearchBars/FilterRestaurant';
import { Col, Row } from 'antd';
import resturants from './restaurants.json';

function Glints() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [collectionMode, setCollectionMode] = useState(false);
  const [workingHours, setWorkingHours] = useState('');

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const onClickCollections = () => {
    setCollectionMode(true);
    setIsModalVisible(true);
  };

  const onClickWorkingHours = (workingHours: string) => {
    setIsModalVisible(true);
    setCollectionMode(false);
    setWorkingHours(workingHours);
  };

  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <Row gutter={[24, 24]}>
        <Col span={22}>
          <FilterResturant />
        </Col>

        <Col>
          <CardResturant
            resturants={resturants.data.rows}
            onClickCollections={onClickCollections}
            onClickWorkingHours={onClickWorkingHours}
          />
          <ModalResturant
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
          >
            {collectionMode ? (
              <ListResturant
                data={data}
                onClickCollection={() => setIsModalVisible(false)}
              />
            ) : (
              <p>{workingHours}</p>
            )}
          </ModalResturant>
        </Col>
      </Row>
    </div>
  );
}

export default Glints;
