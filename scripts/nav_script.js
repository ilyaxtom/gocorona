const menuBtn = document.querySelector(".nav-btn");
const navBody = document.querySelector(".nav-body");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("opened");
    navBody.classList.toggle("opened");
    document.body.classList.toggle("lock");
})