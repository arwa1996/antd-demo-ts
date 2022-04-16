import React, { useState } from "react";
import { Form, Row, Col, Input, Button, Select } from "antd";
import { TimePickerRestaurant } from "./TimePickerRestaurant";

type filterProps = {};

const { Option } = Select;

export const FilterResturant: React.FC<filterProps> = ({}) => {
  const [nameField, setNameField] = useState(false);
  const [dayTimeFields, setDayTimeFields] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const children = [];
    children.push(
      <>
        <Col span={8}>
          <Form.Item
            name={"Name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Input
              placeholder="placeholder"
              disabled={nameField}
              onClick={() => setDayTimeFields(true)}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={"Day"}
            label="Day"
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Select
              defaultValue="1"
              onClick={() => setNameField(true)}
              disabled={dayTimeFields}
            >
              <Option value="1">Monday</Option>
              <Option value="2">Tuesday</Option>
              <Option value="3">Wednesday</Option>
              <Option value="4">Thursday</Option>
              <Option value="5">Friday</Option>
              <Option value="6">Saturday</Option>
              <Option value="7">Sunday</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form.Item
            name={`field`}
            label="Time"
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <TimePickerRestaurant
              onClick={() => setNameField(true)}
              disabled={dayTimeFields}
            />
          </Form.Item>
        </Col>
      </>
    );

    return children;
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={[48, 24]}>{getFields()}</Row>
      <Row>
        <Col style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
              setNameField(false);
              setDayTimeFields(false);
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
