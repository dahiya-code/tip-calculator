function clr() 
         { 
             document.getElementById("amt").value = "" ;
             document.getElementById("service").value = "" ;
             document.getElementById("ppl").value = "" ;
         } 

         function calcTip() 
         { 
             var bill=document.getElementById("amt").value;
             var service=document.getElementById("service").value;
             var ppl=document.getElementById("ppl").value;
             if (amt === "" || service == 0)
              {alert("Please enter values");
    return;}
     if (ppl === "" || ppl <= 1) {
    ppl = 1;
    document.getElementById("here").style.display = "none";} 
  else {
    document.getElementById("here").style.display = "block";}
                  var result=(bill*service)/ppl;
                  result=Math.round(result*100)/100;
                  result=result.toFixed(0);
                  document.getElementById("here").innerHTML=result;
         } 

//         document.getElementById("here").style.display = "none";
// document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calcTip();

};