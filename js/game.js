//SET UP BOARD

//ADD BRICKS

//LAUNCH BALL

var ball=new Ball();

//register mouse move
document.getElementById("game").addEventListener("mousemove", movePaddle);

function movePaddle(e){   
    
    //get offset
    var rect = document.getElementById("boundary").getBoundingClientRect();
    var offset=rect.left;
    
    //get mouse X coordinate
    var mouseX =e.clientX-offset;

   document.getElementById("paddle").setAttribute("x",mouseX);
}    