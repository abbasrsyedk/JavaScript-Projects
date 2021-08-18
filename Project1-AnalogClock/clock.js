//creating a canvas object declared in the html file
var canvas = document.getElementById("canvas");

//context creation
var ctx = canvas.getContext("2d");

//calculating the radius by the height of the clock
var radius = canvas.height/2;

//remapping the canvas
ctx.translate(radius,radius);

//reducing the clock size
radius = radius*0.90;

//calling the function 
drawClock();

//creating the function drawClock()
function drawClock() {
    drawFace(ctx,radius);
    drawNumbers(ctx,radius);
    drawTime(ctx,radius);
}

//the outline and colour of the clock
function drawFace(ctx,radius) {
    var grad;
    //the path begins
    ctx.beginPath();
    //the outline of the clock
    ctx.arc(0,0,radius,0,2*Math.PI);
    //to fill the colour inside the clock
    // ctx.fillStyle  = "black";
    // ctx.fill();
    //creating radial gradient
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    //creating color stops corresponding the inner middle and outer edge
    //needles colours
    grad.addColorStop(0, "#624A5D");
    //inner circle colour
    grad.addColorStop(0,"#7899AC");
    //outer circle colour
    grad.addColorStop(1, "#FF8784");
    //stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    //another path for drawing the center of the clock
    ctx.beginPath();
    ctx.arc(0,0,radius*0.05,0,2*Math.PI);
    ctx.fillStyle  = "black";
    ctx.fill();

}

//creating numbers inside the clock
function drawNumbers(ctx,radius) {
    var angle;
    var num;
    //setting the font size and style
    // put px infront of the font name
    ctx.font = radius*0.15 + "px Gorga Grotesque";
    //set the text alignment to the middle and center of the print position
    ctx.textBaseline = "middle";
    ctx.textAlign="center";
    //calculating the print position
    for(num=1;num<13;num++){
        angle = num * Math.PI / 6;
        ctx.rotate(angle);
        ctx.translate(0,-radius*0.85);
        ctx.rotate(-angle)
        //puts the text on the clock
        //converting the number variable to a string
        ctx.fillText(num.toString(),0,0);
        ctx.rotate(angle);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-angle);

    }
}

// drawTime function - getting the exact time from the Date() method
function drawTime(ctx,radius) {
    
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    //calculate angle of the hour hand and draw its length
    hour = hour%12;
    hour = (hour*Math.PI/6)+
                (minute*Math.PI/(6*60))+
                    (second*Math.PI/(6*60*60));
    drawHand(ctx,hour,radius*0.4,radius*0.05);

    minute = (minute*Math.PI/30)+(second*Math.PI/(30/60));
    drawHand(ctx,minute,radius*0.7,radius*0.04);
    
    second = (second*Math.PI/30);
    drawHand(ctx,second,radius*0.9,radius*0.02);

}

//drawHand function
//drawing the hands based on the values given in the drawTime function.
function drawHand(ctx,position,length,width){

    ctx.beginPath();
    ctx.lineWidth =width;
    //used to return the shape of the caps of the line
    ctx.lineCap = 'round';
    ctx.moveTo(0,0);
    ctx.rotate(position);
    ctx.lineTo(0,-length);
    //used to draw the path
    ctx.stroke();
    ctx.rotate(-position);


}