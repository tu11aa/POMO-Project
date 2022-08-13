import { Button, Form, Input, Switch } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../features/room/roomSlice";
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 16,
  },
};

const FormCreateRoom = ({ isShow }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [type, setType] = useState("Public")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)

  const handleSubmit = () => {
    if (type === "Private") dispatch(createRoom({name, type, password}))
    else dispatch(createRoom({name, type}))
  }

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
        <Input placeholder="Enter room name here" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="private"
        label={<p style={{ color: "white", fontSize: "1.1rem" }}>Private</p>}
        // valuePropName="checked"
      >
        <Switch checked={checked} onChange={(checked)=> {
          setChecked(checked);
          setType(checked === true ? "Private" : "Public");
          console.log(type)
        }} />
      </Form.Item>
      <Form.Item
        name="Password"
        label={<p style={{ color: "white", fontSize: "1.1rem" }}>Pass</p>}
      >
        <Input.Password disabled={!checked} placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCreateRoom;
