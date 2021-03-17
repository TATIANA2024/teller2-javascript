

function myFunction() {  
   var x,y,suma,text;  
   x = document.getElementById("numeroA").value;  
   y = document.getElementById("numeroB").value;  
   if (isNaN(x) || isNaN(y)) {  
     text = "Es necesarios introducir dos números válidos";  
   } else {  
     //si no ponemos parseFloat concatenaría x con y  
     suma=parseFloat(x)+parseFloat(y);  
     text= suma;  
   }  
   document.getElementById("sumando").innerHTML = text;  
 }  