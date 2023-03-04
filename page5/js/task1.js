/*var AllProducts = document.querySelectorAll(".list1 li")
var div1 = document.querySelector("#content")
 var btn1 = document.querySelector("#btn1")
 var totalPrice = 0;

 AllProducts.forEach( function (item) {
    item.onclick = function () {
        totalPrice +=   parseInt (item.getAttribute ("price")) 
       
        div1.innerHTML += item.textContent + " . "

        if (div1.innerHTML != ""){
            btn1.style.display = "block";
            btn1.style.backgroundColor = "blue"
            btn1.style.color = "white"
        }
    }
 })

 btn1.onclick = function () {
   console.log(totalPrice)
 }*/
 /*
 var container=document.querySelectorAll(".container p");
var div1=document.querySelector("#div1");
var btn=document.querySelector("#btn");
var total=0;

  container.forEach((item) => {
    item.addEventListener("click",()=>{
      total+=parseInt(item.getAttribute("price"))
      
        
      div1.innerHTML+=item.textContent+"/"
      if (div1 !="") {
        btn.style.display="block";
        btn.style.color="white";
        btn.style.backgroundColor="blue";
      } 
    })
     
        })
        
  btn.addEventListener("click",()=>{
    console.log(total);
  })*/
  /*
  var x=prompt("enter the number of team :- ")
  var arr=[];
  
  for (var i = 0; i < x;i++) {
    var y= prompt("enter the name of player :- ");
    arr[i]=y
    
  }
  console.log(arr)
  */

  function loaddata(){
    var x=new XMLHttpRequest();
    x.onreadystatechange=function(){
      if (this.readyState ==  4 && this.status == 200) {
        console.log( this.responseText)
      }
    };
    x.open("GET","file:///C:/Users/mosta/OneDrive/Desktop/web/projects/project%204/page5/page5.html",true)
    x.send()
  }
  /*
  loaddata()*/
  ////////////////////////////open link on new windown///////////////////////////////
/*
  var btn=document.getElementById("btn");

  function x(){
    window.open("https://www.google.com","width:500px","height:500px")
  }

  btn.onclick=x;
  */
  ////////////////////////////open link on new windown///////////////////////////////

  //location.assign("https://www.google.com/")




  ////////////////////////////علشان تعمل رساله من الجمب كدا بس هنا ظاهره من فوق وهتظهر مره واحده فاشطا بقاعادى /////////////////////////////////////
 /* setTimeout(function(){
    alert("صلو على النبي");
  },2000)*/

   ////////////////////////////علشان تعمل رساله من الجمب كدا بس هنا ظاهره من فوق وهتظهر بشكل مستمر  فاشطا بقاعادى /////////////////////////////////////
 /* setInterval(function(){
    alert("صلو على النبي");
  },2000)*/

//////////////////////////////////////////////علشان احسب اى سعر لاى برودكت ///////////////////////////
/*var AllProducts = document.querySelectorAll(".list1 li")
var div1 = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var totalPrice = 0;

 AllProducts.forEach( function (item) {
    item.onclick = function () {
        totalPrice +=   parseInt (item.getAttribute ("price")) 
       
        div1.innerHTML += item.textContent + " . "

        if (div1.innerHTML != ""){
            btn1.style.display = "block";
            btn1.style.backgroundColor = "blue"
            btn1.style.color = "white"
        }
    }
 })

 btn1.onclick = function () {
   console.log(totalPrice)
 }*/