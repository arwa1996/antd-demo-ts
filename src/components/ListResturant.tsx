import { Button, List } from "antd";

type listProps = {
  onClickCollection: () => void;
  data: any[];
};

export const ListResturant: React.FC<listProps> = ({
  onClickCollection,
  data,
}) => {
  return (
    <List
      size="small"
      dataSource={data}
      renderItem={(item) => (
        <List.Item onClick={onClickCollection}>
          <Button style={{ border: "none" }}>{item}</Button>
        </List.Item>
      )}
    />
  );
};
