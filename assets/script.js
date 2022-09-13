const currentHour  = moment();
const currentTime = $("#current-time");
const container = $(".container");
const previousNotes = "";



function createTimeBlock(time, content = ""){

//create time row in the timeblock
const timeRow = $("<div class='row align-items-center time-row'>");
//create the time in the timeblock using 24hour time
const colTime = $("<div class='col-2 d-flex justify-content-center align-items-center time-col-time' id='colTime'>").text(time + ":00");

//create text area input values in time block
const colTextArea = $("<div class='col-8 time-col-textarea'>");
const textArea = $("<textarea cols='60' rows='2' id='inputText'>").val(content);
//create color coded blocks

//create time constants for past present future formating
const timeMoment = moment(time, "H");

currentHour;

//if current time > than time element but < time + 1 -- present
const isPresent = (currentHour > timeMoment) && (currentHour < timeMoment.clone().add(1, 'hours'));
//if time < currentTime -- past
const isPast = timeMoment < currentHour;
//if itme  > currentTime - future
const isFuture = timeMoment > currentHour;

if(isPresent){
    textArea.addClass("present");
} 
if(isPast){
    textArea.addClass("past");
}
if(isFuture){
    textArea.addClass("future")
}
colTextArea.append(textArea);

//load previous notes into page
const exisitingNotes = localStorage.getItem(time);
textArea.val(exisitingNotes);

//create save button in timeblock
const colButton = $("<div class ='col-2 time-col-button'>");

const saveButton = $("<button type='button' class='btn btn-primary save-button'>").text("Save");

colButton.append(saveButton);


//create the timeblock line.
return timeRow.append(colTime, colTextArea, colButton);
}



//create the time function to be prestented in the jumbotron at top of page
$(function(){
    currentTime;
    container;
    
    function startTimer(){      
        setInterval(function(){
            currentTime.text(moment().format("YYYY-MM-DD HH:mm:ss"));
        },1000);
    }
    //when user opens this application
    //they should be presented with the current time
    startTimer();

    //iterate the time blocks for 12 hours from 8am until 10pm in 24 hour time
    for (let index = 8; index < 21; index++){
   
    const timeBlock = createTimeBlock(index,previousNotes);

    container.append(timeBlock);
    }
})

$(document).on('click','.save-button', function(event){
    //when user clicks on save button of a particular timeblock
    //saves the entry to local storage
    const buttonClicked = $(event.target);
    //saves text input
    const textArea = buttonClicked.parent().prev().children();
    //saves column input
    const timeCol = buttonClicked.parent().prev().prev();
    //take the time value of the timeblock
    const time = timeCol.text()
    //remove the :00 from the time to leave a single value
    const hour = time.slice(0,-3);
    //save the value of the text area
    const userInput = textArea.val();

    //key should be the hour of timeblock

    //save to local storage

    localStorage.setItem(hour, userInput);

})




//all previous notes


//when user clicks on save button,


//should get the text written in text area
//save the text saved to local storage (based on row time)





// 





//scenaios
//can the user edit past time blocks?
//yes since this will allow them to plan the next day.



