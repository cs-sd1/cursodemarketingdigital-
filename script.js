// Movimento contínuo suave ao rolar
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const sun = document.querySelector(".sun");

    sun.style.transform = "translateY(" + scroll * 0.2 + "px)";
});

// Efeito de revelação ao carregar
window.onload = () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 200);
};