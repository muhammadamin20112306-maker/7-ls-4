const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = " Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});