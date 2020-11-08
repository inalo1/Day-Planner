// On clicking the save button, the block converts back
$(".saveBtn").on("click", function() {
    // get the text from the text area
    var text = $(this)
        .siblings(".description")
        .val()
        .trim();
    // get the selected event time
    var selectedHourStr = $(this).siblings(".hour").text();
    // create an object with the event to save
    eventObj = {
        time: selectedHourStr,
        event: text
    };

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(savedEvents));
  };
// Display the current date
displayDay();
// Load saved events
loadSavedEvents(); 