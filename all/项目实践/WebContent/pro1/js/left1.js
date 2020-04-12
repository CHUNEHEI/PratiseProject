
window.onload=function loading(){
    var tabList=document.getElementById("tab-content");
    var tabTitle=document.getElementById("tab-title");
    var titleName=tabTitle.getElementsByTagName("li");
    var listName=tabList.getElementsByTagName("div");
    
   
    if(titleName.length!=listName.length){
        return;
    }
    for(var i=0;i<titleName.length;i++){
      titleName[i].id=i;
      titleName[i].onmouseover=function(){
        for(var j=0;j<titleName.length;j ++){
          titleName[j].className=" ";
          listName[j].style.display="none";
         }  
        // this.classList.add("select");
          this.className="select";//this指的是titleName
          listName[this.id].style.display="block"; 
        }
     }
     
   }
 