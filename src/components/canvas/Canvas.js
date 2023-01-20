import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvasRef = useRef();
  useEffect(() => {
    props.draw(canvasRef.current);
    canvasRef.current.addEventListener("mousemove", (e) => {
      props.updateMousePosition(e.offsetX, e.offsetY);
    });
  });

  return (
    <canvas
      style={{ position: "absolute", backgroundColor: "#111111" }}
      ref={canvasRef}
      height={props.height}
      width={props.width}
    />
  );
}
