let ballColor;
let ballSpeed;
let ballSize;
let ballShape; // variable para el tipo de figura de la pelota

let x, y;
let dx, dy;
const ballRadius = 10;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX;
let score = 0;

function setup() {
  createCanvas(480, 320);
  x = width / 2;
  y = height - 30;
  dx = 2;
  dy = -2;
  paddleX = (width - paddleWidth) / 2;
  ballColor = color("white");
  ballSpeed = 2;
  ballSize = ballRadius * 2;
  ballShape = new Ball(); // inicializar la figura de la pelota como una elipse
}

function draw() {
  background("black");
  ballShape.draw(); // dibujar la figura de la pelota
  drawPaddle();
  ballShape.update(); // actualizar la figura de la pelota
  displayScore();
}

function drawPaddle() {
  fill(255);
  rect(paddleX, height - paddleHeight, paddleWidth, paddleHeight);
}

class Ball {
  constructor() {
    this.shape = "ellipse";
  }

  draw() {
    fill(ballColor);
    if (this.shape === "ellipse") {
      ellipse(x, y, ballSize, ballSize);
    } else if (this.shape === "triangle") {
      triangle(
        x,
        y - ballSize / 2,
        x - ballSize / 2,
        y + ballSize / 2,
        x + ballSize / 2,
        y + ballSize / 2
      );
    } else if (this.shape === "square") {
      rect(x - ballSize / 2, y - ballSize / 2, ballSize, ballSize);
    }
  }

  update() {
    if (x + dx > width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
        score++;
      } else {
        background("red");
        textSize(32);
        textAlign(CENTER);
        fill(0);
        text("Game Over. Score: " + score, width / 2, height / 2); 
        noLoop();
        
      }
    }

    paddleX = mouseX - paddleWidth / 2;

    x += ballSpeed * dx;
    y += ballSpeed * dy;
  }
}

class Triangulo extends Ball {
  constructor() {
    super();
    this.shape = "triangle";
  }

  draw() {
    fill(ballColor);
    triangle(
      x - ballSize / 2,
      y + ballSize / 2,
      x,
      y - ballSize / 2,
      x + ballSize / 2,
      y + ballSize / 2
    );
  }
}

class Cuadrado extends Ball {
  constructor() {
    super();
    this.shape = "square";
  }

  draw() {
    fill(ballColor);
    rect(x - ballSize / 2, y - ballSize / 2, ballSize, ballSize);
  }
}

function displayScore() {
  fill(200);
  textSize(20);
  text("Score: " + score, 20, 50);
}
function keyPressed() {
  if (keyCode === ENTER) {
    let randomShape = floor(random(3)); // generar un número aleatorio para determinar la forma
    if (randomShape === 1) {
      ballShape = new Ball(); // actualizar la figura de la pelota como una elipse
    } else if (randomShape === 0) {
      ballShape = new Triangulo(); // actualizar la figura de la pelota como un triángulo
    } else {
      ballShape = new Cuadrado(); // actualizar la figura de la pelota como un cuadrado
    }
    ballColor = color(random(255), random(255), random(255)); // cambiar el color de la pelota de manera aleatoria
    ballSpeed = random(1, 5); // cambiar la velocidad de la pelota de manera aleatoria
    score = 0; // reiniciar el puntaje a 0
  } else if (keyCode === 32) { // si se presiona la tecla "espacio"
    // reiniciar el juego
    x = width / 2;
    y = height /2;
    dx = 2;
    dy = -2;
    ballShape = new Ball(); // resetear la forma de la pelota a elipse
    loop(); // reanudar el loop de dibujo
    ballSpeed = 2; // resetear la velocidad de la pelota a 2
    ballColor = color("white"); // resetear el color de la pelota a blanco
    score = 0; // reiniciar el puntaje a 0
    clear();
  }
}