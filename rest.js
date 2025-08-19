// let arry = [1,3,5,6,7];
// let [a,b,c,d,e]= arry;
// console.log(e)
// let {a,b}={a:1,b:5}
// console.log(a)

// spred oprator
// let a = [2,5,6];
// let obj = {...a}
// console.log(obj);

// function sum(x,y,z){
//     return x+y+z
// }
// console.log(sum(...a))

// function add(...number){
//     return number.reduce((total,num)=>total+num);
//  }

//  console.log( add(2,3,8,9,6,7,8))

// let arr = ['a', 'b', 'a', 'c', 'b', 'a'];

// let occ = {};
// for (let i = 0; i < arr.length; i++) {
  
//     if (occ[arr[i]]) {
  
//         occ[arr[i]]++; 
//     } else {
//         occ[arr[i]] = 1; 
//     }
// }

// console.log(occ); // { a: 3, b: 2, c: 1 }

// let arr = ['a', 'b', 'a', 'c', 'b', 'a'];

// let occurrence = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
// }, {});

// console.log(occurrence); // { a: 3, b: 2, c: 1 }
// let a = [1,2,3,4]
// let [b,c,d,e] = a
// console.log(e);

// let obj = {a:1,b:2};
// let {a,b} = obj;

// console.log(a)

let a = [2,4];
let b = [6,7,0];

//spred 
let result = [...a,...b]

//rest
function add(... num){
    return num.reduce((acc,cr)=>acc+cr)
}
console.log(add(4,5,6,7,3))