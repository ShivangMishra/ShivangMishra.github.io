import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvas = useRef();
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    props.draw(context);
  });

  return (
    <canvas
      style={{ position: "absolute", zIndex: -1 }}
      ref={canvas}
      height={props.height}
      width={props.width}
    />
  );
}
