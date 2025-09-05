// Initialize AOS animations
// AOS.init({
//     duration: 800,
//     once: true
//   });

// let a = [1, 2, 3, 4];
// console.log(a.length);
// let start = 0;
// let end = a.length - 1;
// while (start < end) {
//   let temp = a[start];
//   a[start] = a[end];
//   a[end] = temp;
//   start++;
//   end--;
// }
// console.log(a);

let students = [
    { name: "Amit", marks: 85 },
    { name: "Sneha", marks: 92 },
    { name: "Rohit", marks: 76 }
];

let highestScorer = students.reduce((topStudent, currentStudent) => {
    return (currentStudent.marks > topStudent.marks) ? currentStudent : topStudent;
}, students[0]);
console.log(`Top Scorer: ${highestScorer.name} with ${highestScorer.marks} marks`);

//prblem 2
let cart = [
    { item: "Shirt", price: 500, qty: 2 },
    { item: "Jeans", price: 1200, qty: 1 },
    { item: "Shoes", price: 2000, qty: 1 }
];
let totalAmount = cart.reduce((total, product) => total + (product.price * product.qty), 0);
console.log(`Total Cart Amount: ₹${totalAmount}`);
//problem 3   
let employees = [
    { name: "Raj", dept: "IT" },
    { name: "Priya", dept: "HR" },
    { name: "Amit", dept: "IT" },
    { name: "Sara", dept: "Finance" }
];
let groupedByDept = employees.reduce((deptGroup, employee) => {
    if (!deptGroup[employee.dept]) {
        deptGroup[employee.dept] = [];
    }
    deptGroup[employee.dept].push(employee.name);
    return deptGroup;
}, {});
console.log(groupedByDept);
//problem 4
let emails = ["a@gmail.com", "b@gmail.com", "a@gmail.com", "c@gmail.com"];
let duplicateEmails = emails.filter((email, index) => emails.indexOf(email) !== index);
// let uniqueEmails = [...new Set(emails)];
console.log("Duplicate Emails:", duplicateEmails);
//problem 5
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];
products.sort((a, b) => a.price - b.price);
console.log("Products sorted by price:", products);
//problem 6
let attendance = [
    { name: "Ravi", present: true },
    { name: "Neha", present: false },
    { name: "Kiran", present: true }
];
let presentStudents = attendance.filter(student => student.present).map(student => student.name);
console.log("Present Students:", presentStudents);
//problem 7
let arr = [1, [2, 3], [4, [5, 6]]];
let flattened = arr.flat(Infinity);
console.log("Flattened Array:", flattened);
//problem 8
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let wordCount = words.reduce((countMap, word) => {
    countMap[word] = (countMap[word] || 0) + 1;
    return countMap;
}, {});
console.log("Word Count:", wordCount);

