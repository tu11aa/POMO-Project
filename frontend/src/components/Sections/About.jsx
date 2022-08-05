import React from "react";
import styled from "styled-components";
// Components
import AboutTable from "../Elements/PricingTable";

export default function About() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">About Our Team</h1>
            <p className="font13">
              This is a school project belongs to Group 8
              <br />
              With the help of Mr.HO Tuan Thanh, we are building a website for learning and providing people with a product that brings Pomodoro more interesting and easy.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <AboutTable
                icon="roller"
                price="Back-end Developer"
                title="Tu Le"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </TableBox>
            <TableBox>
              <AboutTable
                icon="monitor"
                price="Front-end Developer"
                title="Thuan Vo"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </TableBox>
            <TableBox>
              <AboutTable
                icon="browser"
                price="UX-UI Designer"
                title="Phuong Nguyen"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




