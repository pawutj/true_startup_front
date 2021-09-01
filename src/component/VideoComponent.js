import React, { useEffect, useRef } from "react";
import { Player } from "video-react";

export default ({ src = "" }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    if (inputEl.current) console.log(inputEl.current.load());
  }, [src]);

  return (
    src && (
      <Player ref={inputEl}>
        <source src={src} />
      </Player>
    )
  );
};
