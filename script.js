function updateClock() {
    const now = new Date();

    const hour = now.getHours() % 12; // Convert to 12-hour format
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourRotation = 360 / 12 * hour + 360 / 12 * (minute / 60);
    const minuteRotation = 360 / 60 * minute + 360 / 60 * (second / 60);
    const secondRotation = 360 / 60 * second;

    document.getElementById('hour-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the initial position
