const contactForm = document.querySelector(".contact-form");                            //targeting FORM.

const emailInput = document.querySelector("#email");                                    //targeting EMAIL field.
const emailError = document.querySelector("#email-error");

const nameInput = document.querySelector("#name");                                      //targeting NAME field.
const nameError = document.querySelector("#name-error");

const cardInput = document.querySelector("#card-number");                               //targeting CARDNUMBER field.
const cardError = document.querySelector("#card_number-error");

const cvvInput = document.querySelector("#cvv");                                       //targeting CVV field.
const cvvError = document.querySelector("#cvv-error");

function formValidation(event) {
    event.preventDefault();                                                         //preventing form default

    let nameConfirm;
    let emailConfirm;
    let cardConfirm;
    let cvvConfirm;

    if (nameInput.value.trim().length > 0) {                                        //validating that name is written
        nameError.style.display = "none";
        nameConfirm = true;
    } else {
        nameError.style.display = "block";
        nameConfirm = false;
    };

    if (cardInput.value.trim().length === 16) {                                     //validatoing its a Visa number 16 digits
        cardError.style.display = "none";
        cardConfirm = true;
    } else {
        cardError.style.display = "block";
        cardConfirm = false;
    };

    if (cvvInput.value.trim().length === 3) {                                       //validating its a cvv code 3 digits
        cvvError.style.display = "none";
        cvvConfirm = true;
    } else {
        cvvError.style.display = "block";
        cvvConfirm = false;
    };

    if (checkEmail(emailInput.value)) {                                             //validating correct email
        emailError.style.display = "none";
        emailConfirm = true;
    } else {
        emailError.style.display = "block";
        emailConfirm = false;
    };

    if (nameConfirm & emailConfirm & cardConfirm & cvvConfirm) {
        contactForm.innerHTML = `<div id="check-complete">
                                    <h1>Payment Complete</h1>
                                    <div>
                                        <h2>Thank you for shopping here at GameHub</h2>
                                        <h2>${nameInput.value}</h2>
                                    </div>
                                    <div>
                                        <p>A receipt of your purchase will be sent to:</p>
                                        <p><b>${emailInput.value}</b></p>
                                    </div>
                                    <div>
                                        <a href="../index.html" class="back-btn">BACK</a>
                                    </div>
                                </div>`
    };
};

function checkEmail(email) {                                                        //checking if email is written correct.
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

contactForm.addEventListener("submit", formValidation);