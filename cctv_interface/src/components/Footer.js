import React from "react";
import styled from "styled-components";

function Footer() {
  const StyledFooterBoxDiv = styled.div`
    background-color: #252525;
    height: 200px;
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
  `;
  return (
    <StyledFooterBoxDiv>
      <StlyedFooterDiv>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Footer Title</h5>
              <hr />
              <p>내용이 들어가요!!!! </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Footer Title</h5>
              <hr />
              <p>내용이 들어가요!!!! </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Footer Title</h5>
              <hr />
              <p>내용이 들어가요!!!! </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h5 className="widget-title">Footer Title</h5>
              <hr />
              <p>내용이 들어가요!!!! </p>
            </div>
          </div>
        </div>
      </StlyedFooterDiv>
    </StyledFooterBoxDiv>
  );
}

export default Footer;
