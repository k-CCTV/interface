import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function State3() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="State3">
      <h1>상태3</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={null}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/testImg4.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>여기에</h3>
            <p>설명 적을 수 있음</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Second slide"
            src={require("../images/testImg5.jpg")}
          />

          <Carousel.Caption>
            <h3>여기에</h3>
            <p>설명 적을 수 있음</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/testImg6.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>여기도 </h3>
            <p>설명 적을 수 있음</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default State3;
