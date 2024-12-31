const menuOpenButton= document.querySelector("#menu-oopen-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCLoseButton.addEventListener('click', () => menuOpenButton.click());