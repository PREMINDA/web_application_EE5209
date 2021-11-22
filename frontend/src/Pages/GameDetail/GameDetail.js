import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGame } from "../../redux/action/collectionListAction";
import InforComponent from "../../Components/GameInfoComponent/InfoComponent";
import GameDetailLeft from "../../Components/GameDetailComponent/GameDetailLeft";
import CommentBox from "../../Components/CommentBox/CommentBox";
import Button from "@restart/ui/esm/Button";

const GameDetail = ({ match }) => {
  const dispatch = useDispatch();
  const [gameId, setGameId] = useState(0);
  const selectedGame = useSelector((state) => state.game);
  const { gameDetail } = selectedGame;

  useEffect(() => {
    dispatch(getGame(match.params.id));
    setGameId(match.params.id);
  }, [dispatch]);

  const asd =()=>{}

  return (
    <div className="flex">
      <div className="px-12 mt-16 container-xl">
        <div>
          {gameDetail && <GameDetailLeft gameDetail={gameDetail} />}
        </div>
       <div>
        {<CommentBox id={match.params.id}/>}
       </div>
       <button></button>
      </div>
      {gameDetail && (
        <InforComponent
          gameId={match.params.id}
          sys={gameDetail.systemRequirements}
          dev={gameDetail.developerInformation}
        />
      )}
    </div>
  );
};

export default GameDetail;
