'use strict';

let theirName = getName();

function getName(){
    const userName = prompt("What is your name?");
    console.log(userName);
    return userName;
}

console.log(theirName);

function greetUser(){
    if(theirName == ""){
      theirName = prompt("Please let me know what to call you?");
      console.log(theirName);
    }
    if (theirName == "Kassie"){
        document.write("Hi Teach, welcome to my Page!");
    } else{
        document.write("Hi " + theirName + ", welcome to my Page!");
    }
    alert("Please vote for your favorite project.");
}

const table = ['Table', "table", 'Board Game Table', "board game table", "boardgame table", "BoardGame Table", "Boardgame table"];
const cabinet = ['Medicine Cabinet', 'Cabinet', 'cabinet', 'medicine cabinet'];
const cStation = ['Chargiing Staiton','charging station', 'charger'];
const seat = ['Window seat', 'window seat', 'Window seat', 'seat', 'window'];
const backyard = ['Patio Cover', 'backyard', 'Backyard', 'Patio cover', 'patio cover', 'garden box', 'Patio Cover and Garden Box', 'Garden Box', 'Patio cover and garden box'];

// Function Declaration
function projectVote() {
      const vote = prompt("What is your favorite project? Use the project name with capitals.");
      console.log(vote);  //log vote in console
      if (table.includes(vote)) {
        document.write("Thanks, I am very proud of that one.");
      } else if(cabinet.includes(vote)) {
        document.write("Gotta look good in the mirror");
      } else if (cStation.includes(vote)){
        document.write("Organization is very important");
      } else if(seat.includes(vote)){
        document.write("That improved my living room so much");
      }else if(backyard.includes(vote)){
        document.write("It makes the outside that much more enjoyable.");
      }
      else if(vote ==""){
        prompt("Your vote is important");
      }
        else{
    document.write("Thanks for your vote");
    }
}