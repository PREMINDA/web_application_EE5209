import React from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "RPG", value: "RPG" },
  { label: "WAR", value: "WAR" },
  { label: "Action", value: "Action" },
  { label: "Adventure", value: "Adventure" },
  { label: "Shooters ", value: "Shooters " },
  { label: "Puzzlers", value: "Puzzlers" },
  { label: "Survival ", value: "Survival " },
  { label: "Horror", value: "Horror" },
  { label: "Pixel", value: "Pixel" },
];

const MultiSelectDropDown = ({ selected, setSelected }) => {
  return (
    <div>
      <MultiSelect
        hasSelectAll={false}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default MultiSelectDropDown;
