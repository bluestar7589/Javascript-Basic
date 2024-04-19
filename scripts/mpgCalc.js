/**
 * To get the element with the ID
 * @param {*} id 
 * @returns 
 */
function $(id) {
    return document.getElementById(id);
}

/** 
 * This function runs after all the HTML is loaded
 */
window.onload = function() {
    // When the calculate button is clicked call the processEntry function
    $("calculate").onclick = main;
    resetForm();
    document.getElementById('miles').addEventListener('dblclick', function(event) {
        // This code will run when the textbox is double clicked
        $("miles").value = "";
    });
    document.getElementById('gallons').addEventListener('dblclick', function(event) {
        // This code will run when the textbox is double clicked
        $("gallons").value = "";
    });
}

/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid(){
    //function should validate form entries
    //and return true or false corresponding to validity
    let miles = $("miles");
    let gallons = $("gallons");
    let isValidData = true;
    if(isNaN(miles.value) != false || miles.value < 0 || miles.value == "") {
        let spanMiles = miles.nextSibling;
        spanMiles.textContent = "Input valid number only !!!"
        isValidData = false;
    } 
    if (isNaN(gallons.value) != false || gallons.value < 0 || gallons.value == "") {
        let spanGallons = gallons.nextSibling;
        spanGallons.textContent = "Input valid number only !!!";
        isValidData = false;
    }
    return isValidData;
}

/** 
 * This function should be called when the calculate button is clicked
*/
function main(){
    // clean up the form
    resetForm();
    // check if data is valid
    if(isValid() == true) {
        let miles = $("miles");
        let gallons = $("gallons");
        let mpg = 0;
        // calculate MPG and return value to mpg
        mpg = calculateMPG(miles.value, gallons.value);
        // display results
        displayResults(mpg);
    }
}

/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon String or number containing the miles per gallon
 */
function displayResults(milesPerGallon){
    //display the MPG result in a textbox
    $("mpg").value = milesPerGallon;
}

/**
 * Calculates miles per gallon
 * @param {string|number} milesDrive The number of miles driven
 * @param {string|number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDrive, gallonsUsed){
    //return the MPG as a number
    return (parseFloat(milesDrive)/parseFloat(gallonsUsed)).toFixed(2);
}


/**
 * Function that clears all the value from textboxes inside form
 */
function clearForm() {
    $("miles").value = "";
    $("gallons").value = "";
    $("mpg").value = "";
    // to get focus on miles textbox for new input
    $("miles").focus();
}
/**
 * To reset the span that keep the error message.
 */
function resetForm() {
    let allSpan = document.querySelectorAll("main span");
    for (let i = 0; i < allSpan.length; i++) {
        allSpan[i].textContent = "*";
    }
    $("mpg").value = "";
}