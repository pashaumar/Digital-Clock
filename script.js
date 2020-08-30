function showtime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    hours = (hours == 0) ? hours = 12 : hours;
    if(hours > 12){
        hours -= 12;
        session = "PM";
    }
    hours = (hours < 10) ? "0" + hours: hours;
    minutes = (minutes < 10) ? "0" + minutes: minutes;
    seconds = (seconds < 10) ? "0" + seconds: seconds;

    let clock = document.querySelector('.clock');
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${session}`;
}
setInterval(showtime,1000);