const subscribeBtn = document.querySelector(".subscribe-btn");
const dissmissBtn = document.querySelector(".dissmiss-btn");
const emailInput = document.getElementById("email");
const emailError = document.querySelector(".email-error");
const signUpContainer = document.querySelector(".sign-up-container");
const successContainer = document.querySelector(".success-container");
const userEmail = document.querySelector(".user-email");

function resetInputStyles() {
  emailInput.style.borderColor = "";
  emailInput.style.color = "";
  emailError.style.display = "none";
}
subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailValue)) {
    userEmail.innerHTML = emailValue;
    signUpContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
  } else {
    emailInput.style.borderColor = "var(--color-tomato)";
    emailInput.style.color = "var(--color-tomato)";
    emailError.style.display = "block";
  }
});
emailInput.addEventListener("input", resetInputStyles);
dissmissBtn.addEventListener("click", () => {
  successContainer.classList.add("hidden");
  signUpContainer.classList.remove("hidden");
  emailInput.value = "";
  resetInputStyles();
});
