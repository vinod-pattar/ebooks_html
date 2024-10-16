const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    /***
     * 1. Get input values
     * 2. Validate input values
     * 3. If valid, submit the form
     * 4. If invalid, show error message
     */



    // Get form values from event object
    // const firstName = event.target.elements.firstName.value;
    // const lastName = event.target.elements.lastName.value;
    // const email = event.target.elements.email.value;
    // const mobile = event.target.elements.mobile.value;
    // const books = event.target.elements.books.value;
    // const message = event.target.elements.message.value;

    // Get form values from form element
    // const firstName = enquiryForm.elements.firstName.value;
    // const lastName = enquiryForm.elements.lastName.value;
    // const email = enquiryForm.elements.email.value;
    // const mobile = enquiryForm.elements.mobile.value;
    // const books = enquiryForm.elements.books.value;
    // const message = enquiryForm.elements.message.value;

    // Get form values from dom elements
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const books = document.getElementById("books");
    const message = document.getElementById("message");

    const alphabeticPattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    let isValid = true;

    if(firstName.value.length < 2 && !alphabeticPattern.test(firstName.value)) {
       firstName.classList.add("is-invalid");
       isValid = false;
    }
    else {
        firstName.classList.remove("is-invalid");
    }

    if(lastName.value.length < 2 && !alphabeticPattern.test(lastName.value)) {
        lastName.classList.add("is-invalid");
        isValid = false;
    }
    else {
        lastName.classList.remove("is-invalid");
    }

    if(!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
    }
    else {
        email.classList.remove("is-invalid");
    }

    if(!mobilePattern.test(mobile.value)) {
        mobile.classList.add("is-invalid");
        isValid = false;
    }
    else {
        mobile.classList.remove("is-invalid");
    }

    if(books.value.length < 1) {
        books.classList.add("is-invalid");
        isValid = false;
    }
    else {
        books.classList.remove("is-invalid");
    }

    if(message.value.length < 1) {
        message.classList.add("is-invalid");
        isValid = false;
    }
    else {
        message.classList.remove("is-invalid");
    }

    if(isValid) {
        alert("Form submitted successfully");
        enquiryForm.submit();
    }
    else {
        alert("Form is invalid");
    }
});