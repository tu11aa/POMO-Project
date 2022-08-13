import React from "react";
import { Row, Col, Input, Button } from "antd";
import styled from "styled-components";
import MemberList from "./MemberList";

export default function RightBar() {
  return (
    <RightbarStyled>
      <Row>
        <Col span={24}>
          <MemberList/>
        </Col>
        <Col span={24}>
          <Button style={{margin:"58px"}}>
            Disconect
          </Button>
        </Col>
      </Row>
    </RightbarStyled>
  );
}

const RightbarStyled = styled.div`
  background: #2a6db9;
  color: black;
  height: 100vh;
`;