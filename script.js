
var lengthButtonOne =  document.querySelectorAll(".one").length;


for (var i =0 ; i<lengthButtonOne ; i++){

  document.querySelectorAll(".one")[i].addEventListener("click", function(){
    var size = document.querySelector(".result2").innerHTML.length;

  if(size < 13)
  document.querySelector(".result2").innerHTML += this.innerHTML;


});




};

//---------------------RESET click

document.querySelector(".reset").addEventListener("click", function() {

  document.querySelector(".result2").innerHTML = null ;
  document.querySelector(".result1").innerHTML = null ;


})


//-----------------CLEAR click

document.querySelector(".clear").addEventListener("click", function() {

var size = document.querySelector(".result2").innerHTML.length;

document.querySelector(".result2").innerHTML =  document.querySelector(".result2").innerHTML.slice(0, (size -1)) ;


})

//---------------------PLUS MINUS click

document.querySelector(".plusMinus").addEventListener("click", function() {

  var size = document.querySelector(".result2").innerHTML.length;


if(document.querySelector(".result2").innerHTML[0]=== null)
document.querySelector(".result2").innerHTML = "-" +  document.querySelector(".result2").innerHTML ;
else if (document.querySelector(".result2").innerHTML[0] === "-") document.querySelector(".result2").innerHTML[0] = '0'; //document.querySelector(".result2").innerHTML.slice(1,size -1);

})


//--------------------------action after oparation sign



for(var i=0; i< document.querySelectorAll(".org").length ; i++){
document.querySelectorAll(".org")[i].addEventListener("click", function(event) {

document.querySelector(".result1").innerHTML = document.querySelector(".result2").innerHTML + " " + this.innerHTML ;
document.querySelector(".result2").innerHTML = null;


});


 }
