// Funktion der toggler mellem on/off 
function toggleRedLED() {
    const LED = document.getElementById('smallButtonRed');
    LED.classList.toggle('led-on');
    LED.classList.toggle('led-off');
}
// Toggler hvert 0.5 sek.
setInterval(toggleRedLED, 500);

function toggleYelLED() {
    const LED = document.getElementById('smallButtonYel');
    LED.classList.toggle('led-on');
    LED.classList.toggle('led-off');
}
// Toggler hvert 2. sek.
setInterval(toggleYelLED, 2000);

function toggleGreLED() {
    const LED = document.getElementById('smallButtonGre');
    LED.classList.toggle('led-on');
    LED.classList.toggle('led-off');
}
// Toggler hvert 1.5 sek.
setInterval(toggleGreLED, 1500);



