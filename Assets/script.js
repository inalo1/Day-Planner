// Current Date
let today = moment().format("MMMM Do YYYY");

$("#currentDay").text(today)

console.log(today);


const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a for loop to iterate through the timeList and timeId array and appends the data 
for (let i = 0; i < timeList.length; i++) {
    let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    let createTime = $("<div class='hour col-1'>")


    // creating textarea
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", timeList[i]);

    // creating buttons
    let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    // appending created row to the container
    createContainer.append(createRow);
    // creating timeList and appends rows 1-8 starting from (9am and ending at 5pm)
    createTime.text(timeList[i]);
    createRow.append(createTime);

    // creating textarea for user's input
    // createTextarea.text();
    createRow.append(createTextarea);

    // creating buttons from 7am to 5pm
    createButton.text();
    createRow.append(createButton);
}

    // calling localStorage Function
    localStorageFunction();

// storing the data from the textarea into localStorage
function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

// saving stored data entered in the textarea
$("button").on("click", function (event) {
    event.preventDefault();

    for (let index = 0; index < numbers.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

// colored teaxtarea based on the timeline where the colors 1-3 are defined as the following:-
// 1. grey = past the hour
// 2. red = current hour
// 3. green = future hours
function updateByTheHour() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//this calls the function updateByTheHour
updateByTheHour();
