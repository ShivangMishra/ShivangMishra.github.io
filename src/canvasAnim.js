const colorTop = "#1C3942";
const colorBottom = "#92977D";

const numPoints = 50;
const circleColor = "#fff";
const mdsq = 80 * 80;
const boldColor = "#66FCF1";
const lineColor = "#3d9791";
const DEFAULT_SIZE = 3;
const MAX_SIZE = 20;

const MAX_SPEED_X = 10;
const MAX_SPEED_Y = -10;

const MIN_SPEED_X = -10;
const MIN_SPEED_Y = -20;

const mouseRadius = 50;

let mouseX = -1;
let mouseY = -1;

let canvas = undefined;
const circles = [];

const updateMousePosition = (x, y) => {
  mouseX = x;
  mouseY = y;
  console.log(x + "," + y);
};

const animate = () => {
  const ctxt = canvas.getContext("2d");
  // ctxt.fillStyle = "#222733";
  // ctxt.fillRect(0, 0, canvas.width, canvas.height);
  ctxt.clearRect(0, 0, canvas.width, canvas.height);

  // ctxt.beginPath();
  // ctxt.ellipse(mouseX, mouseY, mouseRadius, mouseRadius, 0, 0, 2 * Math.PI);

  // ctxt.stroke();

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

    circle.x += (circle.speedX * 25) / 1000;
    circle.y += (circle.speedY * 25) / 1000;
    if (circle.x + size < 0) {
      circle.x = canvas.width;
      circle.y = Math.random() * canvas.height;
    }
    if (circle.y + size < 0) {
      circle.y = canvas.height;
      circle.x = Math.random() * canvas.width;
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
  requestAnimationFrame(animate);
};

const draw = (canvasObj) => {
  // canvas = ctxt.canvas;
  canvas = canvasObj;
  const ctxt = canvas.getContext("2d");
  var linearGradient = ctxt.createLinearGradient(0, 0, 0, canvas.height);

  for (let i = 0; i < numPoints; i++) {
    const rangeX = MAX_SPEED_X - MIN_SPEED_X;
    const rangeY = MAX_SPEED_Y - MIN_SPEED_Y;
    const circle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      // color: Math.floor(Math.random() * 16777215).toString(16),
      speedX: Math.random() * rangeX + MIN_SPEED_X,
      speedY: Math.random() * rangeY + MIN_SPEED_Y,
    };
    circles.push(circle);
  }

  // "#92977D"  "#1B3843"  alt greeens
  linearGradient.addColorStop(1, colorBottom);
  linearGradient.addColorStop(0, colorTop);
  ctxt.fillStyle = circleColor;

  // ctxt.fillStyle = "#222733";
  // ctxt.fillRect(0, 0, canvas.width, canvas.height);
  animate();
};

export { updateMousePosition };
export default draw;
