// index.js - purpose and description here
// Author: Nolan Hunt (noahunt@ucsc.edu)
// Date: 29 April
// Constants
// Functions
myTransport = ["car", "Toyota Camry", "spaceship", "interdimensional-robo-boots", "walking"];

// Comments are fun. Main ride object
myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "silver",
  year: 2021,
  age: function() {
    return 2024 - this.year;
  }
}
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
