import React, { useEffect, useState } from "react";
import "../css/main.css";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import Sidebar from "../components/Sidebar";

function StatusPage() {
  let [boardList, setBoardList] = useState([]);
  let [view, setView] = useState(true);
  let [viewStr, setViewStr] = useState("listView");
  let [gridStr, setGridStr] = useState("");
  let [listStr, setListStr] = useState("active");
  let [search, setSearch] = useState("");

  let navigate = useNavigate();
  let location = useLocation();

  function changeSearchValue(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  function viewActive() {
    if (view) {
      setListStr("active");
      setGridStr("");
    } else {
      setListStr("");
      setGridStr("active");
    }
  }
  function darkMode() {
    var modeSwitch = document.querySelector(".mode-switch");
    modeSwitch.addEventListener("click", function () {
      document.documentElement.classList.toggle("light");
      modeSwitch.classList.toggle("active");
    });
  }
  function getStatus(a) {
    if (a === 0) return "NULL";
    else if (a === 1) return "정상";
    else if (a === 2) return "경고";
    else if (a === 3) return "위험";
  }

  function imageError(a) {
    a.target.src =
      "https://cdn.pixabay.com/photo/2015/09/15/17/18/vector-video-player-941434__340.png";
  }
  function timeSetting(a) {
    let time = moment(a).format("YY-MM-DD HH:mm:ss");
    return time;
  }
  function makeView(view) {
    if (view) setViewStr("listView");
    else setViewStr("gridView");
  }
  useEffect(() => {
    axios.get("http://localhost:8080").then((res) => {
      setBoardList(res.data);
    });
  }, []);

  return (
    <div className="statusPage">
      <div className="app-container">
        <Sidebar />
        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">CCTV List</h1>
            <button
              className="mode-switch"
              title="Switch Theme"
              onClick={darkMode}
            >
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
              value={search}
              onChange={changeSearchValue}
            />
            <div className="app-content-actions-wrapper">
              <button
                className={"action-button list " + listStr}
                title="List View"
                onClick={() => {
                  setView(true);
                  makeView(view);
                  viewActive();
                }}
              >
                <Icon icon="bi:list-ol" width="24" height="24" />
              </button>
              <button
                className={"action-button grid " + gridStr}
                title="Grid View"
                onClick={() => {
                  setView(false);
                  makeView(view);
                  viewActive();
                }}
              >
                <Icon icon="bi:grid-3x3" width="24" height="24" />
              </button>
            </div>
          </div>
          <div className={"cctv-area-wrapper " + viewStr}>
            <CCTVHeader />
            {boardList
              .filter((x) => x.status === location.state.status)
              .filter((x) => {
                return (
                  x.title
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  x.author
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  x.content
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                );
              })
              .map((a, idx) => {
                return (
                  <div className="cctv-row" key={a.id}>
                    <div className="cctv-cell image">
                      <img
                        src={a.files}
                        alt=""
                        onError={imageError}
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
                      {timeSetting(a.created_date)}
                    </div>
                    <div className="cctv-cell modified_date">
                      <span className="cell-label">수정 날짜: </span>
                      {timeSetting(a.modified_date)}
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

function CCTVHeader() {
  return (
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
  );
}

export default StatusPage;
