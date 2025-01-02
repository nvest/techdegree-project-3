const nameInput = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role");
const designSelect = document.querySelector("#design");
const colorSelect = document.querySelector("#color");
const activitiesSet = document.querySelector("#activities");
const totalActivitiesCost = document.querySelector("#activities-cost");
let total = 0;


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