import React, { useEffect } from "react";
import procolr from "../../Config/color";
import Slider from "../../Components/Slider/Slider";
import LatesGame from "../../Components/LatesGameComponent/LatesGameComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionList } from "../../redux/action/collectionListAction";

const Home = () => {
  const dispatch = useDispatch();
  const collectionList = useSelector((state) => state.collectionList);
  const { games } = collectionList;

  useEffect(() => {
    dispatch(getCollectionList());
  }, [dispatch]);

  return (
    <div style={{ background: procolr.maincolor }}>
      <div
        style={{ width: "80%", background: procolr.maincolor }}
        className=" h-full grid justify-self-center mx-auto "
      >
        <Slider></Slider>
        <h2 className="mt-8 text-white">Latest Games</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center mt-8">
          {games &&
            games
              .slice(0, 5)
              .map((game) => <LatesGame key={game.id} game={game} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
