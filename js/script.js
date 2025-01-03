const nameInput = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role");

const designSelect = document.querySelector("#design");
const colorSelect = document.querySelector("#color");

const activitiesSet = document.querySelector("#activities");
const totalActivitiesCost = document.querySelector("#activities-cost");
let total = 0;

const paymentSelect = document.querySelector("#payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

const emailInput = document.querySelector("#email");
const cardNumberInput = document.querySelector("#cc-num");
const zipCodeInput = document.querySelector("#zip");
const cvvInput = document.querySelector("#cvv");
const conferenceForm = document.querySelector("form");


// Focus on the first form field
nameInput.focus();

// Only show the "other" text box when "other" job role is selected
otherJobRoleInput.hidden = true;
jobRoleSelect.addEventListener("change", () => {
                    
    if(jobRoleSelect.value == "other") {
        otherJobRoleInput.hidden = false;
    } else {
        otherJobRoleInput.hidden = true;
    }
});


// Show color options only for their available designs
colorSelect.disabled = true;  
designSelect.addEventListener("change", () => {

    colorSelect.disabled = false;

    // Loop through color options and show the ones that are available for the selected design.
    // Select the current color                              
    for (let i = 0; i < colorSelect.children.length; i++) {
        const colorValue = colorSelect.children[i];
        const colorDesign = colorValue.getAttribute("data-theme");
      
        if(designSelect.value == colorDesign) {
            colorValue.hidden = false;
            colorValue.setAttribute("selected", true);
        } else {
            colorValue.hidden = true;
            colorValue.removeAttribute("selected", true)
        }
    }
});


// Add up the total cost of activities
activitiesSet.addEventListener("change", () => {
   
    // get the cost of the current activity and convert it to a number
    const currentActivity = Number(event.target.getAttribute("data-cost"));
    
    // If box is checked, add
    if(event.target.checked) {
        total += currentActivity;
    // If box is not checked, subtract
    } else {
        total -= currentActivity;
    }
    totalActivitiesCost.innerHTML= `<p>Total $${total}</p>`;
});


// Show only the payment option fields for the method that is selected
// Select credit card and hide paypal and bitcoin initially
paypal.hidden = true;
bitcoin.hidden = true;
paymentSelect.children[1].setAttribute("selected", true);

paymentSelect.addEventListener("change", () => {

    // display the <div> element with the id that matches the value of the event.target element. 
    // And hide the other two <div> elements.
    if(event.target.value == paypal.id) {
        paypal.hidden = false;
        bitcoin.hidden = true;
        creditCard.hidden = true;
    } else if (event.target.value == bitcoin.id) {
        paypal.hidden = true;
        bitcoin.hidden = false;
        creditCard.hidden = true;
    } else if (event.target.value == creditCard.id) {
        paypal.hidden = true;
        bitcoin.hidden = true;
        creditCard.hidden = false;
    }

});


// Validate required form fields
conferenceForm.addEventListener("submit", () => {
    
    // The "Name" field cannot be blank or empty.
    const nameValue = nameInput.value
    const nameValidation = /^\s*\S.*$/.test(nameValue);
    if(nameValidation == false) {
        event.preventDefault();
    }
    
    // The "Email Address" field must contain a correctly formatted email address. abc@defg.hijk
    const emailValue = emailInput.value
    const emailValidation = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(emailValue);
    if(emailValidation == false) {
        event.preventDefault();
    }

    // The "Register for Activities" section must have at least one activity selected.
    const activitiesBoxes = activitiesSet.querySelectorAll('.activities input[type="checkbox"]');
    let activityChecked = false;
    for (let i = 0; i < activitiesBoxes.length; i++) {
        if (activitiesBoxes[i].checked) {
            activityChecked = true;
        } 
    }
    if(activityChecked == false) {
        event.preventDefault();
    }

    // If and only if credit card is the selected payment method:
    if(paymentSelect.value == creditCard.id) {

        // The "Card number" field must contain a 13 - 16 digit credit card number without dashes or spaces.
        const cardValue = cardNumberInput.value
        const cardValidation = /^\d{13,16}$/.test(cardValue);
        if(cardValidation == false) {
            event.preventDefault();
        }

        // The "Zip code" field must contain a 5-digit number.
        const zipValue = zipCodeInput.value
        const zipValidation = /^\d{5}$/.test(zipValue);
        if(zipValidation == false) {
            event.preventDefault();
        }

        // The "CVV" field must contain a 3-digit number.
        const cvvValue = cvvInput.value
        const cvvValidation = /^\d{3}$/.test(cvvValue);
        if(cvvValidation == false) {
            event.preventDefault();
        }
    

    }
        

   

});

