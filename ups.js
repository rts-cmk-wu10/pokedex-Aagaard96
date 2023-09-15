// funktion der skjuler .fart element
function hideFart() {
    const errorMessage = document.querySelector(".fart");
    errorMessage.style.display = "none";
}

// funktion der viser .fart element
function showFart() {
    const errorMessage = document.querySelector(".fart");
    errorMessage.style.display = "block";
}

// hide class .fart ved loading
hideH1();

// opret interval på 2.1 sek
setInterval(function () {
    // tjekker om errorMessage er hidden
    const errorMessage = document.querySelector(".fart");
    if (errorMessage.style.display === "none") {
        // hvis none, vis den
        showH1();
    } else {
        // hvis block, hide den
        hideH1();
    }
}, 2100);