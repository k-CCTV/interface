import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  let location = useLocation();
  function activeControl() {
    let str = location.pathname.split("/");
    let activeSwitch = document.querySelector(".sidebar-list-item");
    if (str[str.length - 1] === "danger") {
      activeSwitch = document.querySelector(".sidebar-list-item-danger");
    } else if (str[str.length - 1] === "normal") {
      activeSwitch = document.querySelector(".sidebar-list-item-normal");
    } else if (str[str.length - 1] === "warn") {
      activeSwitch = document.querySelector(".sidebar-list-item-warn");
    } else if (str[str.length - 1] === "null") {
      activeSwitch = document.querySelector(".sidebar-list-item-null");
    }
    activeSwitch.classList.toggle("active");
  }
  useEffect(() => {
    activeControl();
  });
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="app-icon">
          <Icon icon="bxs:cctv" width="36" height="36" />
        </div>
      </div>
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          <div>
            <Icon icon="ant-design:home-outlined" width="24" height="24" />
            <span>Home</span>
          </div>
        </li>
        <li
          className="sidebar-list-item-danger"
          onClick={() => {
            navigate("/status/danger", { state: { status: 3 } });
            window.location.reload();
          }}
        >
          <div>
            <Icon
              icon="ph:traffic-signal-light"
              color="red"
              width="24"
              height="24"
            />
            <span>Danger</span>
          </div>
        </li>
        <li
          className="sidebar-list-item-warn"
          onClick={() => {
            navigate("/status/warn", { state: { status: 2 } });
            window.location.reload();
          }}
        >
          <div>
            <Icon
              icon="ph:traffic-signal-light"
              color="orange"
              width="24"
              height="24"
            />
            <span>Warn</span>
          </div>
        </li>
        <li
          className="sidebar-list-item-normal"
          onClick={() => {
            navigate("/status/normal", { state: { status: 1 } });
            window.location.reload();
          }}
        >
          <div>
            <Icon
              icon="ph:traffic-signal-light"
              color="green"
              width="24"
              height="24"
            />
            <span>Normal</span>
          </div>
        </li>
        <li
          className="sidebar-list-item-null"
          onClick={() => {
            navigate("/status/null", { state: { status: 0 } });
            window.location.reload();
          }}
        >
          <div>
            <Icon
              icon="ph:traffic-signal-light"
              color="grey"
              width="24"
              height="24"
            />
            <span>Null</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
