import React, { useEffect, useState } from "react";
import DatePickers from "../../Components/DatePicker/DatePicker";
import FormInput from "../../Components/FormInput/FormInput";
import MultiSelectDropDown from "../../Components/MultiSelectDropDown/MultiSelectDropDown";
import { addNewGame } from "../../redux/action/collectionAction";
import { useDispatch, useSelector } from "react-redux";

const AddGame = ({ history }) => {
  const dispatch = useDispatch();
  const addedGameInfor = useSelector((state) => state.newGame);
  const { newGame } = addedGameInfor;
  const [errors, setErrors] = useState(false);

  const [directx, setDirectx] = useState("");
  const [vga, setVga] = useState("");
  const [ram, setRam] = useState("");
  const [cpu, setCpu] = useState("");
  const [os, setOs] = useState("");
  const [storge, setStorage] = useState("");

  const [name, setName] = useState("");
  const [stockCount, setStockCount] = useState("");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [releasedate, setReleasDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [storyline, setStoryline] = useState("");

  const [selected, setSelected] = useState([]);
  const valuearray = [];

  useEffect(() => {
    if (newGame) {
      history.push("/dashboard/games");
    }
  }, [newGame]);

  const appendval = () => {
    selected.forEach((e) => {
      valuearray.push(e.value);
    });

    const specArr = [
      `DirectX:${directx}`,
      `OS:${os}`,
      `CPU:${cpu}`,
      `VGA:${vga}`,
      `RAM:${ram}`,
      `Storage:${storge}`,
    ];

    const devAndPubArr = [
      `Developer:${developer}`,
      `Publisher:${publisher}`,
      `Releas Date:${releasedate}`,
      `Price:${price}`,
    ];

    const sendResult = {
      gameName: name,
      price: price,
      category: valuearray,
      systemRequirements: specArr,
      developerInformation: devAndPubArr,
      storyLine: storyline,
      description: description,
      stockCount: stockCount,
      releaseDate: releasedate,
    };

    dispatch(addNewGame(sendResult));
    console.log(sendResult);
  };

  const asd = { preminda: "asdasd" };
  return (
    <div style={{}} className="w-11/12">
      <div
        style={{}}
        className="inline-block w-full p-6 my-16 overflow-hidden text-left align-middle transition-all transform bg-lightviolate shadow-xl rounded-2xl"
      >
        <h3 className="text-3xl  font-medium leading-6 text-center text-white">
          Add New Game
        </h3>
        <form>
          <div className="flex flex-col  justify-between">
            <div className="w-1/2">
              <FormInput
                height={12}
                label="Game Name"
                name="gmeName"
                type="text"
                placeholder="Game Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.username ?? (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            <div className="w-1/2">
              <FormInput
                height={12}
                label="Stock Count"
                name="stockCount"
                type="text"
                placeholder="Stock Count"
                value={stockCount}
                onChange={(e) => setStockCount(e.target.value)}
              />
              {errors.username ?? (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            <div className="w-1/2">
              <FormInput
                height={12}
                label="Price"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors.firstName ?? (
                <p className="text-red-600">{errors.firstName}</p>
              )}
            </div>
          </div>
          <h1 className="text-xl text-white font-body font-medium mt-4">
            Category
          </h1>
          <div className="mt-2 w-80 mb-4">
            <MultiSelectDropDown
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <div className="flex justify-between space-x-4 h-56">
            <div className="w-full h-full">
              <h1 className="text-xl text-white font-body font-medium mt-3">
                Description
              </h1>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none w-full h-36 border rounded-md font-body font-medium"
              />
            </div>
            <div className="w-full">
              <h1 className="text-xl text-white font-body font-medium  mt-3">
                Story Line
              </h1>
              <textarea
                value={storyline}
                onChange={(e) => setStoryline(e.target.value)}
                className="resize-none w-full h-36 border rounded-md font-body font-medium"
              />
            </div>
          </div>
          <h1 className="text-xl text-white font-body font-medium">
            {asd.key}
          </h1>
          <h1 className="text-xl text-white font-body font-medium">
            System Requirements
          </h1>
          <div className="flex w-full space-x-4 justify-between mb-4">
            <div className="w-1/2 pr-14">
              <FormInput
                height={12}
                label="Price"
                type="text"
                name="directX"
                placeholder="DirecetX"
                value={directx}
                onChange={(e) => setDirectx(e.target.value)}
              />
              <FormInput
                height={16}
                label="Price"
                type="text"
                name="vga"
                placeholder="VGA"
                value={vga}
                onChange={(e) => setVga(e.target.value)}
              />
              <FormInput
                height={16}
                label="Price"
                type="text"
                name="ram"
                placeholder="RAM"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </div>
            <div className="w-1/2 pr-14">
              <FormInput
                height={12}
                label="Price"
                type="text"
                name="cpu"
                placeholder="CPU"
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
              />
              <FormInput
                height={16}
                label="Price"
                type="text"
                name="os"
                placeholder="OS"
                value={os}
                onChange={(e) => setOs(e.target.value)}
              />
              <FormInput
                height={16}
                label="Price"
                type="text"
                name="storage"
                placeholder="Storage"
                value={storge}
                onChange={(e) => setStorage(e.target.value)}
              />
            </div>
          </div>
          <h1 className="text-xl text-white font-body font-medium mt-8">
            Developer And Publisher
          </h1>
          <div className="flex space-x-4 justify-between">
            <div className="w-1/2 pr-14">
              <FormInput
                height={10}
                label="Game Name"
                name="username"
                type="text"
                placeholder="Developer"
                value={developer}
                onChange={(e) => setDeveloper(e.target.value)}
              />
              {errors.username ?? (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            <div className="w-1/2 pr-14">
              <FormInput
                height={10}
                label="Price"
                type="text"
                name="firstName"
                placeholder="Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
              {errors.firstName ?? (
                <p className="text-red-600">{errors.firstName}</p>
              )}
            </div>
          </div>
          <h1 className="text-xl text-white font-body font-medium mt-3">
            Release Date
          </h1>
          <div className="">
            <DatePickers startDate={releasedate} setStartDate={setReleasDate} />
          </div>
          <div className="mt-4 flex justify-center ">
            <button
              type="button"
              onClick={() => appendval()}
              className=" px-4 py-2 text-sm font-medium  bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              //type="submit"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGame;
