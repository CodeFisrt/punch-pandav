// localStorage.setItem('empid', '12345');
// localStorage.setItem('empname', 'Gorakh Kharat');
// localStorage.setItem('empdept', 'Engineering');
// var empid = localStorage.getItem('empid');
// var empname = localStorage.getItem('empname');
// var empdept = localStorage.getItem('empdept');
// document.write("Employee ID: " + empid + "<br>");
// document.write("Employee Name: " + empname + "<br>");
// document.write("Employee Department: " + empdept + "<br>");
// localStorage.removeItem('empdept');

 function saveValue(){
    // event.preventDefault(); // Prevent form submission
    var username = document.getElementById("uname").value;
    localStorage.setItem("StdName", username);
    // console.log("Value saved:", username);
    // alert("Value saved! function called.", username);
}
function showValue() {
    var stdName = localStorage.getItem("StdName");
    document.write("Stored Value: " + stdName + "<br>");
}
document.getElementById("uname").addEventListener("input", function(e) {
    console.log("Input event triggered!");
    console.log(e.type);
});
window.addEventListener("resize", function(pr) {
    console.log("Page is resized!");
    console.log(pr.currentTarget.innerHeight);
    // You can access the event object here if needed
});