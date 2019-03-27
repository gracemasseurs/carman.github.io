console.log("rectangle js called");

class rectangle{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
    }
    update(){

    }
    draw(){
        ctx.beginPath;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}