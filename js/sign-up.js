const contactForm = document.querySelector(".contact-form");                        //targeting The Whole form./called it this because of the style"class" in previous form.

const nameInput = document.querySelector("#name");                                  //targeting NAME field.
const nameError = document.querySelector("#name-error");

const emailInput = document.querySelector("#email");                                //targeting the EMAIL field.
const emailError = document.querySelector("#email-error");

const passwordInput = document.querySelector("#password");                          //targeting PASSWORD field.
const passwordError = document.querySelector("#password-error");

const confirmInput = document.querySelector("#confirm-password");                   //targeting CONFIRM PASSWORD field.
const confirmError = document.querySelector("#confirm_password-error");

function formValidation(event) {
    event.preventDefault();                                                         //preventing form default

    let nameConfirm;
    let emailConfirm;
    let passwordConfirm;

    if (nameInput.value.trim().length > 0) {                                        //validating that name is written
        nameError.style.display = "none";
        nameConfirm = true;
    } else {
        nameError.style.display = "block";
        nameConfirm = false;
    };

    if (checkEmail(emailInput.value)) {                                             //validating correct email
        emailError.style.display = "none";
        emailConfirm = true;
    } else {
        emailError.style.display = "block";
        emailConfirm = false;
    };

    if (passwordInput.value.trim() === confirmInput.value.trim()) {                 //checking if created passwords match
        passwordError.style.display = "none";
        confirmError.style.display = "none";
        passwordConfirm = true;
    } else {
        passwordError.style.display = "block";
        confirmError.style.display = "block";
        passwordConfirm = false;
    };

    if (nameConfirm & emailConfirm & passwordConfirm) {
        contactForm.classList.add("complete-container");                            //adding complete message on complete validation
        contactForm.innerHTML = `<div>
                                    <h1>Register Complete</h1>
                                    <p>Welcome to GameHub</p>
                                    <h3>${nameInput.value}</h3>
                                    <p>You can now log in to your account</p>
                                    <a href="/html/sign-in.html" class="back-btn">LOG IN</a>
                                </div>`
    };
};

function checkEmail(email) {                                                        //checking if email is written correct.
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

contactForm.addEventListener("submit", formValidation);