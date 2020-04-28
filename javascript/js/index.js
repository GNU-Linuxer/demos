'use strict';



function add(a, b){
    return a+b
}

let sum = [1,2,3,4,5,6].reduce(add, 0);
console.log(sum);