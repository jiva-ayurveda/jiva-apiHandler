import React from "react";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";

export default function TouchRippleEffect({ style, children }) {
  const rippleRef = React.useRef(null);

  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };

  return (
    <div
      style={{ position: "relative" }}
      className={style}
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
    >
      {children}
      <TouchRipple ref={rippleRef} />
    </div>
  );
}
