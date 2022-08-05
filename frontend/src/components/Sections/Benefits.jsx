import React from "react";
import styled from "styled-components";
import BenefitTable from "../Elements/BenefitTable";

export default function Benefits() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Benefits of applying Pomodoro Techniques</h1>
            <p className="font13">
            This simple but effective process helps you make the most of your day with short, periodic breaks. 
              <br />
            While taking several breaks throughout the day might seem counter-productive, there is scientific evidence to support the benefits of getting different types of rest throughout the day.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <BenefitTable
                icon="roller"
                title="Makes tasks less daunting"
                subtitle="We often want to put tasks off because they seem too large. By reducing them to smaller segments, they become less overwhelming, and we can better manage our stress."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <BenefitTable
                icon="monitor"
                title="Improves quality and quantity of your work"
                subtitle="When you know you only have 25 minutes to complete a task, you’ll be surprised by how much value you can cram into it.
                "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <BenefitTable
                icon="browser"
                title="Prevents mental exhaustion"
                subtitle="There is a lot to be said about short, well-timed breaks. Taking breaks helps you avoid burnout. They allow for better conservation of mental energy and a more even distribution of productivity."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <BenefitTable 
              icon="printer" 
              title="Increases accountability and willpower" 
              subtitle="The Pomodoro Technique also promotes a sense of accountability. By listing your tasks and giving them a set amount of time, you can see what needs to be done and better manage yourself and your progress." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;