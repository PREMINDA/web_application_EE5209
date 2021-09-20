import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../../Components/CardComponent/CardComponent";
import InforComponent from "../../Components/GameInfoComponent/InfoComponent";
import procolor from "../../Config/color";
import { getCollectionList } from "../../redux/action/collectionListAction";

const CollectionPage = () => {
  const collectionList = useSelector((state) => state.collectionList);
  const { games } = collectionList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionList());
  }, []);

  return (
    <div className="container-xl" style={{ background: procolor.maincolor }}>
      <div className="mt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {games && games.map((game) => <CardComponent game={game} />)}
      </div>
    </div>
  );
};

export default CollectionPage;

<div className="w-64 mr-12">
  <InforComponent />
</div>;
