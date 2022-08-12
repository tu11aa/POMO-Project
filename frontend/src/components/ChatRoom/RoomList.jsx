import React, { useEffect } from "react";
import { Collapse, Typography, Button, Input, Space } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../features/room/roomSlice";
import FormCreateRoom from "../FormCreateRoom/FormCreateRoom";

const { Panel } = Collapse;
const { Search } = Input;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  const dispatch = useDispatch();

  const { rooms } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const handleAddRoom = () => {
    console.log("add room");
    console.log(rooms);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        <ul className="list-group">
          {rooms.map((room) => {
            return <LinkStyled key={room._id}>{room.name}</LinkStyled>;
          })}
        </ul>

        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Thêm phòng
        </Button>
      </PanelStyled>
      <div style={{ textAlign: "center", color: "red", margin: "10px auto" }}>
        CREATE NEW ROOM
      </div>
      <FormCreateRoom />
    </Collapse>
  );
}
