var ball;
var database;
var position;

function setup(){
    database = firebase.database();
    //console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var bp = database.ref('Ball/Position');
    bp.on("value",readposition,err);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({x:position.x+x,y:position.y+y})
}

function readposition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function err(){
    console.log("error");
}