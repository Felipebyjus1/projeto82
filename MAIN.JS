canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color = "black"
var mouseEvent = ""

function myMouseDown(e){
color = document.getElementById("color").value;
widthLine = document.getElementById("widthLine").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}

function meuMouseUp(e){
   mouseEvent = "mouseUp"
   }
   
   function meuMouseLeave(e){
      mouseEvent = "mouseLeave"
   }

canvas.addEventListener("mousedown",myMouseDown)

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

canvas.addEventListener("mousemove",myMouse)
canvas.addEventListener("mouseup",meuMouseUp)
canvas.addEventListener("mouseleave",meuMouseLeave)

function limpar(e){
   ctx.clearRect(0,0,canvas.width,canvas.height)
}