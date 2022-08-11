import React from "react";
import styled from "styled-components";

function UserInfo(){
  return (
    <InfoGroup>
      <Title>Profile</Title>
      <WrapperBox>
      <>
      <div className="form-group">
      <input
        type="Name"
        className="form-control"
        id="name"
        name="Username"
        placeholder="Enter Username"
        required
      />
      </div>
      </>
      <>
      <div className="form-group">
      <input
        type="Name"
        className="form-control"
        id="name"
        name="Full Name"
        placeholder="Enter Full Name"
        required
      />
      </div>
      </>
      <>
      <div className="form-group">
      <input
        type="Name"
        className="form-control"
        id="nickname"
        name="nickname"
        placeholder="Enter Nickname"
        required
      />
      </div>
      </>
      <>
      <div className="form-group">
      <input
        type="Date"
        className="form-control"
        id="dob"
        name="DateOfBirth"
        placeholder="Enter Date of Birth"
        required
      />
      </div>
      </>
      <>
      <div className="form-group">
      <input
        type="Email"
        className="form-control"
        id="Email"
        name="email"
        placeholder="Enter Email"
        required
      />
      </div>
      </>
      <>
      <div className="form-group">
      <input
        type="Bio"
        className="form-control"
        id="Name"
        name="bio"
        placeholder="Bio"
        required
      />
      </div>
      </>

      </WrapperBox>
      
      <Wrapper>
      <div className="form-group">
      <button className="btn btn-block">Update</button>
      </div>
      </Wrapper>
      
  </InfoGroup>
  );
}
  


export default UserInfo;

const Wrapper=styled.div`
  width:200px
`
const WrapperBox=styled.div`
  width:500px;
  align-items: center;
`
const Title=styled.div`
margin-left: 50px;
margin-top:20px;
margin-bottom: 20px;
font-size: xx-large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const InfoGroup=styled.div`
  margin-left:100px;
`