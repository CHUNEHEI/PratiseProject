var i=1, l=0.2, h=2;
var dun=function (){
 if(i<h){
     i+=l;
     console.log(i);
 }else{ console.log("No more"); }
}
var btn=document.getElementById("btn");
addEventListener("click",dun);