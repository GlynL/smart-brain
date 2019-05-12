import React from "react";

const Boxes = ({ boxes }) => {
  const boundingBoxes = boxes.map(box => (
    <div
      className="bounding-box"
      style={{
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol
      }}
    />
  ));
  return boundingBoxes;
};

export default Boxes;
