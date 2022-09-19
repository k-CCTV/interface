import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/post.css";
import axios from "axios";
function PostPage() {
  let navigate = useNavigate();
  let [Title, SetTitle] = useState("");
  let [Author, SetAuthor] = useState("");
  let [Content, SetContent] = useState("");
  let [fileImage, setFileImage] = useState("");
  let [imageDummy, setImageDummy] = useState([]);

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

    if (!(Title || Author || Content)) {
      console.log("누락");
    } else {
      postForm();
    }
  };

  const postForm = async () => {
    for (const keyValue of formData) console.log(keyValue);
    await axios
      .post("http://localhost:8080/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="postPage">
      <div className="form-box">
        <h2>Image Uproad</h2>
        <form
          action="/post"
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
    </div>
  );
}

export default PostPage;
