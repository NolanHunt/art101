/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Nolan Hunt
   Date: May 2024
*/


// adding buttons to each section

// this code was modified with the help of ChatGPT to get the buttons to be properly animated when you click them
$(document).ready(function(){
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
  $("#problems").append("<button id='button-problems'>Make Special</button>");
  $("#results").append("<button id='button-results'>Make Special</button>");
  
  // adding click listeners to each button
  $("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
  });
  
  $("#button-problems").click(function(){
    $("#problems").toggleClass("special");
  });
  
  $("#button-results").click(function(){
    $("#results").toggleClass("special");
  });
});