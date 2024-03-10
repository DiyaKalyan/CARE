document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(form);

        // You can perform additional validation here before sending the data

        // Simulate sending the form data (replace with actual backend logic)
        setTimeout(function() {
            alert("Message sent successfully!");
            form.reset();
        }, 1000);
    });
});
