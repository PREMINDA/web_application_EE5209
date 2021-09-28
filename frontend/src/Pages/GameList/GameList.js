import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../Components/PopUp/Popup";
import mainImage from "../../Images/assassin/1.jpg";
import AdminGameCard from "../../Components/AdminGameCard/AdminGameCard";
import PopUpWarn from "../../Components/PopUpWarn/PopUpWarn";
import LogoAddPopUp from "../../Components/LogoAddPopUp/LogoAddPopUp";

import { getCollectionList } from "../../redux/action/collectionListAction";
import {
  deleteGame,
  addGallery,
  emptyGame,
  addLogo,
} from "../../redux/action/collectionAction";
import ImageAddPopUp from "../../Components/ImageAddPopUp/ImageAddPopUp";

const GameList = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [openImageAdd, setOpenImageAdd] = useState(false);
  const [imageFile, setImageFile] = useState([]);
  const [logoFile, setLogoFile] = useState(null);
  const [logoAddPop, setLogoAddPop] = useState(false);
  const [selectGame, SetSelectGame] = useState(0);
  const [openWarn, setOpenWarn] = useState(false);
  const newAddUser = useSelector((state) => state.newGame);
  const { newGame } = newAddUser;

  const collectionList = useSelector((state) => state.collectionList);
  const { games } = collectionList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (newGame) {
      setIsOpen(true);
    }
    dispatch(getCollectionList());
  }, [newGame, dispatch]);

  function closeModal() {
    setIsOpen(false);

    dispatch(emptyGame());
  }

  const openImageAddPopUp = (id) => {
    SetSelectGame(id);
    setOpenImageAdd(true);
  };

  const onLogoAdd = (id) => {
    SetSelectGame(id);
    setLogoAddPop(true);
  };

  const closePopup = () => {
    setOpenImageAdd(false);
    setOpenWarn(false);
    setLogoAddPop(false);
    setImageFile([]);
    setLogoFile(null);
  };

  const onDelete = (id) => {
    dispatch(deleteGame(id));
    window.location.reload(true);
  };

  const submitImage = () => {
    if (imageFile.length === 0) {
      setOpenImageAdd(false);
      setOpenWarn(true);
    } else {
      const sendFile = new FormData();
      imageFile.forEach((element) => {
        sendFile.append("images", element);
      });

      dispatch(addGallery(selectGame, sendFile));
      setOpenImageAdd(false);
      setLogoFile([]);
    }
  };

  const submitLogo = () => {
    if (logoFile === null) {
      setLogoAddPop(false);
    } else {
      const sendFile = new FormData();

      sendFile.append("images", logoFile);

      dispatch(addLogo(selectGame, sendFile));
      setLogoAddPop(false);
      setLogoFile(null);
    }
  };

  return (
    <>
      {newGame && (
        <Popup
          ditail={[
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
      <ImageAddPopUp
        isOpen={openImageAdd}
        submitModal={submitImage}
        closeModal={closePopup}
        setImageFile={setImageFile}
      />
      <PopUpWarn
        isOpen={openWarn}
        closeModal={closePopup}
        message="You Haven't Select Any Image"
      />
      <LogoAddPopUp
        setImageFile={setLogoFile}
        isOpen={logoAddPop}
        closeModal={closePopup}
        submitModal={submitLogo}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {games &&
          games.map((game) => (
            <AdminGameCard
              key={game.gameId}
              id={game.id}
              mainImage={mainImage}
              game={game}
              onDelete={onDelete}
              onAdd={openImageAddPopUp}
              onLogoAdd={onLogoAdd}
            />
          ))}
      </div>
    </>
  );
};

export default GameList;
//tag={["Game Name", "Game ID", "Price"]}
