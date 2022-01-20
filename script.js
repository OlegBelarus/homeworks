const hours = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const forHour = document.getElementById('forHour');

const clock = setInterval (function() {
        let timeClock = new Date ();
        let hour = timeClock.getHours();
        let min = timeClock.getMinutes();
        let sec = timeClock.getSeconds();

        if (hour < 10) {
            hour = '0' + hour;
        }

        if (min < 10) {
            min = '0' + min;
        }

        if (sec < 10) {
            sec = '0' + sec;
        }

        hours.textContent = hour;
        minute.textContent = min;
        seconds.textContent = sec;
    }, 1000
);
