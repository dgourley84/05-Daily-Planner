



function createTimeBlock(time){
// <div class="row align-items-center time-row">
//  <div class="col-2 d-flex justify-content-center align-items-center time-col-time">9am</div>
//  <div class="col-8 time-col-textarea">
//      <textarea name="" id="" cols="60" rows="2"></textarea>
//  </div>
//  <div class="col-2 time-col-button">                   
//     <button type="button" class="btn btn-primary">Save</button>
//  </div>
// </div>
}

$(function(){
    const currentTime = $("#current-time");
    const container = $(".container");
    
    function startTimer(){      
        setInterval(function(){
            currentTime.text(moment().format("YYYY-MM-DD HH:mm:ss"))
        },1000);
    }
    //when user opens this application
    //they should be presented with the current time
    startTimer();

    //user should be presented with 7am to 7pm time blocks
    //these blocks should be color coded -past present future
    //all previous notes
    const timeBlock = createTimeBlock("9");

    container.appent(timeBlock);








})



//user should be presented with 7am to 7pm time blocks
//these blocks should be color coded -past present future
//all previous notes


//when user clicks on save button,
//should get the text written in text area
//save the text saved to local storage (based on row time)





// 





//scenaios
//can the user edit past time blocks?
//yes since this will allow them to plan the next day.



