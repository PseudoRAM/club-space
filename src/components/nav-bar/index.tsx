import React from "react";
import "./styles.css";
import Logo from "../../assets/logo-black.svg";
import Button from "../button";

interface IProps {
  onClickStart?: any;
}

const NavBar = ({ onClickStart }: IProps) => (
  <div className="nav-bar">
    <div className="logo-wrapper">
      <img src={Logo} alt="logo" />
      <p>Club Space</p>
    </div>
    <div className="nav-link-wrapper">
      <a href="#" className="nav-link">
        Pricing
      </a>
      <a href="#" className="nav-link">
        Resources
      </a>
      <div className="nav-buttons-wrapper">
        <Button alt>Log in</Button>
        <Button
          onClick={() => {
            onClickStart && onClickStart();
          }}
        >
          Start club
        </Button>
      </div>
    </div>
  </div>
);
export default NavBar;
