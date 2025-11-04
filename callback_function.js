// 1
console.log("start")
setTimeout(function cb(){
    console.log("callback")

},5000)
console.log("end")

// 2

console.log("start")
function cb(){
    console.log("call back")
}
setTimeout(cb,5000)
console.log("ended")