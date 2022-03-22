import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const StyledFooterBoxDiv = styled.div`
    background-color: #252525;
    height: 250px;
    width: 100%;
    padding-top: 1%;
  `;
  const StlyedFooterDiv = styled.div`
    font-size: 1.2rem;
    margin-left: 8%;
    color: white;
    .widget-title {
      color: #ff8d1e;
    }
    .widget-link {
      color: white;
      text-decoration: none;
    }
  `;
  return (
    <StyledFooterBoxDiv>
      <StlyedFooterDiv>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">From</h5>
              <hr />
              <p>충북대학교 소프트웨어학과 </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Team Members</h5>
              <hr />
              <p>김태인</p>
              <p>송주한</p>
              <p>최성운</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Repository</h5>
              <hr />
              <p>
                <Link
                  to="https://github.com/orgs/k-CCTV/repositories"
                  // to={window.open(
                  //   "[https://github.com/orgs/k-CCTV/repositories]",
                  //   "_blank"
                  // )}
                  className="widget-link"
                >
                  Git hub
                </Link>
              </p>
              <p>
                <Link
                  to="https://github.com/k-CCTV/interface"
                  className="widget-link"
                >
                  Interface
                </Link>
              </p>
              <p>
                <Link
                  to="https://github.com/k-CCTV/segmentation"
                  className="widget-link"
                >
                  Object Detection
                </Link>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Contents</h5>
              <hr />
              <p>강가에서 일어나는 안전사고 검출 </p>
            </div>
          </div>
        </div>
      </StlyedFooterDiv>
    </StyledFooterBoxDiv>
  );
}

export default Footer;
