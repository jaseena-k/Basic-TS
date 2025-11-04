// filter odd values

const arr1 = [7,88,5,4]
function odd(x){
    return x % 2 ;

}
const output = arr1.filter(odd);
console.log(output)

// filter even values

const arr2 = [2,7,6,9,4]
function even(y){
    return y % 2 ===0;
}
const outputvalue = arr2.filter(even)
console.log(outputvalue)

// filter greaterthan values

function greaterThan(y){
    return y > 4;

}
const greatervalue = arr2.filter(greaterThan)
// const  greatervalue = arr2.filter((y)=> y > 4)
console.log(greatervalue)