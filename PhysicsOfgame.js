var canvasHeight = 700;
var canvasWidth = 1000;
var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[10]);
    }
}
    function RemoveGame(){
        gameCanvas.context.clearRect(0,0,canvasWidth, canvasHeight);
        clearInterval(interval);
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        gameCanvas.canvas.remove();
        fallSpeed = 0;
    }
var player;
    function StartGame(){
        gameCanvas.start();
        player = new createPlayer(10,10);
        gameCanvas.canvas.addEventListener("click", function(evt){
            fallSpeed = 0;
            var mousePos = MouseCordinates(canvas, evt);
            console.log(mousePos.x + "," + mousePos.y);
            x1 = mousePos.x;
            y1 = mousePos.y - rect2.top + 20;
       
        }, false);
        let canvas1 = document.querySelector("canvas");
        rect2 = canvas1.getBoundingClientRect();
        console.log("TOP OF RECTANGLE" + rect2.top)
    }
var width1;
var height1;
var x1;
var y1;
var fallSpeed = 0;      
var interval;


function createPlayer(width, height){
    ctx = gameCanvas.context;
    width1 = width;
    height1 = height;
    ctx.fileStyle = "black";
    ctx.fillRect(x1, y1, width1, height1);
    interval = setInterval(updateCanvas, 20);  


}




function updateCanvas(){
    ctx = gameCanvas.context;
    ctx.clearRect(0,0,canvasWidth, canvasHeight);
    var ground = canvasHeight - height1;
     if(y1 >= ground){
        //hit bottom//
         y1 = ground;
         ctx.fillStyle = "red";
         ctx.fillRect(x1,y1,width1,height1);
         fallSpeed = 0;
     }
    else {
        //draw//
        ctx = gameCanvas.context;
        ctx.fillStyle = "black";
        ctx.fillRect(x1, y1, width1, height1);
        //make fall//
        y1 += fallSpeed;
        fallSpeed += 0.01;
    }}
   
function MouseCordinates(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
