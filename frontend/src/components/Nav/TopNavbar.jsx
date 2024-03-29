import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as Linker } from "react-scroll";

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
// Assets
import LogoIcon from "../../assets/svg/Logo";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)
  const user = JSON.parse(localStorage.getItem("user"))

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    localStorage.removeItem("user")
    navigate('/')
  }


  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Linker className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="Abril Fatface" >
              Pomodoro
            </h1>
          </Linker>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Linker activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Linker>
            </li>
            <li className="semiBold font15 pointer">
              <Linker activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Benefits
              </Linker>
            </li>
            <li className="semiBold font15 pointer">
              <Linker activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Advantages
              </Linker>
            </li>
            <li className="semiBold font15 pointer">
              <Linker activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                About Us
              </Linker>
            </li>
          </UlWrapper>
          
          {user ? (
            <UlWrapperRight className="flexNullCenter">
              hello 
              <Link to='/profile'  style={{ padding: "10px 30px 10px 0" }}>
              <UlWrapper>
                , {user.username}
              </UlWrapper>
              </Link>
            <li className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            <button  onClick={onLogout}>
               <Title>Sign Out</Title>
            </button>
          </li>
          </UlWrapperRight>
          ) : (
          <>
          <UlWrapperRight className="flexNullCenter">
          <li className="semiBold font15 pointer">
            <Link to="/register" style={{ padding: "10px 30px 10px 0" }}>
            Sign Up
          </Link>
          </li>
          <li className="semiBold font15 pointer flexCenter">
            <Link to="/login" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Sign In
            </Link>
            </li>
          </UlWrapperRight>
          </>
        )}
             
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const Title=styled.div`
font-size: medium;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


