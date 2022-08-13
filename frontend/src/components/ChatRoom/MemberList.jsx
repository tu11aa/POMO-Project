import React, { useEffect, useState } from "react";
import { Collapse, Typography, Button, Input, Space } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, setRoom } from "../../features/room/roomSlice";
import FormCreateRoom from "../FormCreateRoom/FormCreateRoom";

const { Panel } = Collapse;

export default function MemberList() {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState("none");
  const { room } = useSelector((state) => state.room);

  // useEffect(() => {
  //   dispatch(getRooms());
  // }, [dispatch]);

  const handleClick = (index) => {
    
  }

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Member List" key="1">
        {room?(<ul className="list-group">
          {room.memberIDs.map((user, index) => {
            return <LinkStyled key={user._id} onClick={()=>handleClick(index)}>{user.username}</LinkStyled>;
          })}
        </ul>):<ul className="list-group"/>}
      </PanelStyled>
    </Collapse>
  );
}
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

