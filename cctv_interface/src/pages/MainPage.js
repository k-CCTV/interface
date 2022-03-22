import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const StyledListDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
const StlyedListBoxDiv = styled.div`
  display: flex;
  justify-content: center;
`;
function MainPage() {
  const [objects, setObjects] = useState([
    { id: 1, title: "2022-03-20_16:39" },
    { id: 2, title: "2022-03-21_20:39" },
    { id: 3, title: "2022-03-22_21:39" },
    { id: 4, title: "2022-03-23_22:39" },
    { id: 5, title: "2022-03-24_23:39" },
  ]);
  return (
    <div className="MainPage">
      <h1>메인 페이지</h1>
      <hr />
      {objects.map((object) => (
        <StlyedListBoxDiv>
          <StyledListDiv>
            <div>
              <h5>번호: {object.id}</h5>
              <h5>제목: {object.title}</h5>
            </div>
            <Button variant="outline-primary">이동</Button>
          </StyledListDiv>
        </StlyedListBoxDiv>
      ))}
    </div>
  );
}

export default MainPage;
