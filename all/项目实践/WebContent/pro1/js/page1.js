var toggle=function (){
   var frame=document.getElementById("frame");
   var right=document.getElementById("right");
   var left=document.getElementById("left");
    switch(this.id){
    case "right": 

    this.style.background="grey";
    this.style.color="white";
    right.style.color="white";
    left.style.background="pink";
    
     frame.src="right.html";console.log("no");
    break;
    case "left": 
    this.style.background="grey";
    this.style.color="white";
    right.style.color="white";
    right.style.background="pink";
    frame.src="left.html";console.log("yes");
    break;
   
}
    
}

 var left=document.getElementById("left");
 var right=document.getElementById("right");
  left.addEventListener("click",toggle,false);
  right.addEventListener("click",toggle,false);