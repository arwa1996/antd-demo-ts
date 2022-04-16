/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { ModalResturant } from "./components/ModalResturant";
import { CardResturant } from "./components/CardResturant";
import { ListResturant } from "./components/ListResturant";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [workingHoursMode, setWorkingHoursMode] = useState(false);
  const [collectionMode, setCollectionMode] = useState(false);
  const [workingHours, setWorkingHours] = useState("");

  const resturants = [
    {
      name: "PAUL",
      Image:
        "	https://media-cdn.tripadvisor.com/media/photo-s/10/89/ef/03/paul.jpg",
      workingHours: "Mon-Fri",
    },
    {
      name: "Coffee Shop",
      Image:
        "	https://trungimgs.trung-nguyen-online.com/can-i-turn-my-coffee-into-iced-cofee-.jpg",
      workingHours: "Mon-Fri",
    },
    {
      name: "Coffee Shop",
      Image:
        "	https://trungimgs.trung-nguyen-online.com/can-i-turn-my-coffee-into-iced-cofee-.jpg",
      workingHours: "Mon-Fri",
    },
    {
      name: "PAUL",
      Image:
        "	https://media-cdn.tripadvisor.com/media/photo-s/10/89/ef/03/paul.jpg",
      workingHours: "Mon-Fri",
    },
    {
      name: "Coffee Shop",
      Image:
        "	https://trungimgs.trung-nguyen-online.com/can-i-turn-my-coffee-into-iced-cofee-.jpg",
      workingHours: "Mon-Fri",
    },
    {
      name: "PAUL",
      Image:
        "	https://media-cdn.tripadvisor.com/media/photo-s/10/89/ef/03/paul.jpg",
      workingHours: "Mon-Fri",
    },
  ];
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const onClickCollections = () => {
    setCollectionMode(true);
    // setWorkingHoursMode(false);
    setIsModalVisible(true);
  };

  const onClickWorkingHours = () => {
    setIsModalVisible(true);
    setCollectionMode(false);
    setWorkingHoursMode(true);
  };
  console.log(workingHours);
  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <CardResturant
        resturants={resturants}
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
          <p>workin hours</p>
        )}
      </ModalResturant>
    </div>
  );
}

export default App;
