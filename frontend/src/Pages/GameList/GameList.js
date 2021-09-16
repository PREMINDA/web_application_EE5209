import React, { useState } from "react";

const GameList = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);
  return (
    <div className="">
      <h1>Game List</h1>
      <input
        multiple
        onChange={(e) => setSelectedFile(e.target.files)}
        type="file"
      ></input>
    </div>
  );
};

export default GameList;
