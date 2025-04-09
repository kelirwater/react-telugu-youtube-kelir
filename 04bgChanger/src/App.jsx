import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // const generateRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color = color + letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };
  // const randomColors = Array.from({ length: 5 }, () => generateRandomColor());
  const mycolors = {
    "#FF5733": "Red",
    "#33FF57": "Green",
    "#3357FF": "Blue",
    "#FFFF33": "Yellow",
    "#FF33FF": "Magenta",
    "#33FFFF": "Cyan",
    "#000000": "Black",
    "#808000": "Olive",
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {Object.values(mycolors).map((colorName, index) => (
            <button
              key={index}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: colorName }}
              onClick={() => setColor(colorName)}
            >
              {colorName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
