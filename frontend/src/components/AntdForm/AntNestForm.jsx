//import React from "react";
import { Button, DatePicker, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/auth/authSlice";
import moment from 'moment';
import { ToastContainer, toast } from "react-toastify";
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
  const dispatch = useDispatch()

  const [fullname, setFullname] = useState(JSON.parse(localStorage.getItem("user")).fullname)
  const [nickname, setNickname] = useState(JSON.parse(localStorage.getItem("user")).nickname)
  const [birthday, setBirthday] = useState(JSON.parse(localStorage.getItem("user")).dob)
  const [gender, setGender] = useState(JSON.parse(localStorage.getItem("user")).gender)
  const [bio, setBio] = useState(JSON.parse(localStorage.getItem("user")).bio)

  const onSubmit = (e) => {
    e.preventDefault();
      // isDisable = true
      dispatch(updateUser({ userID : JSON.parse(localStorage.getItem("user"))._id, data : {
        fullname,
        nickname,
        dob : birthday,
        gender,
        bio
      }}))
      toast.success("Update profile success!");
  }

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
      <ToastContainer autoClose={3000} />
      <Form.Item
        name="username"
        label="Username"
      //   rules={[
      //     {
      //       required: true,
      //     },
      //   ]
      // }
      >
        <Input disabled="disabled"/>
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
        <Input value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
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
        <Input value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
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
        <Input disabled="disable" />
      </Form.Item>
      <Form.Item name="birthday" label="Birthday">
        <DatePicker defaultValue={moment(birthday, 'YYYY-MM-DD')} value={birthday} onChange={(_, dateString) => setBirthday(dateString)}/>
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input maxLength={3} value={gender} onChange={(e)=>setGender(e.target.value)} />
      </Form.Item>
      <Form.Item name="bio" label="Bio">
        <Input.TextArea maxLength={200} value={bio} onChange={(e)=>setBio(e.target.value)}/>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
        <Button type="submit"  onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AntNestForm;
