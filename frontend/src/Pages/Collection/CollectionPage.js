import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import InforComponent from "../../Components/GameInfoComponent/InfoComponent";
import procolor from "../../Config/color";

const CollectionPage = () => {
  const tas = [
    "Assassin Creed",
    "Watch Dog",
    "Age",
    "MaxPayne",
    "Avenger",
    "CallOf",
    "Assassin Creed",
    "Watch Dog",
    "Age",
    "MaxPayne",
    "Avenger",
    "CallOf",
    "Assassin Creed",
    "Watch Dog",
    "Age",
    "MaxPayne",
    "Avenger",
    "CallOf",
  ];
  return (
    <div class="flex flex-row" style={{ background: procolor.maincolor }}>
      <div className="w-64 mr-12">
        <InforComponent />
      </div>
      <div className="mt-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {tas.map((title) => (
          <CardComponent key={title} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
