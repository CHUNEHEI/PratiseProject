var prev=document.getElementById("prev");
var next=document.getElementById("next");
var banner=document.getElementById("bannerList");
var container = document.getElementById('container');

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
var newLeft;
function getNav(offset){
   left=window.getComputedStyle(banner)['left'];
   //box.style.top 获取到的是行内样式的top数值，默认为'',parseInt('') = NAN
   //即<元素内>

   newLeft=parseInt(left)+offset;
   banner.style.left=newLeft+'px';
   if(newLeft<-3240){ 
       //当newLeft 小于-1800（数值大于1350），则将left设为0；
      banner.style.left = 0 + 'px'; 
      /* alert("This the last photo");*/}
   if(newLeft>-0){
      banner.style.left = -3240 + 'px';
      /*alert("This the first photo");*/
 }
}
var container=document.getElementById("container")
EventUtil.addHandler(container,"click",function(event){
  var event=EventUtil.getEvent(event);
  var target=EventUtil.getTarget(event);
    switch(target.id){
       case "next": getNav(-1080); break;
       case "prev": getNav(1080); break;
   }

});
//自动轮播

/*
var running=self.setInterval(function(){
 EventUtil.addHandler(next,"click",getNav(-450));
},1500); 


 //要停止定时器，则需要给定时变量，从而clearInterva（参数）为该变量；

container.onmouseover=function(){
    clearInterval(running);
}
container.onmouseout=function(){
    setInterval
} */

  var timer;
function autoPlay() {
    timer = setInterval(function () {
        next.onclick=getNav(-1080);
    }, 3000)
}
autoPlay();
container.onmouseover=function(){
    clearInterval(timer);
}
container.onmouseout=function(){
    autoPlay();
}

//小圆点
var navigator=document.getElementById("navigator");
var buttons = document.getElementsByTagName('span');
    