import React from "react";
import { Card, Button, Row, Col } from "antd";

type cardProps = {
  onClickCollections: () => void;
  onClickWorkingHours: () => void;
  resturants: any[];
};

export const CardResturant: React.FC<cardProps> = ({
  onClickCollections,
  onClickWorkingHours,
  resturants,
}) => {
  const { Meta } = Card;
  return (
    <Row gutter={[16, 16]}>
      {resturants.map((resturant) => (
        <Col xs={26} xl={8}>
          <Card
            style={{
              width: 400,
              border: "1px solid #f0f0f0",
            }}
            cover={<img alt="example" src={resturant.Image} />}
            actions={[
              <Button style={{ border: "none" }} onClick={onClickCollections}>
                Add to collection
              </Button>,
              <Button style={{ border: "none" }} onClick={onClickWorkingHours}>
                Working hours
              </Button>,
            ]}
          >
            <Meta title={resturant.name} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
