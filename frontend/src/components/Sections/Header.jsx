import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.webp";
import Dots from "../../assets/svg/Dots";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <MainHeader className="extraBold font60">Pomodoro Techniques</MainHeader>
          <HeaderP className="font13 semiBold">
          The Pomodoro Technique is a time management method developed in the late 1980s. It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks.
          </HeaderP>
          <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="START POMO MODE" action={() => navigate("/pomomode")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="SOCIAL MODE" action={() => navigate("/room")} />
                </div>
              </ButtonsRow>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} width={600} height={320} alt="office" style={{zIndex: 9}} />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  text-align: left;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: left;
    max-width: 100%;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const MainHeader = styled.div`
  text-align: left;
`;
