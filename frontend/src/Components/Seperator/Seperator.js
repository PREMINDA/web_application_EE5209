import procolor from "../../Config/color";

const Seperator = ({ height = "3px", mt = 6 }) => {
  return (
    <div
      style={{
        height: `${height}`,
        width: "100%",
        background: procolor.specialTextColor,
      }}
      className={`mx-auto mt-${mt}`}
    />
  );
};

export default Seperator;
