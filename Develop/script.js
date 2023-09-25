var saveButton = $(".saveBtn");
var textarea =  $(".description");
var timeslots = $(".container-lg nav")
var slots = JSON.parse(localStorage.getItem("task")) || {

  Hour: [],
  dutie: [],
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished 
// rendering all the elements in the html.
$(document).ready(function () {

  saveButton.on("click", function () {
     
    // code to save the task in the DOM ////////////////////////////////////////
    var classname = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    slots.dutie.push(task);
    slots.Hour.push(classname);

    console.log(slots);

    localStorage.setItem("task", JSON.stringify(slots));
    console.log(task)
  })

  // renders back the info from the DOM, to the corresponding time slot

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
    
  };

  // assings the class name depending of tthe time of the day gotten with dajs  
   function comparetime () {
    timeslots.each(function () {
      var idAttribute = parseInt($(this).attr("id"));
      var xd = parseInt(dayjs().format('H'), 10);
      console.log(idAttribute)
       
       if (idAttribute < xd) {
        $(this).addClass("past")

       } else if (idAttribute > xd ) {

        $(this).addClass("future")

       } else {
        $(this).addClass("present")
       }
    })
   };

comparetime();
  renderTask();

  var today = dayjs()
  $("header").children().eq(1).text("Calendar app for scheduling your work day: "+ today.format("MMM D, YYYY"));

});
