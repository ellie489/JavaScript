const form = document.querySelector(".contact-form");
const fullName = document.querySelector(".name-input");
const email = document.querySelector(".email-input");
const address = document.querySelector(".address-input");
const subject = document.querySelector(".subject-input");


function validateEmail(email) {

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // The Regex is copied from: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const patternMatch = emailRegex.test(String(email).toLowerCase());

    return patternMatch;
}
 

const displayError = (input, error) => {

    input.nextElementSibling.classList.add("form-error");
    input.nextElementSibling.innerText = error;
}

const removeError = (input) => {

    input.nextElementSibling.innerText = "";
    input.nextElementSibling.classList.remove("form-error");

}


const validateInputs = () => {

    const nameValue = fullName.value.trim()
    const emailValue = email.value.trim()
    const addressValue = address.value.trim()
    const subjectValue = subject.value.trim()
    const success = document.querySelector("#form-h1");

    console.log("Validate", nameValue, emailValue, addressValue, subjectValue);


        if (!nameValue) {

            displayError(fullName, "Name is required");
        }
        else {
            removeError(fullName);

        }

        if (!validateEmail(emailValue)) {

            displayError(email, "Your Email address is incorrect");
        }
        else {
            removeError(email)
        }

        if (!addressValue || addressValue.length < 25) {
            displayError(address, "Please provide an address (Minimum 25 characters)");
        }
        else {
            removeError(address);
        }

        if (!subjectValue || subjectValue.length < 10) {
            displayError(subject, "Please fill in your subject (Minimum 10 characters)");
        }
        else {
            removeError(subject);
            success.innerHTML = "";
        }

        // Success validation

        if (nameValue && validateEmail(emailValue) && addressValue && subjectValue) {
            success.innerHTML = "Success!";
        }
        else {
            success.innerHTML = "";
        }

}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    validateInputs();

});

