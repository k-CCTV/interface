import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import State1 from "../components/State1";
import State2 from "../components/State2";
import State3 from "../components/State3";
import styled from "styled-components";

const StyledTabDiv = styled.div`
  .nav-link {
    color: black;
    font-size: 1.2rem;
    width: 10rem;
    text-align: center;
  }
  #red .nav-link.active {
    background-color: red;
  }
  #yellow .nav-link.active {
    background-color: #ff8d1e;
  }
`;
const StyledCompareDiv = styled.div`
  display: flex;
  width: 50%;
`;
function ComparePage() {
  const [Tab, setTab] = useState(0);
  function TabContent(props) {
    if (props.Tab === 0) {
      return <State1 />;
    } else if (props.Tab === 1) {
      return <State2 />;
    } else if (props.Tab === 2) {
      return <State3 />;
    }
  }
  return (
    <div className="ComparePage">
      <h1>비교 페이지!</h1>
      <hr />
      <StyledTabDiv>
        <Nav
          className="justify-content-center "
          variant="pills"
          defaultActiveKey="link-0"
        >
          <Nav.Item>
            <div id="red">
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  setTab(0);
                }}
              >
                위험
              </Nav.Link>
            </div>
          </Nav.Item>
          <Nav.Item>
            <div id="yellow">
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  setTab(1);
                }}
              >
                경고
              </Nav.Link>
            </div>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => {
                setTab(2);
              }}
            >
              정상
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </StyledTabDiv>

      <TabContent Tab={Tab} />
    </div>
  );
}

export default ComparePage;
