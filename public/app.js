document.querySelector("#year").textContent = new Date().getFullYear();

const toast = document.querySelector(".toast");
let toastTimer;

document.querySelectorAll(".pending-link").forEach((button) => {
  button.addEventListener("click", () => {
    clearTimeout(toastTimer);
    toast.textContent = `Ссылка на ${button.dataset.project} будет подключена перед публикацией.`;
    toast.classList.add("visible");
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
  });
});
