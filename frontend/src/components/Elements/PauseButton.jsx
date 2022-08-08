import React from 'react'
import styled from 'styled-components'
function PauseButton(props) {
  return (
    <>
     <Button {...props} type="submit" value="PAUSE" className="pointer animate radius8" style={{ maxWidth: "200px" }} />
    </>
  )
}

export default PauseButton;

const Button = styled.input`
  background-color: #1f1f1f;
  width: 100%;
  height: 50px;
  outline: none;
  color: #fff;
  font-size: 30px;
  :hover {
    background-color: #282828;
    color: #fff;
  }
  font-family: "Lucida Console", "Courier New", monospace;
`;