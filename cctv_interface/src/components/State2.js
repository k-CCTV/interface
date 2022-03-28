import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const StyledCarouselDiv = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
  z-index: 1;
  .active.carousel-item > img {
    display: block;
    width: 50rem;
  }
`;
function State2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="State2">
      <h1>상태2</h1>
      <StyledCarouselDiv>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          fade
          interval={null}
        >
          <Carousel.Item>
            <img src={require("../images/testImg1.jpg")} alt="First slide" />
            <Carousel.Caption>
              <h3>여기에</h3>
              <p>설명 적을 수 있음</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="Second slide" src={require("../images/testImg2.jpg")} />

            <Carousel.Caption>
              <h3>여기에</h3>
              <p>설명 적을 수 있음</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../images/testImg3.jpg")} alt="Third slide" />

            <Carousel.Caption>
              <h3>여기도 </h3>
              <p>설명 적을 수 있음</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </StyledCarouselDiv>
    </div>
  );
}

export default State2;
