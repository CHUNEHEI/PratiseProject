
var xmlhttp=false;
try{
xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
alert("aa");
}catch(e){
  try{
    xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
    alert("b");
  }
  catch(E){xmlhttp=false;}
}
if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
  xmlhttp=new XMLHttpRequest();
  alert("cc");
}
/* if(window.ActiveXObject){
 xmlhttp=new ActiveXObject("MircoSoft.XMLHTTP");
}else{
xmlhttp=new XMLHttpRequest();
} */

function targetPage(servePage,objId){
    var obj=document.getElementById(objId);
    xmlhttp.open("GET",servePage);
    xmlhttp.onreadystatechange=function(){
     if(xmlhttp.readyState==4 && xmlhttp.status===200){
       obj.innerHTML=xmlhttp.responseText;
     }
    }
    xmlhttp.send(null);
}
