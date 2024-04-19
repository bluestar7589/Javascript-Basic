function tempConvert() {
    // get element radio to check which function will be applied
    let radFToC = document.getElementById("radFToC");
    if (radFToC.checked == true) { // To convert F to C
        let fdegree = document.getElementById('txtTemp').value;
        if (!isNaN(fdegree)) { // check if input is valid number or not
            let cdegree = (parseFloat(fdegree) - 32) * 5 / 9;
            //alert(fdegree + " Fahrenheit is " + cdegree.toFixed(2) + " Celcius");
            document.getElementById("lblFToC").innerHTML = fdegree + " Fahrenheit is " + cdegree.toFixed(2) + " Celcius";
        } else{
            document.getElementById('txtTemp').value = "";
            alert("Please input the valid number only");
        }
    } else { // To convert C to F
        let cdegree = document.getElementById('txtTemp').value;
        if(!isNaN(cdegree)){ // check if input is valid number or not
            let fdegree = (parseFloat(cdegree) * 9/5) + 32;
            document.getElementById("lblCtoF").innerHTML = cdegree + " Celcius is " + fdegree.toFixed(2) + " Fahrenheit";
        } else {
            document.getElementById('txtTemp').value = "";
            alert("Please input the valid number only");
        }
    }
}
function changeLayout() {
    // get label content for context "Input the temperature in Fahrenheit"
    let lblTempFToC = document.getElementById("lblTempFToC");
    // get label content for context "Input the temperature in Celcius"
    let lblTempCToF = document.getElementById("lblTempCToF");
    // get label content for result convert from F to C
    let lblFToC = document.getElementById("lblFToC");
    // get label content for result convert from C to F
    let lblCToF = document.getElementById("lblCtoF");
    // get the temperature input from user
    let txtTemp = document.getElementById("txtTemp");
    if (lblTempCToF.hidden == true) {
        lblFToC.hidden = true
        lblTempFToC.hidden = true;
        lblCToF.hidden = false;
        lblTempCToF.hidden = false;
    } else {
        lblFToC.hidden = false;
        lblTempFToC.hidden = false;
        lblCToF.hidden = true;
        lblTempCToF.hidden = true;
    }   
    lblFToC.innerHTML = "";
    lblCToF.innerHTML = "";
    txtTemp.value = "";
}