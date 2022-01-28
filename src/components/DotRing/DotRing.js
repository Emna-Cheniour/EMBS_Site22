import React, { useContext } from "react";
import "./DotRing.css";

import { MouseContext } from "../../context/mouse-context";
import useMousePosition from "../../useMousePosition";

const DotRing = () => {
    // 1.
  const { cursorType,  } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <div>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </div>
  );
  };
  export default DotRing;