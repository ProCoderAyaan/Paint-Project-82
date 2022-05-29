var mouseevent = "empty";
var last_postion_of_x,last_postion_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line= 1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line");
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_postion_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY-canvas.offsetTop;   
    if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last postion of x and y coordinates = ");
    console.log("x = " + last_postion_of_x +"y = " + last_postion_of_y);
    ctx.moveTo(last_postion_of_x,last_postion_of_y);
    
    console.log("Current postion of x and y coordinates = ");
    console.log("x = " + current_postion_of_mouse_x +"y = " + current_postion_of_mouse_y);
    ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
    ctx.stroke();
    }

    last_postion_of_x =current_postion_of_mouse_x;
    last_postion_of_y =current_postion_of_mouse_y 
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent = "mouseleave";
}
function clearArea(e){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}