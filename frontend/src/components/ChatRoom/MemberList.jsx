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
  const { rooms, room } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const handleRoomClick = (index) => {
    dispatch(setRoom(index))
  }

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Member List" key="1">
        <ul className="list-group">
          {rooms.map((room, index) => {
            return <LinkStyled key={room._id} onClick={()=>handleRoomClick(index)}>{room.name}</LinkStyled>;
          })}
        </ul>
      </PanelStyled>
      <FormCreateRoom isShow={isShow} />
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

