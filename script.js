// // // // const developerName = "Om Saraiya";
// // // // let currentGoal = "Junior Frontend Developer";

// // // // console.log("Welcome to Day 2", developerName);
// // // // console.log("Target Locked:", currentGoal);
// // // // //developerName ="Rahul";

// // // // let studentName = "Om Saraiya";
// // // // let daysComplete = 3;
// // // // let isFocused = true;

// // // // /*function showProgress(name ,days){
// // // //     console.log("Developer: " + name);
// // // //     console.log("Status: " + days + "days completed. Keep going!");
// // // // }

// // // // showProgress(studentName, daysComplete);
// // // // showProgress("Rahul", 10);*/

// // // // /*function checkStatus(name, days, focus) {
// // // //     if (focus === true) {
// // // //         console.log(`Great job ${name}! You have perfectly completed ${days} days.`);
// // // //     } else {
// // // //         console.log(`${name}, you need to remove distractions and focus more.`);
// // // //     }
// // // // }


// // // // checkStatus(studentName, daysComplete, isFocused);

// // // // checkStatus("rahul", 10, false);*/

// // // // let techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// // // // console.log("My Tech Stack list: ", techStack);

// // // // console.log("Pahla Skill: ", techStack[0])

// // // // console.log("---Starting the loop---");

// // // // for (let i = 0; i < techStack.length; i++) {
// // // //     console.log(`Day${i + 1} Target: Master ${techStack[i]}`);
// // // // }

// // // let cartPrices = [299, 1499, 500];

// // // let totalBill = 0;

// // // for (i = 0; i < cartPrices.length; i++) {
// // //     console.log(totalBill = totalBill + cartPrices[i]);
// // // }

// // // if (totalBill > 2000) {
// // //     console.log(`Congrats! You got a 10% discount. Your Total bill is ${totalBill}`);
// // // }
// // // else (console.log(`Please Pay ${totalBill}. Add more items worth ₹2000 for a discount!`));


// // let members = ["Rahul", "Amit", "Pooja", "Vikram"];
// // let daysLeft = [15, 0, 45, 2];

// // for (i = 0; i < members.length; i++) {
// //     if (daysLeft[i] === 0) {
// //         console.log(`Access Denied for ${members[i]}. Membership expired!`);
// //     } else if (daysLeft[i] < 5) {
// //         console.log(`Access Granted for ${members[i]}. Please renew soon,only ${daysLeft[i]} days left`);
// //     } else {
// //         console.log(`Access Granted for ${members[i]}. Have a great workout!`);
// //     }
// // }


// const textElements = document.getElementById("status-text");
// const buttonElement = document.getElementById("activate-btn");

// buttonElement.addEventListener("click", function () {
//     textElements.textContent = "System is Online ->";
//     textElements.style.color = "#4CAF50";
//     buttonElement.textContent = "Activated";
//     buttonElement.disabled = "true";

//     console.log("System successfully activated by Om!");
// });

// const mySkills = ["HTML","CSS","JavaScript","React","Node.js","PostgreSQL"];
// const listContainer = document.getElementById("tech-list");

// for(let i=0;i<mySkills.length;i++){
//     listContainer.innerHTML +=`<li style="margin:5px; font-width:bold;"> ${mySkills[i]}</li>`;
// }
