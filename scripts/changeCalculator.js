/**
 * This function is a shorthand way of doing document.getElementById().
 * Instead of coding document.getElementById("quarters"), we could code $("quarters")
 * for example
 * @param {*} id The id of the element to target
 * @returns A target HTML Element
 */
function $(id) {
    return document.getElementById(id);
};

/** 
 * This function runs after all the HTML is loaded
 */
window.onload = function() {
    // When the calculate button is clicked call the processEntry function
    $("calculate").onclick = processEntry;
}

/**
 * This function will get the user input from the HTML
 * and ensure the input is a number between 0 and 99
 * before calling makeChange()
 */
function processEntry() {
    let totalAmount = $("cents").value;
    if(totalAmount >= 0 && totalAmount != "" && !isNaN(totalAmount)) {
        makeChange(totalAmount);
    } else {
        alert("Please enter a valid number(must >= 0)");
        $("cents").value = "";
        $("cents").focus();
        $("quarters").value = "";
        $("dimes").value = "";
        $("nickels").value = "";
        $("pennies").value = "";
    }
}

/**
 * This function will display how many of each coin
 * should be returned given a number of cents
 * @param {*} changeAmount The number of cents
 */
function makeChange(changeAmount) {
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    quarters = parseInt(changeAmount / 25);
    dimes = parseInt(changeAmount % 25 / 10);
    nickels = parseInt(changeAmount % 25 % 10 / 5);
    pennies = parseInt(changeAmount % 5);

    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
    var x = $("myAudio");
    x.play();
    $("cents").focus();
    $("cents").select();
    addPicture();

}
// Add audio for make change button.
var x = document.getElementById("myAudio"); 

function playAudio() { 
  $("myAudio").play(); 
} 
// Add picture when changing the change
function addPicture() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "/pictures/near.jpg");
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "The Near Protocol");
    document.body.appendChild(x);
  }
