var ball;
var database, ballPosition;
var posFetcher;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"
    ballPosition = database.ref("ball/positions")
    ballPosition.on("value",readPositions,showerror)

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

function showerror(){
console.log("error in writing into database")
}

function readPositions(data){
    posFetcher = data.val()
 console.log(posFetcher.x, posFetcher.y);
 ball.x = posFetcher.x;
 ball.y = posFetcher.y;
}

function writePosition(x,y){
database.ref('ball/positions').set({
    'x':posFetcher.x + x,
    'y':posFetcher.y + y
})
}

