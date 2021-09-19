import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../Components/PopUp/Popup";
import { emptyGame } from "../../redux/action/collectionAction";
import mainImage from "../../Images/assassin/1.jpg";
import AdminGameCard from "../../Components/AdminGameCard/AdminGameCard";
import { getCollectionList } from "../../redux/action/collectionListAction";
import { deleteGame } from "../../redux/action/collectionAction";

const GameList = () => {
  let [isOpen, setIsOpen] = useState(false);

  const newAddUser = useSelector((state) => state.newGame);
  const collectionList = useSelector((state) => state.collectionList);
  const { newGame } = newAddUser;
  const { games } = collectionList;
  const dispatch = useDispatch();

  useEffect(() => {
    if (newGame) {
      setIsOpen(true);
    }
    dispatch(getCollectionList());
  }, []);

  function closeModal() {
    setIsOpen(false);
    dispatch(emptyGame());
  }

  function openModal() {
    setIsOpen(true);
  }

  const onDelete = (id) => {
    console.log(id);
    dispatch(deleteGame(id));
    window.location.reload(true);
  };

  return (
    <>
      {newGame && (
        <Popup
          newGame={[
            `${newGame.gameId}`,
            `${newGame.gameName}`,
            `${newGame.price}`,
          ]}
          isOpen={isOpen}
          Fragment={Fragment}
          closeModal={closeModal}
          tag={["Game Name", "Game ID", "Price"]}
        />
      )}
      <div className="grid grid-cols-5 gap-4 mt-8">
        {games &&
          games.map((game) => (
            <AdminGameCard
              key={game.gameId}
              id={game.id}
              mainImage={mainImage}
              game={game}
              onDelete={onDelete}
            />
          ))}
      </div>
    </>
  );
};

export default GameList;
//tag={["Game Name", "Game ID", "Price"]}
