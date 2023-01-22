import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvasRef = useRef();
  const canvasOffRef = useRef();
  useEffect(() => {
    props.draw(canvasRef.current, canvasOffRef.current);
    canvasRef.current.addEventListener("mousemove", (e) => {
      props.updateMousePosition(e.offsetX, e.offsetY);
    });
  });

  return (
    <>
      <canvas
        style={{ position: "absolute", backgroundColor: "red" }}
        ref={canvasRef}
        height={props.height}
        width={props.width}
      />
      <canvas
        // style={{ position: "absolute", backgroundColor: "#111111" }}
        style={{display:'none'}}
        ref={canvasOffRef}
        height={props.height}
        width={props.width}
      />
    </>
  );
}
