import { Button, List } from "antd";

type listProps = {
  data: any[];
};

export const ListResturant: React.FC<listProps> = ({ data }) => {
  return (
    <List
      size="small"
      dataSource={data}
      renderItem={(item) => (
        <List.Item onClick={() => console.log(item)}>
          <Button style={{ border: "none" }}>{item}</Button>
        </List.Item>
      )}
    />
  );
};
