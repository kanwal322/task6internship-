window.onload = function () {
  const form = document.getElementById("contact-form");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    let isValid = true;

    if (name.value.trim() === "") {
      showError(name, "Please enter your name");
      isValid = false;
    }

    if (email.value.trim() === "") {
      showError(email, "Please enter your email");
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email");
      isValid = false;
    }

    if (message.value.trim() === "") {
      showError(message, "Please enter your message");
      isValid = false;
    }

    if (isValid) {
      alert("Thank you! Your message has been sent.");
      name.value = "";
      email.value = "";
      message.value = "";
    }
  });

  function showError(input, message) {
    const error = document.createElement("small");
    error.classList.add("error-message");
    error.style.color = "red";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
  }
};
