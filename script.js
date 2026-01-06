document.addEventListener("DOMContentLoaded", () => {
  const time = document.querySelector("#time");
  if (time) {
    time.textContent = new Date().toLocaleString();
  }
});
