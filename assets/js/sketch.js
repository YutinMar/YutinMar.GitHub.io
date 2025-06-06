let capa1, capa2;
let transicao = false;
let alpha = 0;
let mostrarCapa1 = true;

function preload() {
  capa1 = loadImage("assets/img/Galáctia.jpg");
  capa2 = loadImage("assets/img/galaxia2.jpg");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("capa-canvas");
  canvas.style("z-index", "-1");
}

function draw() {
  if (!transicao) {
    image(mostrarCapa1 ? capa1 : capa2, 0, 0, width, height);
  } else {
    image(mostrarCapa1 ? capa1 : capa2, 0, 0, width, height);
    tint(255, alpha);
    image(mostrarCapa1 ? capa2 : capa1, 0, 0, width, height);
    noTint();

    alpha += 5;
    if (alpha >= 255) {
      transicao = false;
      alpha = 0;
      mostrarCapa1 = !mostrarCapa1;
    }
  }
}

function mousePressed() {
  if (!transicao) {
    transicao = true;
    alpha = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}