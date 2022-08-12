import { Button, Form, Input, Switch } from "antd";
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 16,
  },
};

const FormCreateRoom = ({ isShow }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      style={{ display: `${isShow}` }}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{ private: true }}
    >
      <Form.Item
        name="RoomName"
        label={<p style={{ color: "white", fontSize: "1.1rem" }}>Name</p>}
      >
        <Input placeholder="Enter room name here" />
      </Form.Item>
      <Form.Item
        name="private"
        label={<p style={{ color: "white", fontSize: "1.1rem" }}>Private</p>}
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        name="Password"
        label={<p style={{ color: "white", fontSize: "1.1rem" }}>Pass</p>}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCreateRoom;
