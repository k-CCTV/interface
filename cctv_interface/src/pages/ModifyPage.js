import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/post.css";
import Alert from "../components/Alert";

function ModifyPage() {
  let navigate = useNavigate();
  let [board, setBoard] = useState("");
  let [Title, SetTitle] = useState("");
  let [Author, SetAuthor] = useState("");
  let [Content, SetContent] = useState("");
  let [Password, SetPassword] = useState("");
  let [fileImage, setFileImage] = useState("");
  let [imageDummy, setImageDummy] = useState([]);
  let [alert, setAlert] = useState(false);
  let [alertStr, setAlertStr] = useState("내용을 빠짐없이 작성하세요!!!");
  let params = useParams();

  const formData = new FormData();

  const saveFileImage = (e) => {
    const nowSelectImageList = e.target.files;
    let nowImageURLList = [...fileImage];

    for (let i = 0; i < nowSelectImageList.length; i++) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
      setImageDummy(e.target.files[i]);
    }
    if (nowImageURLList.length > 10) {
      nowImageURLList = nowImageURLList.slice(0, 10);
    }
    setFileImage(nowImageURLList);
    console.log(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(imageDummy);

    formData.append("files", imageDummy);
    formData.append("title", Title);
    formData.append("author", Author);
    formData.append("content", Content);

    if (!(Title && Author && Content)) {
      setAlertStr("내용을 빠짐없이 작성하세요!!!");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else if (Password === board.password) {
      updateForm();
    } else {
      setAlertStr("비밀번호가 일치하지 않습니다!!!");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };

  const updateForm = async () => {
    for (const keyValue of formData) console.log(keyValue);
    await axios
      .put(`http://localhost:8080/modify/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios.get(`http://localhost:8080/modify/${params.id}`).then((res) => {
      setBoard(res.data);
    });
  }, [params.id, board.files]);
  return (
    <div className="modifyPage">
      <div className="form-box">
        <h2>Image Modify</h2>
        <form
          action="/modify"
          method="post"
          encType="multipart/form-data"
          onSubmit={onSubmit}
          // onSubmit={uploadModule}
        >
          <div className="user-box">
            <input
              type="text"
              name="title"
              value={Title}
              onChange={(e) => {
                SetTitle(e.target.value);
              }}
              className="form-control"
              id="inputTitle"
              required=""
            />
            <label>제목</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="author"
              className="form-control"
              id="inputAuthor"
              required=""
              onChange={(e) => {
                SetAuthor(e.target.value);
              }}
            />
            <label>작성자</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="content"
              className="form-control"
              id="inputContent"
              required=""
              onChange={(e) => {
                SetContent(e.target.value);
              }}
            />
            <label>설명</label>
          </div>
          <div className="user-box">
            <input
              type="file"
              name="files"
              accept="image/*,video/mp4"
              onChange={saveFileImage}
            />
            <label>동영상 선택</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="password"
              className="form-control"
              id="inputPassword"
              required=""
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
            <label>비밀번호 (기본값: 1234)</label>
          </div>
          <div className="button-area">
            <input className="submit-button" type="submit" value="등록하기" />
            <button
              className="home-button"
              onClick={() => {
                navigate("/");
              }}
            >
              돌아가기
            </button>
          </div>
        </form>
      </div>
      {alert === true ? <Alert alertStr={alertStr} /> : null}
    </div>
  );
}
// function Alert(props) {
//   return (
//     <>
//       <div className="alert">
//         <p> {props.alertStr}</p>
//       </div>
//     </>
//   );
// }
export default ModifyPage;
