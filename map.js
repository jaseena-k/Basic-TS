// map() - double

const arr = [7,8,9,20]
 
function double(x){
    // console.log("Value :",para);
    // console.log("Index :",para2);
    // console.log("item :",para3);
    
    return x*2;
}
const output = arr.map(double);
console.log(output)

// triple

const num = [34,8,2,9]

function triple(y){
    return y*3
}
const outputvalue = num.map(triple);
console.log(outputvalue);

// binary

const nums= [4,8,2,9]

function binary(z){
    return z.toString(2)

}
const value = nums.map(binary);
console.log(value)

// const value = nums.map (function binary(z){
//     return z.toString(2)

// })

// const  value = nums.map((z)=>{
//     return z.toString(2)
// })


// map - array of object

const user = [
    {firstName : "Thanseef", lastName:".PP",age:26},
    {firstName: "Jaseena",lastName:".K",age:23}
]
const names = user.map((x)=>x.firstName + x.lastName);
console.log(names)
