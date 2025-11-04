// find the sum of value with reduce

const num = [6,3,54,78,2]
const output = num.reduce(function(acc,curr){
    acc = acc+curr;
    return acc
},0)
console.log(output)

// max

const maxvalue = num.reduce(function(max,curr){
    if(curr>max){
        max =curr;
    }
    return max;
})
console.log(maxvalue)

