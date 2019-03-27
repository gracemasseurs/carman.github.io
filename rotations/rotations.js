console.log(" rotations is called")

function drawCircle(x,y,r, fillC, strokeC, lineW, fill, stroke){

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true ){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

// function rectangle 
function drawRectangle(x,y,w,h, fillC, strokeC, lineW, fill, stroke){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();

    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }

}

//drawRectangle(300,200,150,250, colArray[0][4], colArray[0][5], 8, true, true);

/* ctx.save();
ctx.translate(300,200);
ctx.rotate(45*Math.PI/180);
drawRectangle(0,0,150,250, colArray[2][4], colArray[2][5], 8, true, true);
ctx.restore(); */ 

for(var i=0; i<360; i+=15){
    ctx.save();
ctx.translate(500,200);
ctx.rotate(i*Math.PI/180);
drawRectangle(0,0,50,500, colArray[0][4], colArray[1][5], 5, true, true);
ctx.restore();

}




