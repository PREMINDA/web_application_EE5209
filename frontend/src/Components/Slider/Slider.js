import React from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import SliderItem from "../Slider Item Component/SliderItem";

const Slider = () => {
  const listitem = [
    {
      url: "https://uptopico.com/upload/blog/cover/604df997b6eb0.jpg",
      name: "Cyber Punk 2077",
      price: "39.00",
      arr: ["WAR", "ACTION", "ADVENTURE", "RPG"],
    },
    {
      url:
        "https://www.pcgamesn.com/wp-content/uploads/2020/11/assassins-creed-valhalla-pc-settings.jpg",
      name: "Assassin Creed Valhalla",
      price: "69.00",
      arr: ["WAR", "ACTION", "ADVENTURE", "RPG"],
    },
    {
      url: "https://images4.alphacoders.com/928/thumb-1920-928114.jpg",
      name: "Ori and the Will of the Wisps",
      price: "29.00",
      arr: ["ACTION", "ADVENTURE", "FANTACY"],
    },
  ];
  return (
    <div style={{ width: "100%" }} className="justify-self-center mt-16">
      <Carousel
        nextIcon={<ArrowCircleRightIcon style={{ height: "45px" }} />}
        prevIcon={<ArrowCircleLeftIcon style={{ height: "45px" }} />}
        fade
      >
        {listitem.map((item) => (
          <Carousel.Item key={item.name} interval={2000}>
            <SliderItem
              name={item.name}
              url={item.url}
              price={item.price}
              arr={item.arr}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
