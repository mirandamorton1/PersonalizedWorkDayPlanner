// var currentDate = moment().format("dddd, MMM Do'")
// var currentHour = moment().format("H");
var today = moment();
    $("#currentDay").text(today.format("dddd MMM Do, YYYY"));
$(document).ready(function() {
    currentDay.text(currentdate);
})
// FUNCTIONALITY FOR SAVING NOTES
// Listen for a button click on the save button
// grab the value from the asssociated text area
// save value to localStorage

// GETTING PREVIOUS SAVED VALUES, AND DISPLAYING ON THE PAGE
// get value (saved note) from local storage
// give the text area the value that we got from localStorage

//FUNCTIONALITY FOR CHANGING BACKGROUND COLOR BASED ON THE TIME OF DAY
// Compare the current time of day with teh time associated with each block - use moment.js
// set up variable equal to the current time of day with the time associated with each block - use moment.js
// loop over the blocks
// compare the blocks time to the current time variable that we set up
// if blocks time < current time variable - change background color to gray

// else if the blocks time is equal to the current hour - change background color to red
// else - set it to green

//DISPLAY THE CURRENT DAY ON THE PAGE

// USE MOMENT TO GRAB THIS DAY/DATE
// FORMAT IT CORRECTLY
// PUT IT ON THE PAGE USING THE PARAGRAPH TAG