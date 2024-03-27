function subMit(){
    var oneMath = Number(document.getElementById("space1").value);
    var twoEng = Number(document.getElementById("space2").value);
    var threePhys = Number(document.getElementById("space3").value);
    var fourChem = Number(document.getElementById("space4").value);
    var studentName = document.getElementById("nam").value;
    var displayBox = document.getElementById("comments")

    var allTotal = oneMath + twoEng + threePhys + fourChem;
    var percentage = allTotal / 4;
    // console.log("clicked")
    // document.getElementById("comments").innerHTML = "Dear " + studentName + ", your total score obtained is " + allTotal + " / 400, while your percentage obtained is " + percentage + "%.";

    if (percentage >= 75 && percentage <= 100) {
        displayBox.innerHTML = "Dear " + studentName + ", your total score obtained is " + allTotal + 
        " / 400, while your percentage obtained is " + percentage + 
        "%. You have an Excellent Performance";
        // console.log("show all this")
   } 
    
    else if (percentage >= 61 && percentage <= 74) {
        displayBox.innerHTML = "Dear " + studentName + ", your total score obtained is " + allTotal + 
        " / 400, while your percentage obtained is " + percentage + 
        "%. You have a VERY GOOD performance in this result, but try harder to achieve the best.";
    } 
    
    else if (percentage >= 51 && percentage <= 60) {
        displayBox.innerHTML = "Dear " + studentName + ", your total score obtained is " + allTotal + 
        " / 400, while your percentage obtained is " + percentage + 
        "%. Your performance in this test is GOOD, but your abilities are greater. Strive harder for better results.";
    }

    else if (percentage >= 41 && percentage <= 50) {
        displayBox.innerHTML = "Dear " + studentName + ", your total score obtained is " + allTotal + 
        " / 400, while your percentage obtained is " + percentage + 
        "%. Your performance in this test is less than average, Strive harder for better results.";
    }

    else if (percentage >= 0 && percentage <= 39) {
        displayBox.innerHTML = "Dear " + studentName + ", your total score obtained is " + allTotal + 
        " / 400, while your percentage obtained is " + percentage + 
        "%. Your performance is poor, Strive harder for better grades.";
    }
    
}
