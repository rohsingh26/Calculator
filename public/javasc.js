function ope() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("op").value;
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
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
  
    document.getElementById("result").innerText = `Result: ${r}`;
  }
  
