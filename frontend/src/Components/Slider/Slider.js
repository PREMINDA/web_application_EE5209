import React from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SliderItem from "../Slider Item Component/SliderItem";

const Slider = ({gameList}) => {
  //const list = gameList.sort(() => Math.random() - Math.random()).slice(0, 5)
  return (
    <div style={{ width: "100%" }} className="justify-self-center mt-16">
      {gameList&&<Carousel
        nextIcon={<ArrowCircleRightIcon style={{ height: "45px" }} />}
        prevIcon={<ArrowCircleLeftIcon style={{ height: "45px" }} />}
        fade
      >
        {gameList.slice(0, 5).map((item) => (
          <Carousel.Item key={item.id} interval={2500}>
            <SliderItem
              id={item.id}
              name={item.gameName}
              url={item.url}
              price={item.price}
              arr={item.category}
              imagePaths={item.imagePaths}
            />
          </Carousel.Item>
        ))}
      </Carousel>}
    </div>
  );
};

export default Slider;
