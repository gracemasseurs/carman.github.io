console.log('function js called');

// function circle
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
function drawRectangle(x,y,w,h, fill, stroke, lineW, fillC, strokeC){
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

// function line
function drawLine(x1, y1, x2, y2, strokeC, lineW){
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = lineW;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// draw rectangle
drawRectangle(200,300, 30,40, colArray[1], colArray[5], 6, true, false);
drawRectangle(400,300, 40,40, colArray[2], colArray[7], 6, true, true);
drawRectangle(600,300, 50,40, colArray[1], colArray[3], 6, false, true);

// draw line
drawLine(100, 100, 400, 50, 5, colArray[6], 6);
drawLine(300, 100, 200, 200, 8, colArray[6], 8);

// draw cricle
drawCircle(400,450, 60,colArray[6], colArray[2], 6, false, true);
drawCircle(255,450, 60,colArray[6], colArray[2], 6, true, false);
drawCircle(550,450, 60,colArray[6], colArray[2], 6, true, true);

// creating rectangle cross
drawRectangle(300, 50, 200,200, colArray[7], colArray[8], 3, true, true);
drawLine(300, 250, 500, 50, 0.5, colArray[2] );
drawLine(300, 50, 500, 250, 0.5, colArray[8] );

function writeText(m, x,y, col){
    ctx.fillStyle=col;
    var myFont= "bold 30px sans-serif";
    ctx.font=myFont;
    ctx.fillText(m, x,y);
}