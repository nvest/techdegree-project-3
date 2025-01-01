const nameInput = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role")


// Focus on the first form field
nameInput.focus();

// Only show text box when other job role is selected
otherJobRoleInput.hidden = true;
jobRoleSelect.addEventListener("change", () => {
                    
    if(jobRoleSelect.value == "other") {
        otherJobRoleInput.hidden = false;
    } else {
        otherJobRoleInput.hidden = true;
    }


});
  
