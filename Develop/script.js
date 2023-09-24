var saveButton = $(".saveBtn");
var textarea =  $(".description");
var timeslots = $("body").children("div")
var textarea = $("textarea")
var currentime = dayjs().format('h:mm A'); // Format the current time in 12-hour format
var slots =  JSON.parse(localStorage.getItem("task")) || {

  Hour: [],
  dutie: [],
}
console.log(currentime);



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {



  saveButton.on("click", function () {
     
    // code to save the task in the DOM ////////////////////////////////////////
    var classname = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    slots.dutie.push(task);
    slots.Hour.push(classname);

    console.log(slots);

    localStorage.setItem("task", JSON.stringify(slots));
    // localStorage.setItem(classname, JSON.stringify(task));
    console.log(task)

//////////////////////////////////////////////////////////////////
 


  })

  // function renderTask() {
  //   var storedItems = JSON.parse(localStorage.getItem("task"));

    

  //   if (storedItems !== null ) {
  //     console.log("soy falcao");
  //     textarea.text(storedItems.dutie);
  //   }
    
  // }

  function renderTask() {
    var storedItems = JSON.parse(localStorage.getItem("task"));
  
    if (storedItems !== null) {
      for (var i = 0; i < storedItems.Hour.length; i++) {
        var hour = storedItems.Hour[i];
        var duty = storedItems.dutie[i];
  
        // Find the corresponding time slot by its ID
        var timeSlot = $("#" + hour);
  
        if (timeSlot.length > 0) {
          // Set the value of the textarea in this time slot
          timeSlot.find(".description").val(duty);
        }
      }
    }
  }
  renderTask();



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var today = dayjs()
  $("header").children().eq(1).text("Calendar app for scheduling your work day: "+ today.format("MMM D, YYYY"));

});






/// check Jquery syntax
/// check bootsrap documents and intro videos 
/// check this JS
// check dayJS


// 1 once knowing basics of Jquery and DayJS, implement code to render current day and time in the top of the page
///----check out for code in activity 5 form submmitions



// 2 make an approach that will create or delete time slots depending of the time of the day, and also, make it change class names depending of
// the time of the day so we can apply different CSS styling automatic.

// 3 Make an approach that will save the task into the DOM, by doing an eventlistener that uses "THIS", which will create a new object in the DOM
//, it will help to collect info by time slots instead of being one single array.
