var EventUtil={
  addHandler:function(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);}
        else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{element["on"+type]=handler;}
    }
  ,
  removeHandler:function(element,type,handler){
  if(element.removeEventListener){
        element.removeEventListener(type,handler,false);}
        else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{element["on"+type]=null;}
    }
  ,
  getEvent:function(event){return event?event:window.event;},
  getTarget:function(event){return event.target||event.srcElement;}
  }

var getDoc=document.getElementById("ulList");
var iframe=document.getElementById("iframe");
var showMe=document.getElementById("showRBtn");
var showRight=function(){
  var right=document.getElementById("right");
  if(right.style.display!=="block") {
      right.style.display="block";
      this.style.right="10em";
      console.log("okay");
      }else{
      right.style.display="none";
      this.style.right="1em";
           }
}
showMe.addEventListener("click",showRight,false);


/* EventUtil.addHandler(getDoc,"click",function(event){
  event=EventUtil.getEvent(event);
  var target=EventUtil.getTarget(event);
    
  console.log(target.id);
  
  switch(target.id){ 
      case "indexLi": iframe.src="../index.html" ;break;
      case "momentLi": iframe.src="page/left.html" ;break;
      case "findMLi":  iframe.src="page/right.html";break;
      case "findPLi":  iframe.src="page/right.html";break;
      case "contactLi": iframe.src="page/right.html";break;

  }
});   */


document.getElementById("searchIcon").addEventListener("click",
function(){
  let search=document.getElementById("search");
   if(search.style.visibility!="visible"){    
  search.style.visibility="visible";
  }
  else{
      search.style.visibility="hidden";
  }
 
}
,false);



var getId=function(id){
    return document.getElementById(id);
}
var addEvent=function(obj, event,func){
    if(obj.addEventListener){
        obj.addEventListener(event,func,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+event,func);
    }
}

addEvent(window,"scroll",function(){
    var top=document.getElementById("btn"); //回到顶端
    var scrollHeight=document.body.scrollTop;
    var contentHeight=getId("changeList").offsetHeight-document.getElementById("aside").offsetHeight;
  /*   console.log(getId("changeList").offsetHeight);
    console.log(document.getElementById("aside").offsetHeight); */
   // console.log(scrollHeight);
    

    if(scrollHeight>70 && scrollHeight<contentHeight+10){
        aside.style.position="absolute";
        aside.style.left="0px";
        aside.style.top=scrollHeight-50+"px";
    }else if(scrollHeight<=30){
        aside.style.position="absolute";
        aside.style.left="0px";
        aside.style.top="0px";
    }
    if(document.body.scrollTop>=window.innerHeight){
        top.style.display="block";
    }//显示回到顶端按钮
    else{top.style.display="none";}
    console.log(window.innerHeight);
    console.log(document.body.scrollTop);
});

 //回到顶端
document.getElementById("btn").onclick=function(){
    var timer=null;
    timer=setInterval(function(){
        var backTop=document.body.scrollTop;
        var speedTop=backTop/5;
        document.body.scrollTop=backTop-speedTop;//缓冲
        if(backTop==0){
            clearInterval(timer);
        }
    },30);
  

    //document.getElementById("head").scrollIntoView(false);
    
 }