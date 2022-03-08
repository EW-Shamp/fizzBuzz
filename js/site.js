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
        value = renderValuesThree(numbers, intA, intB);
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

// beginner way to sovle FizzBuzz
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

// intermediate way to solve FizzBuzz
function renderValuesTwo(num, intA, intB) {
    let arrayData = [];
    for (i = 0; i <= num.length; i++) {

        Fizz = num[i] % intA == 0;
        Buzz = num[i] % intB == 0;       

        switch (true)
        {
            case Fizz && Buzz :{
                arrayData.push("FizzBuzz");
                break;
            }
            case Fizz: {
                arrayData.push("Fizz");
                break;
            }
            case Buzz: {
                arrayData.push("Buzz");
                break;
            }
            default: {
                arrayData.push(num[i]);
                break;
            }
        }
    }
    return arrayData;
}

//expert way to solve FizzBuzz
function renderValuesThree(num, intA, intB) {
    let arrayData = [];
    for (i = 0; i <= num.length; i++) {
        let value = ((num[i] % intA == 0 ? "Fizz" : "") + 
        (num[i] % intB == 0 ? "Buzz" : "") || num[i]);
        arrayData.push(value);
    }
    return arrayData
}

//display values on UI
//display function
function displayValues(val) {
    
    //get table body element
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table
    tableBody.innerHTML = "";

    for (let i = 0; i < val.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);


        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(val[i]);
        rowCols[0].textContent = val[i];

        rowCols[1].classList.add(val[i +1]);
        rowCols[1].textContent = val[i + 1];

        rowCols[2].classList.add(val[i + 2]);        
        rowCols[2].textContent = val[i + 2];

        rowCols[3].classList.add(val[i + 3]);       
        rowCols[3].textContent = val[i + 3];

        rowCols[4].classList.add(val[i + 4]);       
        rowCols[4].textContent = val[i + 4];



        tableBody.appendChild(tableRow);
    }
}