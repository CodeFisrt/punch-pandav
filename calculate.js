function cal(operation) {
    console.log("Button clicked with operation: " + operation);
    let value1 = document.getElementById("number_1").value;
    let value2 = document.getElementById("number_2").value;
    if(operation === '+') {
        console.log("Adding values: " + value1 + " and " + value2);
    } 
    let result = parseInt(value1) + parseInt(value2);
    document.getElementById("showResult").innerHTML = result;
}