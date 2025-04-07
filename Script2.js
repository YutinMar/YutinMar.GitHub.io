document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector(".close");
    const projetoImagens = document.querySelectorAll('.projeto-box img');
    const grelhaImagens1 = document.getElementById('grelha-imagens-1');

let scale = 1;

function mostrarGrelha() {
  const grelha = document.getElementById('grelha-imagens-1');
 grelha.style.display = grelha.style.display === 'none' ? 'grid' : 'none';
 }

 function mostrarGrelha1() {
    const grelha = document.getElementById('grelha-imagens-2');
   grelha.style.display = grelha.style.display === 'none' ? 'grid' : 'none';
   }

//Adicionar eventos de clique a todas as imagens em grades
function addImageClickHandlers(image) {
    image.forEach(img => {
    img.addEventListener("click", () => {
        if (modal) {
        modal.style.display = "block";
        modalImg.src = img.src;
        modalImg.style.transform = 'scale(1)';
        scale = 1;
        }
    });
})
}

addImageClickHandlers(projetoImagens);
addImageClickHandlers(grelhaImagens1);

if (closeBtn) {
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
};

window.addEventListener("click", (event) => {
if (event.target === modal) {
    modal.style.display = "none";
}
});

if (modalImg) {
    modalImg.addEventListener("wheel", (event) => {
        event.preventDefault();
        const delta = event.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(0.5, scale + delta), 3);
        modalImg.style.transform = `scale(${scale})`;
        modalImg.setAttribute("data-scale", scale.toString());
    });
}
});