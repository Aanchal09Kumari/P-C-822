var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var mouse_Event="empty";
var lastX,lastY;
color="black";
width=3;
radi=5;
line_Width=3;
canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    mouse_Event="mousedown";
    color=document.getElementById("colorChange").value;
    width=document.getElementById("widthChange").value;
    radi=document.getElementById("radiuschange").value;
    line_Width=document.getElementById("line_change").value;

}
canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){
    mouse_Event="mouseup";
}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    mouse_Event="mouseleave";
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouse_Event=="mousedown"){
      console.log("current X =" + currentX , "current Y =" + currentY)
      ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_Width;
    ctx.arc(currentX,currentY,radi,0,2*Math.PI);
    ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }