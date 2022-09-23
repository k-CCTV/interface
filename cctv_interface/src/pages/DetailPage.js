import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/detail.css";
import ReactPlayer from "react-player";
import moment from "moment";
import "moment/locale/ko";

function DetailPage() {
  let params = useParams();
  let [board, setBoard] = useState("");
  let [fileType, setFileType] = useState("");
  let navigate = useNavigate();

  const deleteBoard = async () => {
    await axios.delete(`http://localhost:8080/board/${params.id}`).then(() => {
      navigate("/");
    });
  };
  function getStatus(a) {
    if (a === 0) return "NULL";
    else if (a === 1) return "정상";
    else if (a === 2) return "경고";
    else if (a === 3) return "위험";
  }
  function findType(a) {
    let idx = a.indexOf(".");
    console.log(idx);
    console.log(a.substr(idx, a.length - 1));
    setFileType(a.substr(idx, a.length - 1));
  }
  function output() {
    if (fileType === ".mp4")
      return (
        <ReactPlayer
          url={board.files}
          playing={true}
          muted={true}
          controls={true}
        />
      );
    else return <img src={board.files} alt="" className="info-image" />;
  }
  function timeSetting(a) {
    let time = moment(a).format("YY-MM-DD HH:mm:ss");
    return time;
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/board/${params.id}`).then((res) => {
      setBoard(res.data);
      findType(board.files);
    });
  }, [params.id, board.files]);

  return (
    <div className="detailPage">
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
            <h1 className="app-content-headerText">{board.title}</h1>
            <button className="mode-switch" title="Switch Theme">
              <Icon icon="eva:moon-fill" width="24" height="24" />
            </button>
            <button
              className="app-content-headerButton1"
              onClick={() => {
                navigate(`/modify/${params.id}`);
              }}
            >
              수정하기
            </button>
            <button
              className="app-content-headerButton2"
              onClick={() => {
                deleteBoard();
              }}
            >
              삭제하기
            </button>
          </div>
          <div className="info-content">
            <ul className="info-list">
              <li className="info-list-item">
                <Icon icon="emojione-monotone:pencil" width="24" height="24" />
                <span>작성자 : {board.author}</span>
              </li>
              <li className="info-list-item">
                <Icon
                  icon="eva:question-mark-circle-outline"
                  width="24"
                  height="24"
                />
                <span className="statusLabel">상태 :</span>
                <span className={"status" + board.status}>
                  {getStatus(board.status)}
                </span>
              </li>
              <li className="info-list-item">
                <Icon
                  icon="ant-design:message-outlined"
                  width="24"
                  height="24"
                />
                <span>설명 : {board.content}</span>
              </li>
              <li className="info-list-item">
                <Icon icon="bi:calendar-day" width="24" height="24" />
                <span>수정일 : {timeSetting(board.modified_date)}</span>
              </li>
            </ul>
          </div>
          {output()}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
