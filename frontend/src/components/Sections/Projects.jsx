import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import Img1 from "../../assets/img/projects/a1.jpg";
import Img2 from "../../assets/img/projects/a2.png";
import Img3 from "../../assets/img/projects/a3.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Why choose us</h1>
            <p className="font13">
              Aside of the main Pomodoro techniques, we offer you with some music which helps your work time more interesting
              <br />
              Plus, you can chat and join with others in the Social mode and start Pomodoro together!
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Img1} 
                title="Interesting theme"
                text="We pay special attention to designing good theme for the website to make you feel good and ready to try our Pomodoro"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Img2}
                title="Work and communicate with others"
                text="Pomodoro is for every one. You can start Pomodoro with you friends to bring out the best working value."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Img3}
                title="Customize your work time"
                text="How about some music. It helps with your concentration more than you think it can."
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  text-align: left;
`;