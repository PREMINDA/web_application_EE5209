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

{
  /* <Carousel.Item interval={20000}>
          <img
            style={{ borderRadius: "16px", height: "640px" }}
            className="d-block w-100 object-cover object-center absolute"
            src={
              "https://i.gadgets360cdn.com/large/Cyberpunk_2077_website_1617083795450.jpg"
            }
            alt="First slide"
          />
          <div
            style={{
              borderRadius: "16px",
              height: "640px",
              background:
                "linear-gradient(30deg,rgba(8,10,49,0.8) 0%, rgba(8,10,49,0.6) 40%, rgba(8,10,49,0) 100%)",
            }}
            className="relative h-full w-full"
          >
            <div style={{ bottom: "0" }} className="ml-6 absolute">
              <h1 className="text-white text-5xl font-body font-bold">
                CYBER PUNK 2077
              </h1>
              <h1
                style={{ color: procolr.pricingColo }}
                className="text-6xl font-body font-bold"
              >
                39.00 $
              </h1>
              <div className="flex mb-6">
                {arr.map((text) => (
                  <TextRound key={text} text={text} fontSize={"14px"} />
                ))}
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            style={{ borderRadius: "16px", height: "640px" }}
            className="d-block w-100 object-cover object-center"
            src={
              "https://assets.vg247.com/current//2021/06/all_assassins_creed_characters.jpg"
            }
            alt="Second slide"
          />
        </Carousel.Item> */
}
