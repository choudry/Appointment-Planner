import React from "react";

export const Tile = ({object}) => {
  const values = Object.values(object);
  return (
    <div className="tile-container">
      
        {values.map((value) => <td>{value}</td>)}
      
    </div>
  );
};