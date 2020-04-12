//<div contentEditable>内容修改属性
//spellcheck 属性拼错会有红色波浪线
//tabIndex 使input聚焦在序号当前元素=“num” =>unknown word
  
/* 本地资源拖放
var imgContainer,msgDiv;
  window.onload=function(){
    msgDiv=document.getElementById("msg");
   imgContainer =document.getElementById("imgContainer");
   
   imgContainer.ondragover=function(e){
     e.preventDefault();
     
   }
   imgContainer.ondrop=function(e){
     e.preventDefault();
     //showObj(e);//会打印事件属性
     //showObj(e.dataTransfer.files);
     //dataTransfer打印事件的dataTransfer属性
     
     var f = e.dataTransfer.files[0];
     var fileReader=new FileReader() ;//读取信息
     fileReader.onload=function(e) { 
      
      showObj(e.target);
      imgContainer.innerHTML="<img id=\"img\" src=\""+fileReader.result+"\">";
      //查看e.target打印的信息，result显示出图片来源地址，因此用result输出
     }
      fileReader.readAsDataURL(f);  //读取URL
       var img=document.getElementById(img);
      
    }
   }
   function showObj(obj){
     var s="";
     for(var k in obj){
        s+=k+":"+obj[k]+"<br/>";
     }
     msgDiv.innerHTML=s;
    }
*/


/*  同页面拖放
    var boxDiv,img1,msgDiv;
   window.onload=function(){
 
  boxDiv1=document.getElementById("box1");
  boxDiv2=document.getElementById("box2");
  msgDiv=document.getElementById("msg");
  img1=document.getElementById("img1");
  //boxDiv.ondragenter=function(e){
    //showObj(e);
  //}
  boxDiv1.ondragover=function(e){  //移动拖放过程中
    //showObj(e);
    e.preventDefault();
    
  }
  boxDiv2.ondragover=function(e){
    //showObj(e);
    e.preventDefault();
    
  }
  img1.ondragstart=function(e){   //开始拖放
    e.dataTransfer.setData("imgId","img1")
  }
  boxDiv1.ondrop=dropImgHandler;
  boxDiv2.ondrop=dropImgHandler;
      function dropImgHandler(e){
    showObj(e.dataTransfer);
    e.preventDefault();
    
    var img=document.getElementById(e.dataTransfer.getData("imgId"));
   e.target.appendChild(img);  //img 

  }
  }
  function showObj(obj){
  var s="";
  for(var k in obj){
    s+=k+":"+obj[k]+"<br/>"
  }
  msgDiv.innerHTML=s;
   }  
*/

/*  使用drawImage（）图像裁剪
  function drawImg(id){
    var canvas=document.getElementById(id);
    var context1=canvas.getContext("2d");
    context1.fillStyle="grey";
    context1.fillRect(0,0,400,400);
  
    var img =new Image();
    img.src="src/night.jpg";
    img.onload=function () {
      drawImage(context1,img);
    }

  }
  function drawImage(context,image){
    //(img,x,y)(img,x,y,w,h)(img,sx,sy,sw,sh,d...)第一二个参数指在图片中的坐标位置,dx,dy指在画布上的位置，
    //dw，dh为裁剪后在画布上的的长宽高，w,h则为裁剪图片的长宽
    context.drawImage(image,0,0,200,200);
    context.drawImage(image,150,10,1220,1220,0,0,450,300);
  }
*/

 //画布的组合图形globalCompositeOperation=type
 //source-atop 被新图层覆盖部分的新图层和未被覆盖的部分的原图层
 //in 只显示重叠部分 out 显示不重叠部分的新图层 over默认新图覆盖原图
 //destination -atop只显示覆盖部分，其他透明（透明是destination）xor重叠部分透明
 function drawImg(id){
  var canvas=document.getElementById(id);
  var context1=canvas.getContext("2d");
  var arrAtr=new Array(
    "source-atop","source-in","source-out",
    "source-over","copy","xor","destination-in","lighter",
    "destination-atop","destination-over","destination-out"
  );
  var i=7;
  context1.fillStyle="blue";
  context1.fillRect(10,10,60,60);
  context1.globalCompositeOperation=arrAtr[i];
  context1.beginPath();
  context1.fillStyle="red";
  context1.arc(60,60,30,Math.PI*2,false);
  context1.fill();
  
}