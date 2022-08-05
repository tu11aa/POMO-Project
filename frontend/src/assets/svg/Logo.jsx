import * as React from "react";
import LogoImg from "../../assets/img/logo.png";

function SvgComponent(props) {
  return (
    <img src={LogoImg} width={50} height={50} viewBox="0 0 27 40" alt='Logo' {...props} />
  );
}

export default SvgComponent;
