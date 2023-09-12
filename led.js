// Funktion der opretter en variabel ""
function toggleRedLED() {
    const LED= document.getElementById('smallButtonRed');
    LED.classList.toggle('led-on');
    LED.classList.toggle('led-off');
}

// Function to toggle the LED button state for smallButtonYel
function toggleYelLED() {
    const LED = document.getElementById('smallButtonYel');
    LED.classList.toggle('led-on');
    LED.classList.toggle('led-off');
}

// Function to toggle the LED button state for smallButtonYel
function toggleGreLED() {
    const LED = document.getElementById('smallButtonGre');
    LED.classList.toggle('led-on');
    LED.classList.toggle('led-off');
}

// Toggler hvert 0.5 sek.
setInterval(toggleRedLED, 500);

// Toggler hvert 2. sek.
setInterval(toggleYelLED, 2000);

// Toggler hvert 1.5 sek.
setInterval(toggleGreLED, 1500);