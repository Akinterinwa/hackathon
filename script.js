// DECLEARATION OF THE VARABLES///

const dropdownSection = document.getElementById("dropdown-section");
const subMenu = document.getElementById('subMenu');
const extendTrial = document.getElementById('extend');


// THIS FUNCTION WILL OPEN THE USER-MENU IN THE TOP RIGHT CONTAING THE DETAILS
function toggleMenu(){
  subMenu.classList.toggle('open-menu');
}

///THIS FUNCTION WILL OPEN AND CLOSE THE SETUP GUILD SECTION
function toggleDropdown() {
  console.log(dropdownSection)
  dropdownSection.classList.toggle("show");
}

// THIS FUNCTON WILL CLOSE THE TRIAL SECTION 
function cancel() {
  extendTrial.style.display = 'none'
};



//



//

/////////////////////////////
//THIS IS FOR THE NEW CHECK BUTTON
function app() {
  const HIDDEN_CLASS = "hidden";
  const MARKED_AS_DONE_CLASS = "checkbox-done";
  const CHECKBOX_BUTTON_CLASS = "shopping-item-checkbox";

  // get all buttons with the specified class
  const checkboxButtons = document.querySelectorAll(`.${CHECKBOX_BUTTON_CLASS}`);

  // iterate over each button
  checkboxButtons.forEach(checkboxButton => {
      // get the icons within each button
      const notCompletedIcon = checkboxButton.querySelector("#not-completed-icon");
      const completedIcon = checkboxButton.querySelector("#completed-icon");
      const loadingSpinnerIcon = checkboxButton.querySelector("#loading-spinner-icon");
      const checkBoxButtonStatus = document.querySelector("#shopping-item-checkbox-status");

      // on click, hide the empty checkbox
      function handleMarkAsDone() {
          notCompletedIcon.classList.add(HIDDEN_CLASS);
          loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);

          setTimeout(() => {
              loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
              completedIcon.classList.remove(HIDDEN_CLASS);

              checkBoxButtonStatus.ariaLabel = "Loading. Please wait...";

              checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace(
                  "as done",
                  "as not done"
              );

              checkBoxButtonStatus.ariaLabel = "Successfully marked check button as checked";

              checkboxButton.classList.add(MARKED_AS_DONE_CLASS);
          }, 3000);
      }

      function handleMarkAsNotDone() {
          completedIcon.classList.add(HIDDEN_CLASS);
          loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);

          checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace(
              "as not done",
              "as done"
          );

          checkBoxButtonStatus.ariaLabel = "Loading. Please wait...";

          setTimeout(() => {
              loadingSpinnerIcon.classList.add(HIDDEN_CLASS);
              notCompletedIcon.classList.remove(HIDDEN_CLASS);

              checkBoxButtonStatus.ariaLabel = "Successfully marked check button as not checked";
          }, 3000);
      }

      function handleMarkDoneOrNotDone() {
          const markAsDone = checkboxButton.classList.contains(MARKED_AS_DONE_CLASS);

          if (markAsDone) {
              handleMarkAsNotDone();
          } else {
              handleMarkAsDone();
          }
      }

      checkboxButton.addEventListener("click", handleMarkDoneOrNotDone);
  });
}
app();


//THIS IS FOR THE DROPDOWN OF EACH SECTION
const accordions = document.getElementsByClassName('content-bx');

for (let i = 0; i < accordions.length; i++) {
accordions[i].addEventListener('click', function () {
  // Close all accordions
  closeAllAccordions();

  // Toggle the active class for the clicked accordion
  this.classList.toggle('active');
});
}

function closeAllAccordions() {
for (let i = 0; i < accordions.length; i++) {
  accordions[i].classList.remove('active');
}
}




//PROGRESS ABR AND INDICATOR
var progress = 0;

function toggleButton(increment, button) {
  // Check if the button has the 'selected' class

  var isSelected = button.classList.contains("selected");

  // If the button is not selected, increase the progress and apply the 'selected' class

  if (!isSelected) {
      progress += increment;
      button.classList.add("selected");
  } else {
      // If the button is selected, decrease the progress and remove the 'selected' class

      progress -= increment;
      button.classList.remove("selected");
  }

  // Ensure the progress stays within bounds (0 to 100)
  progress = Math.min(Math.max(progress, 0), 100);

  // Update the width of the progress indicator
  document.getElementById("progress-indicator").style.width = progress + "%";
  updateNumberDisplay(progress);
}

//checking for increment and decrement of the counter
function updateNumberDisplay(progress) {
  var numberDisplay = document.getElementById("number-display");
  var currentStage = Math.floor(progress / 20) + 0;
  numberDisplay.textContent = currentStage + "/5";
}

