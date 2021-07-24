// === Get the values from webpage === //
// start or controller function
function getValues(){
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // this step ensures the values entered are converted to integers; decimals are truncated
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers!");
    }   
}

// === Generate numbers from startValue to the endValue === //
// logic function(s)
function generateNumbers(startValue, endValue){
    // numbers generated will go in an array
    let numbers = [];

    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }
    // return the new array full of numbers from startValue to endValue
    return numbers;
}

// === Display the numbers, and mark the evens bold === //
// display or view functions
function displayNumbers(numbers){
    
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        
        let className = "even";
        
        // pull out each individual number each time we loop through the array
        let number = numbers[i];
        
        // generate a new table row that holds that individual number        
        if (number % 2 == 0){
            // if the number is divisible by 2 (if it's even), then keep the class as even
            className = "even";
        } else {
            // if the number is odd, then change the class to odd
            className = "odd";
        }

        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }
    
    document.getElementById("results").innerHTML = templateRows;
}