const developerName = "Om Saraiya";
let currentGoal = "Junior Frontend Developer";

console.log("Welcome to Day 2", developerName);
console.log("Target Locked:", currentGoal);
//developerName ="Rahul";

let studentName = "Om Saraiya";
let daysComplete = 3;
let isFocused = true;

/*function showProgress(name ,days){
    console.log("Developer: " + name);
    console.log("Status: " + days + "days completed. Keep going!");
}

showProgress(studentName, daysComplete);
showProgress("Rahul", 10);*/

function checkStatus(name, days, focus) {
    if (focus === true) {
        console.log(`Great job ${name}! You have perfectly completed ${days} days.`);
    } else {
        console.log(`${name}, you need to remove distractions and focus more.`);
    }
}


checkStatus(studentName, daysComplete, isFocused);

checkStatus("rahul", 10, false);