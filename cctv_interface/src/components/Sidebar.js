import { Icon } from "@iconify/react";
import React from "react";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="app-icon">
          <Icon icon="bxs:cctv" width="36" height="36" />
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item active">
          <a href="/">
            <Icon icon="ant-design:home-outlined" width="24" height="24" />
            <span>Home</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/danger">
            <Icon
              icon="ph:traffic-signal-light"
              color="red"
              width="24"
              height="24"
            />
            <span>Danger</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/warn">
            <Icon
              icon="ph:traffic-signal-light"
              color="orange"
              width="24"
              height="24"
            />
            <span>Warn</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/normal">
            <Icon
              icon="ph:traffic-signal-light"
              color="green"
              width="24"
              height="24"
            />
            <span>Normal</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/null">
            <Icon
              icon="ph:traffic-signal-light"
              color="grey"
              width="24"
              height="24"
            />
            <span>Null</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/test">
            <Icon icon="ph:traffic-signal-light" width="24" height="24" />
            <span>Test Server</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
