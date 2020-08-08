window.onload=function start () {
	
    var canvas=document.querySelector("canvas");   
    
    var c =canvas.getContext("2d");
    
    
    canvas.addEventListener("click",reload);
    
    
    var colAr=["#f77404","#f2da78","#95c9f7","#d8eae7"];
    var friction = 0.9;
    var grawity = 0.1;
    var ballTotal = 50;
    var yW = 1;
    
    
    
    
    function Balls(x,y,radius,xW,yW,colAr)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.xW=xW;
        this.yW=yW;
        this.color=colAr[Math.floor(Math.random()*colAr.length)];
        
        this.draw = function ()
        {
            c.beginPath();
            c.arc(this.x,this.y,this.radius,Math.PI*2,false);
            c.fillStyle=this.color;
            c.fill();
            c.stroke();
        
        if(this.x>canvas.width-this.radius||this.x<0+this.radius)
           {
                this.xW=-this.xW;
           }
        if(this.y>canvas.height-this.radius-this.yW-0.5)
            {
               this.yW=-this.yW*friction; 
            }
        else
            {
                this.yW+=grawity;
            }
        this.x+=this.xW;
        this.y+=this.yW;
            
        }
        
        
        
        
    }
    
    
    var ballArr=[];
    
    function reload()
    {
       ballArr=[]; 
    for(var i=0;i<ballTotal;i++)
        {
            var radius = Math.random()*10+5;
            var xW = (Math.random()-0.5);
            var x =Math.random()*(canvas.width-radius*2)+radius;
            var y = Math.random()*60+20;
           
            
            ballArr.push(new Balls(x,y,radius,xW,yW,colAr));
            
        }
    }
    
    reload();
    
    function anim()
    {
        c.clearRect(0,0,canvas.width,canvas.height);
        requestAnimationFrame(anim);
        
        for(var i=0;i<ballArr.length;i++)
            {
                ballArr[i].draw();
            }
        
        
    }

    anim();

}
