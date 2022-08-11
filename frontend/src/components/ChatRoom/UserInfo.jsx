import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';


const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 20px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .backhome{
    margin-right: 10px;
  }

  .username {
    padding: 10px 10px;
    font-size: 24px;
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
  const handleBack = () => {
    console.log('A')
  };
  return (
    <WrapperStyled>
      <div>
        <LeftOutlined className='backhome' size="large" onClick={handleBack}/>
        <Avatar size={55}>A</Avatar>
        <Typography.Text className='username' variant="h2" >Username</Typography.Text>
      </div>
      {/* <Button ghost>Đăng xuất</Button> */}
    </WrapperStyled>
  );
}
