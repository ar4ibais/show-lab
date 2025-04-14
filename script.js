document.addEventListener("DOMContentLoaded", () => {
    const slider = tns({
        container: ".gallery__slider",
        items: 3,
        arrowKeys: true,
        autoplay: true,
        controls: false,
        nav: false,
        fixedWidth: 485,
        mouseDrag: true,
        gutter: 35,
    });
});
