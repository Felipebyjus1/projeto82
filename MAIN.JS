canvas = 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

function myMouseDown(e){
color = document.getElementById("color").value;
widthLine = document.getElementById("widthLine").value;

radius = document.getElementById("radius").value;
mouseEvent = mouseDown;
}

function myMouse(e){
PositionMouseX = e.clientX - canvas.offsetLeft;
PositionMouseY = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
console.log("Current position of x and y coordinates = ")
console.log("x = " + PositionMouseX + "y = " +PositionMouseY)
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthLine;
ctx.arc(PositionMouseX, PositionMouseY, radius ,0 ,2 * Math.PI)
ctx.stroke()
   }
}