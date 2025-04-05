document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const img = document.querySelector(".conteudo img");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector(".close");

    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("imgDestacada");
    var modalImg = document.getElementById("img01");
    var closeBtn = document.querySelector(".close");

    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    modalImg.addEventListener("wheel", function (event) {
        event.preventDefault();
        var scale = Number(modalImg.getAttribute("data-scale")) || 1;
        var delta = event.deltaY > 0 ? -0.1 : 0.1;
        scale += delta;
        scale = Math.min(Math.max(1, scale), 3);
        modalImg.style.transform = `scale(${scale})`;
        modalImg.setAttribute("data-scale", scale);
    });
});