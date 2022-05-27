import React from "react";
import { Card, Button, Row, Col } from "antd";

type cardProps = {
  onClickCollections: () => void;
  onClickWorkingHours: (workingHours: string) => void;
  resturants: any[];
};

export const CardResturant: React.FC<cardProps> = ({
  onClickCollections,
  onClickWorkingHours,
  resturants,
}) => {
  const { Meta } = Card;

  return (
    <Row gutter={[30, 16]}>
      {resturants.map((resturant) => (
        <Col xs={26} xl={8}>
          <Card
            style={{
              width: 400,
              border: "1px solid #f0f0f0",
            }}
            cover={
              <img
                alt="example"
                src="https://trungimgs.trung-nguyen-online.com/can-i-turn-my-coffee-into-iced-cofee-.jpg"
              />
            }
            actions={[
              <Button style={{ border: "none" }} onClick={onClickCollections}>
                Add to collection
              </Button>,
              <Button
                style={{ border: "none" }}
                onClick={() => {
                  let workingHours =
                    "Day : " +
                    resturant.operationHours[0].dayOfWeek +
                    "\n" +
                    "Time open : " +
                    resturant.operationHours[0].timeOpen +
                    "\n" +
                    "Time closed : " +
                    resturant.operationHours[0].timeClose;

                  onClickWorkingHours(workingHours);
                }}
              >
                Working hours
              </Button>,
            ]}
          >
            <Meta title={resturant.restaurantName} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
