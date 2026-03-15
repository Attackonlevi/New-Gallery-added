function makeGlitter() {
  document.getElementById("glitter-text").classList.toggle("glitter-active");
}

// Function to show the custom alert
function showAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.remove('alert-hidden');
}

// Function to hide the custom alert
function hideAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('alert-hidden');
}

// Example: Show the alert automatically after the page loads (or a delay)
window.onload = function() { // or use DOMContentLoaded
    setTimeout(showAlert, 1000); // Show after 1 second (1000ms)
};