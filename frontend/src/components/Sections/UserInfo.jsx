import React, { useState } from "react";
import styled from "styled-components";
import AntNestForm from "../AntdForm/AntNestForm";

function UserInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  const handleUpdate = (e) => {
    setDisable(disable===true?false:true)
  }
  
  const [disable, setDisable] = useState(false);

  return (
    <InfoGroup>
      <Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{
              borderRadius: "100%",
              width: "20%",
              height: "100%",
              marginRight: "20px",
            }}
            src="data:image/jpeg;base64,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"
            alt="...."
          />
          <p>Profile</p>
        </div>
        <ButtonUpdate onClick={handleUpdate}>Update</ButtonUpdate>
      </Title>
      <AntNestForm user={user} isDisable={disable} />
    </InfoGroup>
  );
}

export default UserInfo;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-size: xx-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const InfoGroup = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background: url(https://img.freepik.com/premium-photo/abstract-color-pastel-background-soft-sky-with-cloud-background-pastel-color_6529-311.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
const ButtonUpdate = styled.button`
  margin-right: 20%;
  padding: 0 10px;
  width: 20%;
  text-align: center;
  border: 1px red solid;
  border-radius: 3rem; // round corners
  transition: all 0.4s ease-in-out; // smooth transition for hover effect and font change.
  &:hover {
    cursor: pointer;
    background-position: 100% 0;
    color: red;
    transform: translatey(-0.3rem); // on hover, slightly shift the button up.
  }
`;
