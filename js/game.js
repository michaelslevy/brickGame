//SET UP BOARD

//ADD BRICKS

//LAUNCH BALL

var ball=new Ball();

//register mouse move
document.getElementById("game").addEventListener("mousemove", movePaddle);

function movePaddle(e){   
    
    //get paddle width
    var paddleWidth=document.getElementById("paddle").getAttribute('width');
    
    //get offset
    var rect = document.getElementById("boundary").getBoundingClientRect();
    var offset=rect.left;
    var max=rect.right-paddleWidth-offset;
    
    
    
    //get mouse X coordinate
    var mouseX =e.clientX;
    var newPosition = mouseX-offset;
    
    console.log(max, newPosition);
    
    if(newPosition<max){
        document.getElementById("paddle").setAttribute("x",newPosition);
    }
}    