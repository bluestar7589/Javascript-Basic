function btnGradeConvertor() {
    let grade = document.getElementById("txtGrade").value;
    if(!isNaN(grade)) {
        if(grade >= 88 & grade <= 100) {
            document.getElementById("lblResult").innerHTML = "A";
        } else if (grade >= 80 & grade <= 87) {
            document.getElementById("lblResult").innerHTML = "B";
        } else if (grade >= 68  & grade <= 79) {
            document.getElementById("lblResult").innerHTML = "C";
        } else if (grade >= 60  & grade <= 67) {
            document.getElementById("lblResult").innerHTML = "D";
        } else if (grade >= 0 & grade <= 59) {
            document.getElementById("lblResult").innerHTML = "F";
        } else {
            document.getElementById("txtGrade").value = "";
            document.getElementById("txtGrade").focus();
            document.getElementById("lblResult").innerHTML = "";
            alert("Invalid number for a grade");
        }
    } else {
        if (grade.length == 1) {
            if(grade == "a" || grade == "A") {
                document.getElementById("lblResult").innerHTML = "Excellent job";
            } else if (grade == "b" || grade == "B") {
                document.getElementById("lblResult").innerHTML = "Good Work";
            } else if (grade == "c" || grade == "C") {
                document.getElementById("lblResult").innerHTML = "You need to put in more effort";
            } else if (grade == "d" || grade == "D") {
                document.getElementById("lblResult").innerHTML = "Uh oh, you should be reading and getting assignments in";
            } else if (grade == "f" || grade == "F") {
                document.getElementById("lblResult").innerHTML = "Please see the instructor";
            } else {
                document.getElementById("txtGrade").value = "";
                document.getElementById("txtGrade").focus();
                document.getElementById("lblResult").innerHTML = "";
                alert("Invalid grade");
            }
        } else {
            document.getElementById("txtGrade").value = "";
            document.getElementById("txtGrade").focus();
            document.getElementById("lblResult").innerHTML = "";
            alert("Invalid grade");
        }
    }
}