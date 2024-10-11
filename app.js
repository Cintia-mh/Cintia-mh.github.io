//selecion de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");
//funcionalidad dezplazar haci arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})