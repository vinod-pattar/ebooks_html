// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function (event) {
        // Prevent form from submitting by default
        event.preventDefault();

        // Get input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate name (non-empty)
        if (name === '') {
            alert('Please enter your full name.');
            return;
        }

        // Validate email (valid format)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate password (at least 6 characters)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // If all validations pass, submit the form (or display success message)
        alert('Registration successful!');
        form.reset(); // Optionally reset the form after successful submission
    });
});
