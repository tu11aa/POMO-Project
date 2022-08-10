import styled from "styled-components";
import { Link } from "react-scroll";
import {useNavigate} from 'react-router-dom'
// Assets
import LogoIcon from "../../assets/svg/Logo";

export default function HomeButton() {

const navigate = useNavigate()

  return (
    <>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="Abril Fatface" onClick={() => navigate('/')} >
              Pomodoro
            </h1>
          </Link>
          
        </NavInner>
    </>
  );
}


const NavInner = styled.div`
  position: relative;
  height: 100%;
  padding-top: 20px;
`




