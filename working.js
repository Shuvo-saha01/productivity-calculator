let intervels = $(".intervels");
let reset = $(".reset");
let clock = $(".clock");
let countdown = $(".countdown");
let min = $(".minutes");
let sec = $(".seconds");

///////////////////////////////////////// declaration

intervels.on("click", function () {
    hide(intervels);
    appear(reset);
    appear(clock);
    appear(countdown);

    let period = $(this).attr("id"); // retrieve the user inputed intervel 
    period = parseInt(period);
    period = period * 60; // convert the intervel to seconds
    
    let intervel = setInterval(() => {
        let minutes = Math.floor(period/60);
        let seconds = Math.floor(period%60);
        min.text(minutes);
        sec.text(seconds);
        period -- ;
        console.log(period);
        if (period === 0){
            clearInterval(intervel);
            min.text(0);
            sec.text(0);
            let audio = new Audio("sounds/alarm.MP3");
            audio.play();
        }
    }, 1000);
    reset.on("click", function () {
        location.reload();
    })
  
    
});


function hide(item) {
  item.addClass("hidden");
}

function appear(item) {
  item.removeClass("hidden");
}
