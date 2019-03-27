console.log("loops js called");

// drawCircle x, y, r, fillC(rgb string), strokeC(rgb string), 
// lineW, fill(boolean), stroke(boolean)
function drawCircle(x, y, r, fillC, strokeC, lineW, fill, stroke){

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true) {
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

for( var i = 0 ; i<7 ; i++){
    drawCircle(400 + 60*i, 200, 20, colArray[0][4], colArray[0][4], 8, true, true);
}

for( var k = 0 ; k<5 ; k++){
    drawCircle(400, 200 + 50*k, 20, colArray[0][4], colArray[0][4], 8, true, true);
}

for( var p = 0 ; p<7 ; p++){
    drawCircle(400 + 60*p, 400, 20, colArray[0][4], colArray[0][4], 8, true, true);
}

for( var c = 0 ; c<5 ; c++){
    drawCircle(760, 200 + 50*c, 20, colArray[0][4], colArray[0][4], 8, true, true);
}

// function line
// function drawLine(x1, y1, x2, y2, strokeC, lineW)

function drawLine(x1, y1, x2, y2, strokeC, lineW){
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = lineW;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

for(var o=0; o < 8; o++){
    drawLine(30, 200+40*o, 300, 400 +40*o, 6, colArray[0][0]);
}
