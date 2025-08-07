function saveData() {
    event.preventDefault();
    var val1 = document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;
    var val3 = document.getElementById("c1").value;
    console.log(val1, val2, val3);
    let newarry = [val1, val2, val3];
    // alert(val1,val2,val3,"Data saved successfully!");
    localStorage.setItem("numarry", newarry);
}

// exel , powerBI
// sql, phython 
