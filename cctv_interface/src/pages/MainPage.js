import React, { useEffect, useState } from "react";
import "../css/test.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MainPage() {
  let [boardList, setBoardList] = useState([]);
  let [view, setView] = useState(true);
  let [viewStr, setViewStr] = useState("tableView");
  let navigate = useNavigate();

  function getStatus(a) {
    if (a === 0) return "NULL";
    else if (a === 1) return "정상";
    else if (a === 2) return "경고";
    else if (a === 3) return "위험";
  }
  function makeView(view) {
    if (view) setViewStr("tableView");
    else setViewStr("gridView");
  }
  useEffect(() => {
    axios.get("http://localhost:8080").then((res) => {
      setBoardList(res.data);
    });
  }, []);

  return (
    <div className="mainPage">
      <div className="app-container">
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
        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">CCTV List</h1>
            <button className="mode-switch" title="Switch Theme">
              <Icon icon="eva:moon-fill" width="24" height="24" />
            </button>
            <button
              className="app-content-headerButton"
              onClick={() => {
                navigate("/post");
              }}
            >
              Add Image
            </button>
          </div>
          <div className="app-content-actions">
            <input
              className="search-bar"
              placeholder="Search for title"
              type="text"
              //   onkeyup="searchFunc()"
            />
            <div className="app-content-actions-wrapper">
              <div className="filter-button-wrapper">
                <button className="action-button filter jsFilter">
                  <span>Filter</span>
                  <Icon icon="line-md:image-twotone" width="24" height="24" />
                </button>
                <div className="filter-menu">
                  <label>Category</label>
                  <select>
                    <option>All Categories</option>
                    <option>Furniture</option>
                    <option>Decoration</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                  </select>
                  <label>Status</label>
                  <select>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                  </select>
                  <div className="filter-menu-buttons">
                    <button className="filter-button reset">Reset</button>
                    <button className="filter-button apply">Apply</button>
                  </div>
                </div>
              </div>
              <button
                className="action-button list active"
                title="List View"
                onClick={() => {
                  setView(true);
                  makeView(view);
                }}
              >
                <Icon icon="bi:list-ol" width="24" height="24" />
              </button>
              <button
                className="action-button grid"
                title="Grid View"
                onClick={() => {
                  setView(false);
                  makeView(view);
                }}
              >
                <Icon icon="bi:grid-3x3" width="24" height="24" />
              </button>
            </div>
          </div>
          <div className={"cctv-area-wrapper " + viewStr}>
            <div className="cctv-header">
              <div className="cctv-cell image">
                CCTV
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell author">
                작성자
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell status-cell">
                상태
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell content">
                설명
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell created_date">
                작성날짜
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
              <div className="cctv-cell modified_date">
                수정날짜
                <button className="sort-button">
                  <Icon icon="bx:sort-alt-2" width="24" height="24" />
                </button>
              </div>
            </div>
            {boardList.map((a, idx) => {
              return (
                <div className="cctv-row" key={a.id}>
                  <div className="cctv-cell image">
                    <img
                      src={boardList[idx].files}
                      alt=""
                      onClick={() => {
                        navigate(`/board/${a.id}`);
                      }}
                    />
                    <span
                      className="searchTitle"
                      onClick={() => {
                        navigate(`/board/${a.id}`);
                      }}
                    >
                      {a.title}
                    </span>
                  </div>
                  <div className="cctv-cell author">
                    <span className="cell-label">작성자</span>
                    <span className="searchAuthor">{a.author}</span>
                  </div>
                  <div className="cctv-cell status-cell">
                    <span className="cell-label">상태:</span>
                    <span className={"status" + a.status}>
                      {getStatus(a.status)}
                    </span>
                  </div>
                  <div className="cctv-cell content">
                    <span className="cell-label">설명:</span>
                    <span className="searchContent">{a.content}</span>
                  </div>
                  <div className="cctv-cell created_date">
                    <span className="cell-label">작성 날짜: </span>
                    {a.created_date}
                  </div>
                  <div className="cctv-cell modified_date">
                    <span className="cell-label">수정 날짜: </span>
                    {a.modified_date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
