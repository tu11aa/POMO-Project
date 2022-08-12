import React from "react";
import { Row, Col, Input } from "antd";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const SidebarStyled = styled.div`
  background: #15375e;
  color: black;
  height: 100vh;
`;

export default function Sidebar() {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <SearchBar />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
