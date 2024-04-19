function shapeCalculation(){
    let widthLength = parseFloat(document.getElementById('txtWidth').value);
    let heightLength = parseFloat(document.getElementById('txtLength').value);
    let area = 0;
    let perimeter = 0;

    if (widthLength >= 0 && !isNaN(widthLength) && heightLength >=0 && !isNaN(heightLength)) {
        // to calculate the area
        area = widthLength * heightLength;
        // to calculate the perimeter
        perimeter = (widthLength + heightLength) * 2;
        document.getElementById('lblResultArea').innerHTML = 'The area of rectangle is: ' + area;
        document.getElementById('lblResultPerimeter').innerHTML = 'The perimeter of rectangle is: ' + perimeter;
        //alert('The area of rectangle is: ' + area + ', and the perimeter of rectangle is: ' + perimeter);
        
        // get element to draw the rectangle
        var canvasRectangle = document.getElementById("cvShape");
        canvasRectangle.width = widthLength;
        canvasRectangle.height = heightLength;
        canvasRectangle.style = "border:1px solid black;";
    } else {
        document.getElementById('txtWidth').value = "";
        document.getElementById('txtLength').value = "";
        alert("Please input valid number only !!!")
    }
}
