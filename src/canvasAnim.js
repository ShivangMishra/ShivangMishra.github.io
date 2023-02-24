let curTime = 0;
let prevTime = 0;
let numPoints = 0;
const circleColor = "#fff";
const mdsq = 100 * 100;
const bgColor = "#020A13";
const boldColor = "#66FCF1";
const lineColor = "#3E3E3E";
const DEFAULT_SIZE = 3;
const MAX_SIZE = 20;

const MIN_SPEED_X = -100;
const MAX_SPEED_X = 100;

const MIN_SPEED_Y = -200;
const MAX_SPEED_Y = -100;

const mouseRadius = 50;

let mouseX = -1;
let mouseY = -1;

let canvasMain = undefined;
let ctxtMain = undefined;
let ctxt = undefined;
let canvasOff = undefined;
const circles = [];

const updateMousePosition = (x, y) => {
  mouseX = x;
  mouseY = y;
};

const animate = (timestamp) => {
  curTime = timestamp;
  const dt = (curTime - prevTime)/1000;
  prevTime = curTime;
  ctxt.fillStyle=bgColor;
  ctxt.fillRect(0, 0, canvasOff.width, canvasOff.height);
  ctxt.beginPath();
  let boldCircles = [];
  let lines = [];
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    for (let j = i + 1; j < circles.length; j++) {
      const c2 = circles[j];
      const dsq = Math.pow(c2.x - circle.x, 2) + Math.pow(c2.y - circle.y, 2);
      if (dsq < mdsq) {
        lines.push({
          p1: { x: circle.x, y: circle.y },
          p2: { x: c2.x, y: c2.y },
        });
      }
    }
    const distFromMouseSq =
      Math.pow(circle.x - mouseX, 2) + Math.pow(circle.y - mouseY, 2);
    let size = DEFAULT_SIZE;
    ctxt.fillStyle = circleColor;

    if (distFromMouseSq <= 4 * mouseRadius * mouseRadius) {
      boldCircles.push({ circle: circle, dist: Math.sqrt(distFromMouseSq) });
    } else {
      ctxt.moveTo(circle.x, circle.y);
      ctxt.ellipse(circle.x, circle.y, size, size, 0, 0, 2 * Math.PI);
    } 
    // console.log(dt);

    circle.x += circle.speedX * dt;
    circle.y += circle.speedY * dt;
    if (circle.x + size < 0) {
      circle.x = canvasOff.width;
      circle.y = Math.random() * canvasOff.height;
    }
    if (circle.y + size < 0) {
      circle.y = canvasOff.height;
      circle.x = Math.random() * canvasOff.width;
    }
  }
  ctxt.fill();

  ctxt.beginPath();
  ctxt.strokeStyle = lineColor;
  lines.forEach((line) => {
    ctxt.moveTo(line.p1.x, line.p1.y);
    ctxt.lineTo(line.p2.x, line.p2.y);
  });
  ctxt.stroke();

  ctxt.beginPath();
  ctxt.fillStyle = boldColor;
  boldCircles.forEach(({ circle, dist }) => {
    let size = (MAX_SIZE * mouseRadius) / dist;
    if (size > MAX_SIZE) size = MAX_SIZE;
    ctxt.moveTo(circle.x, circle.y);
    ctxt.ellipse(circle.x, circle.y, size, size, 0, 0, 2 * Math.PI);
  });
  ctxt.fill();
  ctxtMain.drawImage(canvasOff, 0, 0);
  requestAnimationFrame(animate);
};

const draw = (canvas, offscreenCanvas) => {
  // canvasOff = ctxt.canvasOff;
  // canvas.offscreenCanvas = document.createElement("canvas");
  numPoints = canvas.width * 0.09;
  canvasMain = canvas;
  canvasOff = offscreenCanvas;

  for (let i = 0; i < numPoints; i++) {
    const rangeX = MAX_SPEED_X - MIN_SPEED_X;
    const rangeY = MAX_SPEED_Y - MIN_SPEED_Y;
    const circle = {
      x: Math.random() * canvasOff.width,
      y: Math.random() * canvasOff.height,
      // color: Math.floor(Math.random() * 16777215).toString(16),
      speedX: Math.random() * rangeX + MIN_SPEED_X,
      speedY: Math.random() * rangeY + MIN_SPEED_Y,
    };
    circles.push(circle);
  }
  ctxt = canvasOff.getContext("2d", { alpha: false });
  ctxtMain = canvasMain.getContext("2d", { alpha: false });
  ctxt.fillStyle = circleColor;
  curTime = performance.now();
  prevTime = curTime;
  animate(curTime);
};

export { updateMousePosition };
export default draw;
