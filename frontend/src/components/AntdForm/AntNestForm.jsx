import React from "react";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 10,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function AntNestForm({ user, isDisable }) {
  console.log("user: ", user);
  // {
  //     "_id": "62f4ab24efd23b7c7ac0ce08",
  //     "username": "entiempi",
  //     "email": "maiphuong5702@gmail.com",
  //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjRhYjI0ZWZkMjNiN2M3YWMwY2UwOCIsImlhdCI6MTY2MDIyNzEyMCwiZXhwIjoxNjYyODE5MTIwfQ.S7ZrTOfnqORJYiau4qcfDPuoGb6h5lBXWUXu-7aI4vQ"
  // }

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      {...layout}
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={user}
      disabled={isDisable}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fullname"
        label="Fullname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nickname"
        label="Nickname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="birthday" label="Birthday">
        <DatePicker />
      </Form.Item>
      <Form.Item name="bio" label="Bio">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AntNestForm;
