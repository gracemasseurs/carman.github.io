console.log ("main js called")

var myT = new Point(560,300,70,colArray[2][5],false);
var myU = new Point(560,100,70,colArray[1][4],false);
var myW = new Point(200,300,70,colArray[0][3],false);

function animate(){
    ctx.clearRect(0,0,width,height);
    myT.update();
    myU.update();
    myW.update(); 

    window.requestAnimationFrame(animate);

}

animate();