import { UserAddOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, getChatbox } from '../../features/room/roomSlice';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  const dispatch = useDispatch()

  const {room, chatbox} = useSelector((state) => state.room)
  const [content, setContent] = useState("")

  useEffect(()=>{
    if (room) dispatch(getChatbox(room._id))
  }, [room, dispatch])

  useEffect(()=>{
    if (chatbox) dispatch(getChatbox(room._id))
  }, [chatbox, dispatch])

  const handleInputChange = (e) => {
    setContent(e.target.value)
  };

  const handleOnSubmit = () => {
    dispatch(addChat({chatboxID:chatbox._id, data: {content}}))
  };
  return (
    <WrapperStyled>
      {room ? (
      <>
        <HeaderStyled>
          <div className='header__info'>
            <p className='header__title'>{room.name}</p>
            <span className='header__description'>
              ID: {room._id}
            </span>
          </div>
          {/* <ButtonGroupStyled>
            <Button
              icon={<UserAddOutlined />}
              type='text'
            >
              Mời
            </Button>
            <Avatar.Group size='small' maxCount={2}>
              <Tooltip title='A'>
                <Avatar>A</Avatar>
              </Tooltip>
              <Tooltip title='B'>
                <Avatar>B</Avatar>
              </Tooltip>
              <Tooltip title='C'>
                <Avatar>C</Avatar>
              </Tooltip>
            </Avatar.Group>
          </ButtonGroupStyled> */}
        </HeaderStyled>
        <ContentStyled>
          <MessageListStyled>
            {chatbox ? chatbox.messageIDs.map((message)=> {
              return <Message text={message.content} photoURL={null} displayName={message.userID.username} createdAt={message.createdAt} />;
            }):<Message/>}
          </MessageListStyled>
          <FormStyled>
            <Form.Item name='message'>
              <Input
                placeholder='Nhập tin nhắn...'
                bordered={false}
                autoComplete='off'
                onChange={handleInputChange}
              />
            </Form.Item>
            <Button type='primary' onClick={handleOnSubmit}>
              Gửi
            </Button>
          </FormStyled>
        </ContentStyled>
      </>
      ) : (
      <Alert
        message='Hãy chọn phòng'
        type='info'
        showIcon
        style={{ margin: 5 }}
        closable
      />
      )}
    </WrapperStyled>
  );
}
