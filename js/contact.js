const contactForm = document.querySelector(".contact-form");                //targeting The Whole contact form

const nameInput = document.querySelector("#name");                          //targeting the NAME field.
const nameError = document.querySelector("#name-error");

const subjectInput = document.querySelector("#subject");                    //targeting the SUBJECT field.
const subjectError = document.querySelector("#subject-error");

const emailInput = document.querySelector("#email");                        //targeting the EMAIL field.
const emailError = document.querySelector("#email-error");

const textArea = document.querySelector("#message");                        //targeting TEXTAREA

const submitButton = document.querySelector(".submit-btn");                 //targeting the SUBMIT button.

submitButton.disabled = true;

function enableButton() {                                                   //enables button ONKEY
    if (nameInput.value.trim().length > 0 || subjectInput.value.trim().length > 0 || emailInput.value.trim().length > 0 || textArea.value.trim().length > 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    };
};

function formValidation(event) {
    event.preventDefault();                                                 //Prevent Default Behaviour

    let nameConfirm;
    let emailConfirm;
    let subjectConfirm;

    if (checkError(nameInput.value, 0)) {                                   //Name Error Check
        nameError.style.display = "none";
        nameConfirm = true;
    } else {
        nameError.style.display = "block";
        nameConfirm = false;
    };

    if (checkError(subjectInput.value, 0)) {                                //Subject Error Check
        subjectError.style.display = "none";
        subjectConfirm = true;
    } else {
        subjectError.style.display = "block";
        subjectConfirm = false;
    };

    if (checkEmail(emailInput.value)) {                                     //Valid Email check
        emailError.style.display = "none";
        emailConfirm = true;
    } else {
        emailError.style.display = "block";
        emailConfirm = false;
    }

    if (nameConfirm & subjectConfirm & emailConfirm) {                      //checking if all form passes validation
        contactForm.classList.add("complete-container");
        contactForm.innerHTML = `<div>
                                    <h1>Message Complete!</h1>
                                    <h3>Thank you for your Submission</h3>
                                    <p>A response will be sent to:</p>
                                    <p><b>${emailInput.value}</b></p>
                                    <a href="../index.html" class="back-btn">Back</a>
                                </div>`;//convert form to complete message

    }

}

function checkError(value, length) {                                        //returns a true or false statement if value is greater than length
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    };
};

function checkEmail(email) {                                                //checking if email is written correct.
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

addEventListener("keyup", enableButton);
contactForm.addEventListener("submit", formValidation);