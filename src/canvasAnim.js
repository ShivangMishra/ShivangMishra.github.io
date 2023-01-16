const draw = (ctxt) => {
  const canvas = ctxt.canvas;

  var linearGradient = ctxt.createLinearGradient(0, 0, 0, canvas.height);

  const colorTop = "#1C3942";
  const colorBottom = "#92977D";
  // "#92977D"  "#1B3843"  alt greeens
  linearGradient.addColorStop(1, colorBottom);
  linearGradient.addColorStop(0, colorTop);

  ctxt.fillStyle = linearGradient;
  ctxt.fillRect(0, 0, canvas.width, canvas.height);
};

export default draw;
