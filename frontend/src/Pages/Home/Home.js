import React from "react";
import procolr from "../../Config/color";
import Slider from "../../Components/Slider/Slider";
import LatesGame from "../../Components/LatesGameComponent/LatesGameComponent";

const Home = () => {
  return (
    <div style={{ background: procolr.maincolor }}>
      <div
        style={{ width: "80%", background: procolr.maincolor }}
        className=" h-full grid justify-self-center mx-auto "
      >
        <Slider></Slider>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center mt-24">
          <LatesGame key={1} />
          <LatesGame key={2} />
          <LatesGame key={3} />
          <LatesGame key={4} />
          <LatesGame key={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;
