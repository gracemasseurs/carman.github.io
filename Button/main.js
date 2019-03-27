console.log ("main js called")

var myRectangle = new Rectangle(200,30, 200, 300, colArray[2][1], colArray[1][3], colArray[2][4]);

function animate(){
    ctx.clearRect(0,0,width,height);
    myRectangle.update();

    window.requestAnimationFrame(animate);

}

animate();