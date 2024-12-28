function ope() {
    // Get the input values
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("op").value;
  
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    // Perform addition
    let r;
    switch (op) {
        case "+":
          r = num1 + num2;
          break;
        case "-":
          r = num1 - num2;
          break;
        case "*":
          r = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            alert("Cannot divide by zero!");
            return;
          }
          r = num1 / num2;
          break;
        default:
          alert("Invalid operation. Please enter +, -, *, or /.");
          return;
      }
  
    // Display the result in the HTML
    document.getElementById("result").innerText = `Result: ${r}`;
  }
  