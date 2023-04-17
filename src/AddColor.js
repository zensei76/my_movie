import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = { backgroundColor: color };
  const INITIAL_COLOR_LIST = ["deepskyblue", "orange", "crimson"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);
  return (
    <div>
      <ColorBox />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder='Enter Color'
      />
      {/* Copy colorList and add new color to it */}
      <button
        onClick={() => {
          setColorList([...colorList, color]);
        }}
      >
        {" "}
        Add color{" "}
      </button>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
