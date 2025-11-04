// function statement and function declaration
function a(){
    console.log("called a")
}
a();

// function expression

var b = function(){
    console.lo("called b")
}
b();

// Anonymous function (it is only used with function expression because name is required for function statement)

// function (){

// }

// Named function expression

var c= function xy(){
    console.log("c called")
 }
 c();

//  different between argument and parameter

function d(param1,parm2){ 
    console.log("called c")

}
d(1,7); 

// first class function
 
var x = function(param1){
    console.log(param1)
}
function y(){

}
b(y);