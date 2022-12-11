var number = 0;

var total = 0;

var operands = [];

var operations = [];

showNumberOnDisplay(number)

function showNumberOnDisplay(number) {
    const currentValue = document.getElementById("display").innerHTML;

    if (currentValue === "") {
        var display = document.getElementById("display").innerHTML = 0;
    } else if (currentValue === "0" || currentValue === "+") {
        var display = document.getElementById("display").innerHTML = number;
    } else {
        var display = document.getElementById("display").innerHTML += number;
    }

}

function clearDisplay() {
    document.getElementById("display").innerHTML = 0;
}

function saveNumberAndAddOperation() {
    if (document.getElementById("display").innerHTML != "+") {
        const currentValue = document.getElementById("display").innerHTML;
        operands.push(parseInt(currentValue));
        operations.push("add");
        document.getElementById("display").innerHTML = "+";
        console.log(operands);
        console.log(operations);
    }
}

function saveNumberAndCalculateTotal() {
    if (document.getElementById("display").innerHTML != "+") {
        const currentValue = document.getElementById("display").innerHTML;
        operands.push(parseInt(currentValue));
        const total = operands.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        console.log(total);
        document.getElementById("display").innerHTML = total;
    }
}

const num7 = document.getElementById("num7");
num7.addEventListener("click", () => showNumberOnDisplay(7))
const num8 = document.getElementById("num8");
num8.addEventListener("click", () => showNumberOnDisplay(8))
const num9 = document.getElementById("num9");
num9.addEventListener("click", () => showNumberOnDisplay(9))
const num4 = document.getElementById("num4");
num4.addEventListener("click", () => showNumberOnDisplay(4))
const num5 = document.getElementById("num5");
num5.addEventListener("click", () => showNumberOnDisplay(5))
const num6 = document.getElementById("num6");
num6.addEventListener("click", () => showNumberOnDisplay(6))
const num1 = document.getElementById("num1");
num1.addEventListener("click", () => showNumberOnDisplay(1))
const num2 = document.getElementById("num2");
num2.addEventListener("click", () => showNumberOnDisplay(2))
const num3 = document.getElementById("num3");
num3.addEventListener("click", () => showNumberOnDisplay(3))
const num0 = document.getElementById("num0");
num0.addEventListener("click", () => showNumberOnDisplay(0))
const erase = document.getElementById("erase");
erase.addEventListener("click", () => clearDisplay())
const plus = document.getElementById("plus");
plus.addEventListener("click", () => saveNumberAndAddOperation());
const equal = document.getElementById("equal");
equal.addEventListener("click", () => saveNumberAndCalculateTotal());