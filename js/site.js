//retrieve values from form
//validates retrieve data
//control function
function getValues() {
    let intA = document.getElementById("intA").value;
    let intB = document.getElementById("intB").value;
    let numbers = [];
    let value = []
    //validating input
    intA = parseInt(intA);
    intB = parseInt(intB);

    if (Number.isInteger(intA) && Number.isInteger(intB)) {
        //call generatNumbers to create the list of numbers
        numbers = generatNumbers();
        value = renderValues(numbers, intA, intB);
        displayValues(value);
    } else {
        alert("You must enter in a number");
    }
}

//create list of numbers and determine 
//what numbers are multiples of entered 
//values
//logic function(s)
function generatNumbers() {
    let numbers = [];
    for (i = 1; i <= 100; i++) {
        numbers.push(i);
    }
    return numbers;
}

function renderValues(num, intA, intB) {
    let arrayData = [];
    for (i = 0; i <= num.length - 1; i++) {
        if (num[i] % intA == 0 && num[i] % intB == 0) {
            arrayData.push("FizzBuzz");
        } else {
            if (num[i] % intA == 0) {
                arrayData.push("Fizz");
            } else {
                if (num[i] % intB == 0) {
                    arrayData.push("Buzz");
                } else {
                    arrayData.push(num[i]);
                }
            }
        }
    }
    return arrayData;
}

//display values on UI
//display function
function displayValues(val) {
    let templateRows = "";
    for (i = 0; i <= val.length - 1; i++) {
        let className = "number";
        if (val[i] === "Fizz") {
            className = "fizz";
        } else if (val[i] === "Buss") {
            className = "buzz";
        } else if (val[i] === "FizzBuzz") {
            className = "fizzbuzz"
        } else {
            className = className;
        }

        templateRows += `<tr><td class="${className}">${val[i]}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}