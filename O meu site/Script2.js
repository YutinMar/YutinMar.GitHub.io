document.addEventListener("DOMContentLoaded", function () {
    // Modal elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector(".close");
    const projetoImagens = document.querySelectorAll('.projeto-box img');
    const grelhaImagens = document.querySelectorAll('.grelha img');

    // Scale tracking
    let scale = 1;

    // Grid toggle functions
    function mostrarGrelha(gridId) {
        const grelha = document.getElementById(gridId);
        grelha.style.display = grelha.style.display === 'none' ? 'grid' : 'none';
    }

    // Add click handlers to all images
    function addImageClickHandlers(images) {
        images.forEach(img => {
            img.addEventListener("click", () => {
                if (modal) {
                    modal.style.display = "block";
                    modalImg.src = img.src;
                    modalImg.style.transform = 'scale(1)';
                    scale = 1;
                }
            });
        });
    }

    // Initialize click handlers
    addImageClickHandlers(projetoImagens);
    addImageClickHandlers(grelhaImagens);

    // Close modal handlers
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Click outside modal to close
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Zoom functionality
    if (modalImg) {
        modalImg.addEventListener("wheel", (event) => {
            event.preventDefault();
            const delta = event.deltaY < 0 ? 0.1 : -0.1;
            scale = Math.min(Math.max(0.5, scale + delta), 3);
            modalImg.style.transform = `scale(${scale})`;
            modalImg.setAttribute("data-scale", scale.toString());
        });
    }
});