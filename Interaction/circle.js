console.log("circle js called");

class Circle{
    constructor(x,y,r, fillC, strokeC, lineW, fill, stroke){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
        
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
    update(){
        this.draw();

    }
    draw(){
        ctx.beginPath;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
