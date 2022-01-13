var dayNumber, hourNumber, dayCon;
function weOpen (dayNumber, hourNumber){
    businessDay();
    businessHour();
    if(dayCon == true && hourCon == true){
        alert ("We are open");
    }
    else if (dayCon == false || hourCon ==false) {
        alert ("We are closed")
    }
    else{
        alert("Try again with valid hours and day")
    }
}
weOpen();
function businessDay() {
    dayNumber = prompt("Tell me the day number")
    dayNumber = (dayNumber%7)-prompt("Tell me the January 1st day number")
    if (dayNumber >= 1 && dayNumber <= 5){  
        dayCon= true;
    }
    else if (dayNumber == 0 || dayNumber ==6){
        dayCon = false;
    }
    else{
        alert("Day value not valid");
    }
}
function businessHour () {
    hourNumber = prompt("Tell me the hour number")
    if (hourNumber >= 6 && hourNumber <=18 ){  
        hourCon = true;
    }
    else if (hourNumber >= 0 || hourNumber <= 24){
        hourCon =false
    }
    else{
        alert ("Hour value not valid");
    }

}
