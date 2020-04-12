
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
        case "indexLi": iframe.src="#" ;break;
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

var skip=document.getElementById("skip");
skip.addEventListener('click',function(){
    //document.getElementById("kb").style.display="block";
    //setTimeout(function(){ document.getElementById("kb").style.display="none";},1000)
    document.getElementById("content1_1").scrollIntoView(false);
    //alert("a");
},false);


