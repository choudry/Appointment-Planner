import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  
  return ( <div>
    <table>
       { 
        props.object.map(
          (item) => <tr> <Tile object={item} key={`${item[0]}`}/></tr>
        )
       }
       </table>
    </div>
  );
};