/*
function on(){
    var x= document.getElementById("input").value;
    var m= document.getElementById("p")
     try{
        if(x=="") throw "empty";
        if(isNaN(x)) throw "is not a number";
        if(x<5) throw "too low";
        if(x>10) throw "too high";
     }
     catch(err){
             m.innerHTML="ERROR:" +err;
     }
}*/

var a=Number(prompt("enter the first number"));
var b=Number(prompt("enter the second number"));

try{
        if(b==0){
                throw{
                        error:"B is zero"
                }
        }
        else{
                console.log(a/b)
        }
}
catch(e){
        console.log(e.error)
}