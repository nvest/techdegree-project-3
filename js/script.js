const nameInput = document.querySelector("#name");
const jobRoleSelect = document.querySelector("#title");
const otherJobRoleInput = document.querySelector("#other-job-role");
const designSelect = document.querySelector("#design");
const colorSelect = document.querySelector("#color");


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