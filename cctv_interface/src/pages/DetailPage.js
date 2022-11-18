import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/detail.css";
import ReactPlayer from "react-player";
import moment from "moment";
import "moment/locale/ko";
import Sidebar from "../components/Sidebar";
import Alert from "../components/Alert";

function DetailPage() {
  let params = useParams();
  let [board, setBoard] = useState("");
  let [fileType, setFileType] = useState("");
  let [modal, setModal] = useState(false);
  let [password, setPassword] = useState("");
  let [alert, setAlert] = useState(false);
  let [alertStr, setAlertStr] = useState("");
  let navigate = useNavigate();

  const deleteBoard = async () => {
    if (password === board.password) {
      await axios
        .delete(`http://localhost:8080/board/${params.id}`)
        .then(() => {
          navigate("/");
        });
    } else {
      setAlertStr("비밀번호가 일치하지 않습니다!!!");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };
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
  function getPassword(x) {
    setPassword(x);
    deleteBoard();
  }
  function getModal(x) {
    setModal(x);
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/board/${params.id}`).then((res) => {
      setBoard(res.data);
      findType(board.files);
      console.log(board);
    });
  }, [params.id, board.files]);

  return (
    <div className="detailPage">
      <div className="app-container">
        <Sidebar />
        <div className="app-content">
          {alert === true ? <Alert alertStr={alertStr} /> : null}
          <div className="app-content-header">
            <h1 className="app-content-headerText">{board.title}</h1>
            <button
              className="mode-switch"
              title="Switch Theme"
              onClick={darkMode}
            >
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
                // deleteBoard();
                setModal(true);
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
          <div className="app-content-image">
            {output()}
            {output()}
          </div>
          <ul className="info-list">
            <li className="info-list-item">
              <Icon icon="carbon:result" width="24" height="24" />
              <span>
                {" "}
                검출 결과 : 강과 사람이 {board.detact_result}% 곂치기 때문에{" "}
                {getStatus(board.status)} 상태를 판정했습니다.
              </span>
            </li>
          </ul>
          {modal === true ? (
            <Modal getPassword={getPassword} getModal={getModal} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
function Modal({ getPassword, getModal }) {
  let [password, setPassword] = useState("");
  let [modal, setModal] = useState(true);
  return (
    <>
      <div className="modal-box">
        <div className="user-box">
          <input
            type="text"
            name="password"
            className="form-control"
            id="inputPassword"
            required=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label>비밀번호</label>
        </div>
        <div className="button-area">
          <button
            className="report-button"
            onClick={() => {
              setModal(false);
              getPassword(password);
              getModal(modal);
            }}
          >
            제출하기
          </button>
          <button
            className="home-button"
            onClick={() => {
              setModal(false);
              getModal(modal);
            }}
          >
            돌아가기
          </button>
        </div>
      </div>
    </>
  );
}
// function Alert(props) {
//   return (
//     <>
//       <div className="alert">
//         <p> 비밀번호가 일치하지 않습니다.!!!</p>
//       </div>
//     </>
//   );
// }
export default DetailPage;
