// const submitButton = document.querySelector(".btn-submit");

// submitButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   if
// });

function validateForm(event) {
  const form = document.querySelector("form.needs-validation");
  const firstName = form.querySelector("#firstName");
  const lastName = form.querySelector("#lastName");
  const date = form.querySelector("#date");
  const department = form.querySelector("#department");
  const leaveType = form.querySelector(".form-select");
  const fromDate = form.querySelector("#from-date");
  const toDate = form.querySelector("#to-date");
  const numberOfDays = form.querySelector("#daysnumber");
  const purposeOfLeave = form.querySelector("textarea");

  let isValid = true;

  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Check input validity and update accordingly

      input.classList.remove("is-invalid");
    });
  });

  // Validation for First Name
  if (firstName.value.trim() === "") {
    isValid = false;
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.remove("is-invalid");
    firstName.addEventListener("change", function (e) {
      firstName.classList.add("is-valid");
    });
  }

  // Validation for Last Name
  if (lastName.value.trim() === "") {
    isValid = false;
    lastName.classList.add("is-invalid");
  } else {
    lastName.classList.remove("is-invalid");
  }

  // Validation for Date
  if (date.value.trim() === "") {
    isValid = false;
    date.classList.add("is-invalid");
  } else {
    date.classList.remove("is-invalid");
  }

  // Validation for Department
  if (department.value.trim() === "") {
    isValid = false;
    department.classList.add("is-invalid");
  } else {
    department.classList.remove("is-invalid");
  }

  // Validation for Leave Type
  if (leaveType.value === "Select") {
    isValid = false;
    leaveType.classList.add("is-invalid");
  } else {
    leaveType.classList.remove("is-invalid");
  }

  // Validation for From Date
  if (fromDate.value.trim() === "") {
    isValid = false;
    fromDate.classList.add("is-invalid");
  } else {
    fromDate.classList.remove("is-invalid");
  }

  // Validation for To Date
  if (toDate.value.trim() === "") {
    isValid = false;
    toDate.classList.add("is-invalid");
  } else {
    toDate.classList.remove("is-invalid");
  }

  // Validation for Number of Days
  if (numberOfDays.value.trim() === "" || isNaN(numberOfDays.value)) {
    isValid = false;
    numberOfDays.classList.add("is-invalid");
  } else {
    numberOfDays.classList.remove("is-invalid");
  }

  // Validation for Purpose of Leave (Optional)
  // if (purposeOfLeave.value.trim() === "") {
  //   // You can decide if this is mandatory or optional and handle validation accordingly
  //   // isValid = false;
  //   purposeOfLeave.classList.remove("is-invalid");
  // } else {
  //   purposeOfLeave.classList.remove("is-invalid");
  // }

  if (!isValid) {
    // Prevent form submission if validation fails
    event.preventDefault();
  }
}

// Add form submit event listener
const form = document.querySelector("form.needs-validation");
form.addEventListener("submit", validateForm);
