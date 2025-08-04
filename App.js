// Get elements
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const inputField = document.getElementById("input");
const outputDiv = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");
const resetBtn = document.getElementById("resetBtn");

// Calculator elements
const val1 = document.getElementById("value1");
const val2 = document.getElementById("value2");
const operation = document.getElementById("operation");
const calcOutput = document.getElementById("calculationOutPut");

// Function to convert
function convert() {
    let inputValue = inputField.value.trim();
    let from = fromSelect.value;
    let to = toSelect.value;
    let result = "";

    if (inputValue === "") {
        outputDiv.innerText = "Please enter a value!";
        return;
    }

    try {
        if (from === "Decimal" && to === "Binary") {
            result = parseInt(inputValue, 10).toString(2);
        } else if (from === "Binary" && to === "Decimal") {
            result = parseInt(inputValue, 2).toString(10);
        } else {
            result = inputValue; // Same system
        }
        outputDiv.innerText = `Result: ${result}`;
    } catch (err) {
        outputDiv.innerText = "Invalid Input!";
    }
}

// Live conversion when typing
inputField.addEventListener("input", convert);

// Clear button
clearBtn.addEventListener("click", () => {
    inputField.value = "";
    outputDiv.innerText = "";
});

// Reset button
resetBtn.addEventListener("click", () => {
    inputField.value = "";
    outputDiv.innerText = "";
    fromSelect.value = "Decimal";
    toSelect.value = "Binary";
});

// ================= BINARY CALCULATOR =================
function calculate() {
    let v1 = parseInt(val1.value);
    let v2 = parseInt(val2.value);
    let op = operation.value;
    let result;

    if (isNaN(v1) || isNaN(v2)) {
        calcOutput.innerText = "Enter valid numbers!";
        return;
    }

    switch (op) {
        case "Addition":
            result = v1 + v2;
            break;
        case "Subtraction":
            result = v1 - v2;
            break;
        case "Multiplication":
            result = v1 * v2;
            break;
        case "Devision":
            result = v2 !== 0 ? v1 / v2 : "Cannot divide by 0";
            break;
    }

    // Show result in decimal and binary
    if (!isNaN(result)) {
        calcOutput.innerText = `Decimal: ${result} | Binary: ${result.toString(2)}`;
    } else {
        calcOutput.innerText = result;
    }
}

// Trigger calculation when inputs change
val1.addEventListener("input", calculate);
val2.addEventListener("input", calculate);
operation.addEventListener("change", calculate);
