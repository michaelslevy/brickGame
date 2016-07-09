var Ball=function(){
 
    //define properties
    var self=this;
    
    self.x = 700;
    self.y = 500;
    self.speed = 1;
    self.radius = 7;
    self.xSpeed = 3;
    self.ySpeed = 3;
    self.xDirection = -1;
    self.yDirection = -1;
    
    //initialize ball
    
    var init=function(){
        
        //add ball to game
        var svgNS = "http://www.w3.org/2000/svg"; 
        var mLine = document.createElementNS(svgNS,"circle"); 
        mLine.setAttributeNS(null,"id","ball");
        mLine.setAttributeNS(null,"r",self.radius);
        mLine.setAttributeNS(null,"cx",self.x);
        mLine.setAttributeNS(null,"cy",self.y);

        document.getElementById("game").appendChild(mLine);
        
    }
    
    init();
    
    //move ball
    
    setInterval(function(){ moveBall() }, 10);

    var moveBall = function(){
          
        //calculate new position
        self.x = self.x+(self.xDirection*self.xSpeed);
        self.y = self.y+(self.yDirection*self.ySpeed);
        
        //collision response
        collisionResponse();
        
        //set new position
        document.getElementById("ball").setAttribute("cx", self.x);
        document.getElementById("ball").setAttribute("cy", self.y);

    }    
  
     var collisionResponse=function(){
         
         //inside boundary
         isInside();
         
         //touching bricks or paddle
         isOutside();
         
     }     
     
     var isInside=function(){
         
         //find boundary dimensions
         var width=parseInt(document.getElementById("boundary").getAttribute('width'));
         var height=parseInt(document.getElementById("boundary").getAttribute('height'));
        
         var x1=parseInt(document.getElementById("boundary").getAttribute('x'));
         var y1=parseInt(document.getElementById("boundary").getAttribute('y'));
         var x2=x1+width;
         var y2=y1+height;
         
         //does ball go past boundary?
         if(self.x <= (x1+self.radius)){
            self.xDirection=self.xDirection * -1;   
         } 
         
         if(self.y <= (y1+self.radius)){
            self.yDirection=self.yDirection * -1;   
         } 
         
         if(self.x >= (x2-self.radius)){
            self.xDirection=self.xDirection * -1;   
         } 
         
         if(self.y >= (y2-self.radius)){
            self.yDirection=self.yDirection * -1;   
         } 

     }
     
     var isOutside=function(){
         
         //get rectangle dimensions
         
          //find boundary dimensions
         var width=parseInt(document.getElementById("paddle").getAttribute('width'));
         var height=parseInt(document.getElementById("paddle").getAttribute('height'));
        
         var x1=parseInt(document.getElementById("paddle").getAttribute('x'));
         var y1=parseInt(document.getElementById("paddle").getAttribute('y'));
         var x2=x1+width;
         var y2=y1+height;
         
         var betweenX=false;
         var betweenY=false;
         //does ball intersect paddle?
         
        if(self.x >= (x1+self.radius) && self.x <= (x2-self.radius) ){
            betweenX=true;
        }    
         
        if(self.y >= y1 && self.y <= y2 ){
            betweenY=true;
        } 
         
       if(betweenX==true &&  betweenY==true ){
           self.xDirection=self.xDirection * -1;   
           self.yDirection=self.yDirection * -1;   
       }   
         
     } 

    
}    