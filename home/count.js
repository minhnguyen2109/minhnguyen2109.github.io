var getTime = () => {
    var hour = document.getElementById('hours')
    var minute = document.getElementById('minutes')
    var second = document.getElementById('seconds')
    var day = document.getElementById('days')
    var curDate = new Date();

    var curDay = curDate.getDate();
    console.log(curDay);
    // Lấy giờ hiện tại
    var hours = curDate.getHours();
    console.log(hours);

    // Lấy phút hiện tại
    var minutes = curDate.getMinutes();
    console.log(minutes);

    // Lấy giây hiện tại
    var seconds = curDate.getSeconds();
    console.log(seconds);
    day.innerText = curDay
    hour.innerText = hours
    second.innerText = seconds

    if (seconds == 0) {
        second.innerText = `00`
    }
    if (seconds == 1) {
        second.innerText = '01'
    }
    if (seconds == 2) {
        second.innerText = '02'
    }
    if (seconds == 3) {
        second.innerText = '03'
    }
    if (seconds == 4) {
        second.innerText = '04'
    }
    if (seconds == 5) {
        second.innerText = '05'
    }
    if (seconds == 6) {
        second.innerText = '06'
    }
    if (seconds == 7) {
        second.innerText = '07'
    }
    if (seconds == 8) {
        second.innerText = '08'
    }
    if (seconds == 9) {
        second.innerText = '09'
    }


    minute.innerText = minutes


}
setInterval(() => {
    getTime()
}, 1000)


