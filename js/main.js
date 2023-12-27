const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 50, 40, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.arc(50, 50, 40, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.stroke();

ctx.font = "50px Arial";
ctx.fillText("A", 84, 85);