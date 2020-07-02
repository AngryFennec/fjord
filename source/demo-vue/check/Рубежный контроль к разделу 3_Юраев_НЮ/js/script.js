
function addNumber (number) {
    var input = document.getElementsByTagName("input")[0];
    var val = input.value.replace(" ", "");
    if (val === "0")
        val = "";
    val = val + number + " ";
    input.value = val;
}

function addAction (action) {
    var input = document.getElementsByTagName("input")[0];
    console.log(action.value);
    if (action === "C") {
        input.value = "0 ";
        lastAction = "=";
    } else if (action === "=" & lastAction.value != "=") {
        if (lastAction.value === "+") {
            input.value = getSum(lastValue.value, input.value) + " ";
        } else if (lastAction.value === "-") {
            input.value = getSubtraction(lastValue.value, input.value) + " ";
        } else if (lastAction.value === "*") {
            input.value = getMiltiplication(lastValue.value, input.value) + " ";
        }
        else if (lastAction.value === "/") {
            input.value = getDivision(lastValue.value, input.value) + " ";
        }
        prevAction = "=";
    } else if (action === "+") {
        lastValue.value = input.value;
        lastAction.value = "+";
        input.value = "0 ";
    } else if (action === "-") {
        lastValue.value = input.value;
        lastAction.value = "-";
        input.value = "0 ";
    } else if (action === "*") {
        lastValue.value = input.value;
        lastAction.value = "*";
        input.value = "0 ";
    } else if (action === "/") {
        lastValue.value = input.value;
        lastAction.value = "/";
        input.value = "0 ";
    }
}

function getSum (num1, num2) {
    return +num1 + +num2;
}

function getSubtraction (num1, num2) {
    return num1 - num2;
}

function getMiltiplication(num1, num2) {
    return num1 * num2;
}

function getDivision(num1, num2) {
    return num1 / num2;
}