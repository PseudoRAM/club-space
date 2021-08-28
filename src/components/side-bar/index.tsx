import React from "react";
import TrayButton, { TYPE_LEAVE } from "../tray-button";
import "./styles.css";

import logoSquare from "../../assets/logo-square.svg";
import SideButton from "../side-button";
import Icon from "../icon";
import AppIcon from "../app-icon";
import { Application } from "../../applets";

interface IProps {
  onClickLeaveCall: any;
  onMarketClick?: any;
  disabled?: boolean;
  applications?: Application[];
}

const SideBar = ({
  onClickLeaveCall,
  onMarketClick,
  disabled,
  applications,
}: IProps) => {
  function leaveCall() {
    onClickLeaveCall && onClickLeaveCall();
  }
  return (
    <div className="side-nav">
      <img src={logoSquare} className="logo-square" alt="logo" />
      <div>
        {applications &&
          applications.map((app) => (
            <button className="side-app-button">
              <AppIcon icon={app.icon} />
            </button>
          ))}
      </div>
      <div>
        <SideButton onClick={onMarketClick}>
          <Icon type="store" />
        </SideButton>
        <div className="logout-btn">
          <TrayButton
            type={TYPE_LEAVE}
            disabled={disabled}
            newButtonGroup={true}
            highlighted={true}
            onClick={leaveCall}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
