const submitButton = document.querySelector("button");

function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector("#email");
  const errorMessage1 = document.querySelector(".error-msg1");
  const errorMessage2 = document.querySelector(".error-msg2");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "") {
    errorMessage1.classList.remove("hidden");
    errorMessage2.classList.add("hidden");
    email.classList.add("error-input");
  } else if (email.value.match(mailformat)) {
    errorMessage1.classList.add("hidden");
    errorMessage2.classList.add("hidden");
    email.classList.remove("error-input");
  } else {
    errorMessage1.classList.add("hidden");
    errorMessage2.classList.remove("hidden");
    email.classList.add("error-input");
  }
}
submitButton.addEventListener("click", handleSubmit);
