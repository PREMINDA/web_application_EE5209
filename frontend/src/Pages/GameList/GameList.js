import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../Components/PopUp/Popup";
import { emptyGame } from "../../redux/action/collectionAction";

const GameList = () => {
  let [isOpen, setIsOpen] = useState(false);

  const newAddUser = useSelector((state) => state.newGame);
  const { newGame } = newAddUser;
  const dispatch = useDispatch();

  useEffect(() => {
    if (newGame) {
      setIsOpen(true);
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
    dispatch(emptyGame());
  }

  function openModal() {
    setIsOpen(true);
  }

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
    </>
  );
};

export default GameList;
//tag={["Game Name", "Game ID", "Price"]}
