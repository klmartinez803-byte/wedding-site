
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response-message").textContent = "Thank you for your RSVP!";
    this.reset();
});
