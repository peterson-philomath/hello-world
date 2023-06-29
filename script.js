'use strict';

let theirName = getName();
const projects = 7;
let projectRequested = 0;
let pictures = ["boardgamesection.jpg", "Boardgametop.jpg", "Boardgametable.jpg", "ChargeStation.jpg", "MedicineCabinet.jpg", "PatioCover.jpg", "WindowSeat.jpg"];

function getName(){
    const userName = prompt("What is your name?");
    return userName;
}

console.log(theirName);

function greetUser(){
    while(theirName == ""){
      theirName = prompt("Please let me know what to call you?");
      console.log(theirName.toLowerCase());
    }
    if (theirName.toLowerCase() == "kassie"){
        document.write("Hi Teach, welcome to my Page!");
    } else{
        document.write("Hi " + theirName + ", welcome to my Page!");
    }
}

function projectRequest(){
    projectRequested = prompt("How many celebrations would you like to see? Between 1-7");
    console.log(projectRequested);
    while( projectRequested > projects || projectRequested <= 0){
        projectRequested = prompt("Try Again. How many celebrations would you like to see? Between 1-7");
    }
    for (let i = 0; i < projectRequested; i++){
        document.write("Number " + i + "<img src='celebration-will-smith.gif' />");
    }
    
}

// for( i = 0, i < projectsRequested; i++){
//     document.write(pictures[i]);
// }


const table = ["table", "board game table", "boardgame table"];
const cabinet = ['cabinet', 'medicine cabinet'];
const cStation = ['charging station', 'charger'];
const seat = ['window seat','seat', 'window'];
const backyard = ['backyard', 'patio cover', 'garden box', 'patio cover and garden box'];




// Function Declaration
function projectVote() {
      let vote = prompt("What is your favorite project? Use the project name with capitals.");
      console.log(vote);  //log vote in console
      while(vote==""){
        vote = prompt("Your vote is important, Pick your favorite.");
      }
      if (table.includes(vote.toLowerCase)) {
        document.write("Thanks, I am very proud of that one.");
        projectRequest();
      } else if(cabinet.includes(vote.toLowerCase)) {
        document.write("Gotta look good in the mirror");
        projectRequest();
      } else if (cStation.includes(vote.toLowerCase)){
        document.write("Organization is very important");
        projectRequest();
      } else if(seat.includes(vote.toLowerCase)){
        document.write("That improved my living room so much");
        projectRequest();
      }else if(backyard.includes(vote.toLowerCase)){
        document.write("It makes the outside that much more enjoyable.");
        projectRequest();
      } else{
        document.write("Thanks for your vote");
        projectRequest();
    }
}

      