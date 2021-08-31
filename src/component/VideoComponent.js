import React from "react";
import { Player } from "video-react";

export default ({ src = "" }) => {
  return (
    src && (
      <Player>
        <source src="./asset/phone.mp4" />
      </Player>
    )
  );
};
