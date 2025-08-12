// a = [1,2,4]
//[1,4,16]
//[2,4,8]
// let sqaure= a.map((value)=>{
//     return value + value
// });

// console.log(sqaure.toString()); // Output: [1, 4, 16]

// b= [1, 2, 3, 4, 5, 6];
// let even = b.filter((value) => {
//     return value < 2;
// });
// console.log(b);
// console.log(even); // Output: [2, 4, 6]

// c= [10, 5, 20, 8];
// c.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // Output: 43

// let maxnum =c.reduce((max,current)=>{
//     let maximum = max < current ? current : max;
//     if(maximum > 20) {
//         return maximum;
//     }
  
// })
// console.log(maxnum); // Output: 20

// let letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// let count = letters.reduce((acc, letter)=>{
//     if(acc[letter]) {
//         acc[letter] += 1;
//     } else {
//         acc[letter] = 1;
//     }
//     return acc;
// },)
// console.log(count); 
let a = [1, 2, 4];
    //[1,3,6]
    //[2,4,8]
    // 
   let b =a.map((val,index,og)=>{
    // console.log(val*val);
    console.log(val+index);
   })

   console.log(b); // Output: [1, 3, 6]
   console.log(a); // Output: [1, 3, 6]


   let c = [3,21,45,67,90];
   //[45,67,90]
//    let d = c.filter((val)=>{
//     return val > 100;
//    })
// console.log(d); // Output: [45, 67, 90]

let e = c.filter((val)=>{
    if(val %2 ===0){
        let even = [];
        even.push(val);
        return even;
    }

});
console.log("console even number",e); // Output: [45, 67, 90]

let f = [{name: "Gorakh", age: 2},
{name: "Kharat", age: 24},
{name: "Gorakh1", age: 25},
{name: "Kharat2", age: 26}];
let newAge = f.filter((val)=>{
    // console.log(val.name== "Gorakh");
    let result = val.name === 'Gorakh' || val.name === 'Kharat';
    return result ;
})
// console.log(newAge); 

let g = [1,3,4,5];

let sum = g.reduce((acc,current)=>{
    return acc + current;
},5);
// console.log(sum); // Output: 13
//acc = 0
// current = 1 
//acc = 1
// current = 3
//acc = 4
// current = 4
//acc = 8
// current = 5
//acc = 13
let findresult = g.find((val)=>{
    return val > 3;
});
// console.log(findresult); // Output: 4

const orders = [
    { orderId: 101, customer: "Amit", amount: 4500, status: "delivered", items: 3 },
    { orderId: 102, customer: "Priya", amount: 12000, status: "pending", items: 5 },
    { orderId: 103, customer: "Rahul", amount: 8000, status: "delivered", items: 2 },
    { orderId: 104, customer: "Sneha", amount: 2000, status: "cancelled", items: 1 },
    { orderId: 105, customer: "Karan", amount: 15000, status: "delivered", items: 7 },
  ];
  let onlyCapital = orders.map((val)=>{
    return val.customer.toUpperCase();
  }
  );
  console.log(onlyCapital); 
  const conversionRate = 83;

const ordersInUSD = orders.map(order => ({
  orderId: order.orderId,
  amountUSD: (order.amount / conversionRate).toFixed(2) // keeping 2 decimal places
}));

// console.log(ordersInUSD);
   
   totalRev = orders.reduce((acc, order) => {
    return acc + order.amount;
  }, 0);
    console.log(totalRev); // Output: 40000
    //Find the highest order amount.
let highestOrder = orders.reduce((max, order) => {
    return order.amount > max ? order.amount : max;
  }, 0);
// console.log(highestOrder); // Output: 15000
//
//Count how many orders are delivered, pending, and cancelled (group by status).
// let orderStatusCount = orders.reduce((acc, order) => {
//     acc[order.status] = (acc[order.status] || 0) + 1;
//     return acc;
//   }, {});
// console.log(orderStatusCount); // Output: { delivered: 3, pending: 1

// let t = {
//     a: 1
// };
// let s = { b: 2, c: 3 };


// console.log(Object.assign(t,s));
// console.log(Object.keys(s));
// console.log(Object.values(s));
// console.log(Object.entries(s));

// let obj = {a:1};
// let obj2 =  Object.freeze(obj);
// console.log(obj2);
// obj2.a = 2;
// console.log(obj2)
// let obj3 =  Object.seal(obj);
// console.log(obj3)
// obj.a = 2;
// console.log(obj3)


obj = {
    name:'Gorakh',
    age:25,
    Education:'ME',
}
obj2 = {
    name1:'Gorakh2',
    age1:35,
    Education1:'BE',
}
// obj2.class ="Angualr"
console.log(obj2)
obj3 = {
    a:1,
    b:2
}
// console.log(Object.assign(obj,obj2));
// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2));

// let objFrez = Object.freeze(obj3);
// obj3.b = 3;
// console.log(obj3)

let objseal = Object.seal(obj3)
obj3.b = 3;
console.log(obj3)
Object.isSealed(objseal)
// console.log(obj.Education);
// console.log(obj.newObj.post);
