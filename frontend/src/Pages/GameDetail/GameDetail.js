import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGame } from "../../redux/action/collectionListAction";
import InforComponent from "../../Components/GameInfoComponent/InfoComponent";
import GameDetailLeft from "../../Components/GameDetailComponent/GameDetailLeft";

const GameDetail = ({ match }) => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.game);
  const { gameDetail } = selectedGame;
  const [game, setGame] = useState({});

  useEffect(() => {
    dispatch(getGame(match.params.id));
  }, []);

  console.log(gameDetail);

  return (
    <div className="flex">
      <div className="px-12 mt-16 container-xl">
        {gameDetail && <GameDetailLeft gameDetail={gameDetail} />}
      </div>
      {gameDetail && (
        <InforComponent
          sys={gameDetail.systemRequirements}
          dev={gameDetail.developerInformation}
        />
      )}
    </div>
  );
};

export default GameDetail;
