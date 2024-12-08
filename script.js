// --------------------------Back to Top Button Functionality--------------------------
const backToTopBtn = document.getElementById("backToTopBtn");

// Function to handle the visibility of the "Back to Top" button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (backToTopBtn) backToTopBtn.style.display = "block"; // Show the button when scrolled 100px or more
    } else {
        if (backToTopBtn) backToTopBtn.style.display = "none"; // Hide the button when scrolled less than 100px
    }
};

// Check if the "Back to Top" button exists before adding the click event listener
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
        // Smooth scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// --------------------------Registration Form Validation--------------------------
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const errorMessage = document.getElementById("registrationErrorMessage");

        if (password !== confirmPassword) {
            if (errorMessage) {
                errorMessage.textContent = "Passwords do not match!";
                errorMessage.style.color = "red";
            }
        } else {
            if (errorMessage) errorMessage.textContent = "";
            alert("Registration successful!");
            registrationForm.reset();
        }
    });
}


