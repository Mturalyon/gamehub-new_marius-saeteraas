const contactForm = document.querySelector(".contact-form");                //targeting The Whole contact form.

const emailInput = document.querySelector("#email");                        //targeting the EMAIL field.
const emailError = document.querySelector("#email-error");

const passwordInput = document.querySelector("#password");                  //targeting PASSWORD field.
const passwordError = document.querySelector("#password-error");

function formValidation(event) {                                            //validating username and password
    event.preventDefault();

    let emailConfirm;
    let passwordConfirm;

    if (checkEmail(emailInput.value)) {                                     //checking if email is valid
        emailError.style.display = "none";
        emailConfirm = true;
    } else {
        emailError.style.display = "block";
        emailConfirm = false;
    };

    if (passwordInput.value.trim() === "123") {                             //the password is 123!
        passwordError.style.display = "none";
        passwordConfirm = true;
    } else {
        passwordError.style.display = "block";
        passwordConfirm = false;
    };

    if (emailConfirm & passwordConfirm) {                                   //relocating to account if login is successfull
        window.location.href = "/html/account.html";
    };
};

function checkEmail(email) {                                                //checking if email is written correct.
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

contactForm.addEventListener("submit", formValidation);                     //on submit