console.log(" init js is called")
// basic connection code

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;
// this is an array which in python is called a list
var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)",
    "rgb(204,0,0)", "rgb(255,204,51)", "rgb(51,51,255)", 
    "rgb(255,102,102)", "rgb(255,255,153)", "rgb(0,153,204)"
    ]