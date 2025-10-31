
window.addEventListener("load", () => {
  alert("Hello, welcome to Charan's Portfolio Website!");
});

const themeToggleBtn = document.createElement("button");
themeToggleBtn.innerText = "🌙 Dark Mode";
themeToggleBtn.style.margin = "10px";
themeToggleBtn.style.padding = "8px 12px";
themeToggleBtn.style.border = "none";
themeToggleBtn.style.borderRadius = "5px";
themeToggleBtn.style.cursor = "pointer";
themeToggleBtn.style.backgroundColor = "#0078d7";
themeToggleBtn.style.color = "white";
themeToggleBtn.style.fontWeight = "bold";
document.querySelector("header").appendChild(themeToggleBtn);

let darkMode = false;
themeToggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#121212" : "#f7f8fa";
  document.body.style.color = darkMode ? "#f0f0f0" : "#333";
  themeToggleBtn.innerText = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  themeToggleBtn.style.backgroundColor = darkMode ? "#444" : "#0078d7";
  themeToggleBtn.style.color = darkMode ? "#fff" : "#fff";
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting!");
    event.preventDefault();
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address!");
    event.preventDefault();
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent successfully.`);
});

const allButtons = document.querySelectorAll("button");
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });
});
