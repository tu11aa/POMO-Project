import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import Rightbar from './Rightbar';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { reset } from '../../features/room/roomSlice';

export default function ChatRoom() {
  const dispatch = useDispatch()

  const { isError, isSuccess, message } = useSelector(
    (state) => state.room
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset())
    }
    if (isSuccess){
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={16}>
          <ChatWindow />
        </Col>
        <Col span={4}>
          <Rightbar />
        </Col>
      </Row>
    </div>
  );
}
