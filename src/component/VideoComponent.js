import React from "react";
import { Player } from "video-react";

export default (props) => {
  return (
    <Player>
      <source src="./asset/phone.mp4" />
    </Player>
  );
};
