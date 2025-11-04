
const radius = [6,7,8,20,5]
const calculateArea = function(radius){
    const output =[]
    for(i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i])
    }
    return output
}
console.log(calculateArea(radius));