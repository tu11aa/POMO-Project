import React from 'react';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import Rightbar from './Rightbar';

export default function ChatRoom() {
  return (
    <div>
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
