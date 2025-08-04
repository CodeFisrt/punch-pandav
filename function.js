function add(){
var a = 5;
var b = 10;
    document.write("<br>"); // New line after each row
    document.write("Sum of " + a + " and " + b + " is: " + (a + b));
    document.write("<br>"); // New line after each row
    document.write("Difference of " + a + " and " + b + " is: " + (a - b));
    document.write("<br>"); // New line after each row
    document.write("Product of " + a + " and " + b + " is: " + (a * b));
    document.write("<br>"); // New line after each row
    document.write("Quotient of " + a + " and " + b + " is: " + (a / b));
    document.write("<br>"); // New line after each row
    document.write("Remainder of " + a + " and " + b + " is: " + (a % b));
    document.write("<br>"); // New line after each row
    document.write("Exponent of " + a + " raised to " + b + " is: " + Math.pow(a, b));
    document.write("<br>"); // New line after each row
    document.write("Square root of " + a + " is: " + Math.sqrt(a));
    document.write("<br>"); // New line after each row
    document.write("Square root of " + b + " is: " + Math.sqrt(b));
    document.write("<br>"); // New line after each row
    return a + b;
  
}
// add();