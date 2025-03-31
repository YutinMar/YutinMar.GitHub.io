document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var img = document.querySelector(".conteudo img");
    var modalImg = document.getElementById("img01");
    var closeBtn = document.querySelector(".close");

    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
