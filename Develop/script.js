var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");
var saveButtonEl = $('#saveBtn')
var currentDate = moment().format("dddd, MMM Do [at] hh:mm a")
var $thisBlock = $(this).parent();
var userInput = $("textarea");
var todos = [];


//DISPLAY THE CURRENT DAY ON THE PAGE

// USE MOMENT TO GRAB THIS DAY/DATE
// FORMAT IT CORRECTLY
// PUT IT ON THE PAGE USING THE PARAGRAPH TAG
var today = moment();
    $("#currentDay").text(today.format("dddd MMM Do, YYYY [at] hh:mm a"));

//FUNCTIONALITY FOR CHANGING BACKGROUND COLOR BASED ON THE TIME OF DAY
// Compare the current time of day with teh time associated with each block - use moment.js
// set up variable equal to the current time of day with the time associated with each block - use moment.js
// loop over the blocks
// compare the blocks time to the current time variable that we set up
// if blocks time < current time variable - change background color to gray

// else if the blocks time is equal to the current hour - change background color to red
// else - set it to green

$(document).ready(function() {
    $currentDay.text(currentDate);
    var currentHour = moment().hour();
$timeBlocks.each(function () {
    var $thisBlock = $(this);
    var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

    if (thisBlockHr == currentHour) {
    $thisBlock.addClass("present").removeClass("past future");
    }
    if (thisBlockHr < currentHour) {
    $thisBlock.addClass("past").removeClass("present future");
    }
    if (thisBlockHr > currentHour) {
        $thisBlock.addClass("future").removeClass("past present");
    }
    console.log(currentHour)
});

// FUNCTIONALITY FOR SAVING NOTES
// Listen for a button click on the save button
// grab the value from the asssociated text area
// save value to localStorage



$(".saveBtn").on('click', function () {
    var Text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
    // alert("Your event has been saved");
    localStorage.setItem(time, Text)
    console.log(time, Text)
    // localStorage.setItem("userInput", JSON.stringify(userInput));
    // userInput.append;
})

function renderTodos(){
    toDoItems = localStorage.getItem("todos");
    toDoItems = JSON.parse(toDoItems);
    for (var i = 0; i < toDoItems.length; i++) {
        var itemHour = toDoItems[i].hour;
        var itemText = toDoItems[i].text;
        $("data-hour=" + itemHour + "]").children("textarea").val(itemText);
    }
}
function init() {
    var storedTodos = JSON.parse(localStorage.getItem ("todos"));

    if (storedTodos !== null) {
        todos = storedTodos;
    }
    renderTodos();
}

function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));

    storeTodos();
    renderTodos();
}

// // GETTING PREVIOUS SAVED VALUES, AND DISPLAYING ON THE PAGE
// // get value (saved note) from local storage
// // give the text area the value that we got from localStorage}

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
})