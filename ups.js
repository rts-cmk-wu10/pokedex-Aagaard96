// Function to hide the .fart element
function hideH1() {
    const errorMessage = document.querySelector(".fart");
    errorMessage.style.display = "none";
}

// Function to show the .fart element
function showH1() {
    const errorMessage = document.querySelector(".fart");
    errorMessage.style.display = "block";
}

// Initially hide the .fart element
hideH1();

// Create an interval to toggle the visibility every 2 seconds (2000 milliseconds)
setInterval(function () {
    // Check if the element is currently hidden
    const errorMessage = document.querySelector(".fart");
    if (errorMessage.style.display === "none") {
        // If hidden, show it
        showH1();
    } else {
        // If shown, hide it
        hideH1();
    }
}, 2100);