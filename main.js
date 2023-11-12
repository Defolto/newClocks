const seconds = document.querySelector("#seconds")
const minutes = document.querySelector("#minutes")
const hours = document.querySelector("#hours")
const date = document.querySelector("#date")
const month = document.querySelector("#month")
const year = document.querySelector("#year")

function formatNumbers(value) {
    if (value < 10) {
        return "0" + value
    } else {
        return value
    }
}

function showTime() {
    const now = new Date()

    seconds.innerHTML = formatNumbers(now.getSeconds())
    minutes.innerHTML = formatNumbers(now.getMinutes())
    hours.innerHTML = formatNumbers(now.getHours())
    
    date.innerHTML = now.getDate()
    month.innerHTML = now.toLocaleString('default', { month: 'long' });
    year.innerHTML = now.getFullYear() + " г."
}

showTime()
setInterval(() => {
    showTime()
}, 1000);