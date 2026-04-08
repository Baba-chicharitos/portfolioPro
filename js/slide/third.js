const left = document.getElementById("left");
const right = document.getElementById("right");
const p1 = document.getElementById("photo1");
const p2 = document.getElementById("photo2");
const p3 = document.getElementById("photo3");
const p4 = document.getElementById("photo4");
const p5 = document.getElementById("photo5");
const po1 = document.getElementById("po1");
const po2 = document.getElementById("po2");
const po3 = document.getElementById("po3");
const po4 = document.getElementById("po4");
const po5 = document.getElementById("po5");
let y = 3;
let x = 0;

p1.addEventListener("mouseover", () => {
  if (x === 10) {
    clearInterval(Timer);
    console.log("ggggg");
    countPoint();
  }
});

p1.addEventListener("mouseout", () => {
  if (x === 10) {
    timerRestart();
    countPoint();
  }
});

p2.addEventListener("mouseover", () => {
  if (x === 20) {
    clearInterval(Timer);
    console.log("ggggg");
    countPoint();
  }
});

p2.addEventListener("mouseout", () => {
  if (x === 20) {
    timerRestart();
    countPoint();
  }
});

p3.addEventListener("mouseover", () => {
  if (x === 30) {
    clearInterval(Timer);
    console.log("ggggg");
    countPoint();
  }
});

p3.addEventListener("mouseout", () => {
  if (x === 30) {
    timerRestart();
    countPoint();
  }
});

p4.addEventListener("mouseover", () => {
  if (x === 40) {
    clearInterval(Timer);
    console.log("ggggg");
    countPoint();
  }
});

p4.addEventListener("mouseout", () => {
  if (x === 40) {
    timerRestart();
    countPoint();
  }
});

p5.addEventListener("mouseover", () => {
  if (x === 50) {
    clearInterval(Timer);
    console.log("ggggg");
    countPoint();
  }
});

p5.addEventListener("mouseout", () => {
  if (x === 50) {
    timerRestart();
    countPoint();
  }
});

function turnLeft() {
  clearInterval(Timer);
  console.log("Chaudddd");
  timerRestart();
  if (y >= 1) {
    y = y - 1;
    reset();
    countPoint();
    if (y === 0) {
      y = 5;
      countPoint();
    }
  }
}

function turnRight() {
  clearInterval(Timer);
  console.log("Froidddd");
  timerRestart();
  if (y <= 5) {
    y = y + 1;
    reset();
    countPoint();
    if (y === 6) {
      y = 1;
      countPoint();
    }
  }
}

function countPoint() {
  reset();
  if (y === 1) {
    x = 10;
    p1.classList.add("centre");
    p2.classList.add("gauche1");
    p3.classList.add("gauche2");
    p4.classList.add("gauche3");
    p5.classList.add("gauche4");
    po1.classList.add("grand");
  } else if (y === 2) {
    x = 20;
    p1.classList.add("droite1");
    p2.classList.add("centre");
    p3.classList.add("gauche1");
    p4.classList.add("gauche2");
    p5.classList.add("gauche3");
    po2.classList.add("grand");
  } else if (y === 3) {
    x = 30;
    p1.classList.add("droite2");
    p2.classList.add("droite1");
    p3.classList.add("centre");
    p4.classList.add("gauche1");
    p5.classList.add("gauche2");
    po3.classList.add("grand");
  } else if (y === 4) {
    x = 40;
    p1.classList.add("droite3");
    p2.classList.add("droite2");
    p3.classList.add("droite1");
    p4.classList.add("centre");
    p5.classList.add("gauche1");
    po4.classList.add("grand");
  } else if (y === 5) {
    x = 50;
    p1.classList.add("droite4");
    p2.classList.add("droite3");
    p3.classList.add("droite2");
    p4.classList.add("droite1");
    p5.classList.add("centre");
    po5.classList.add("grand");
  }
}

function reset() {
  p1.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p2.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p3.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p4.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  p5.classList.remove(
    "droite1",
    "droite2",
    "droite3",
    "droite4",
    "centre",
    "gauche1",
    "gauche2",
    "gauche3",
    "gauche4"
  );
  po1.classList.remove("grand");
  po2.classList.remove("grand");
  po3.classList.remove("grand");
  po4.classList.remove("grand");
  po5.classList.remove("grand");
}

function decal() {
  if (y <= 5) {
    y = y + 1;
    countPoint();
    if (y === 6) {
      y = 1;
      countPoint();
    }
  }
  console.log(y);
}

function timerRestart() {
  Timer = setInterval(decal, 3000);
}

reset();
countPoint();
timerRestart();

function open1() {
  clearInterval(Timer);
  timerRestart();
  y = 1;
  countPoint();
}

function open2() {
  clearInterval(Timer);
  timerRestart();
  y = 2;
  countPoint();
}

function open3() {
  clearInterval(Timer);
  timerRestart();
  y = 3;
  countPoint();
}

function open4() {
  clearInterval(Timer);
  timerRestart();
  y = 4;
  countPoint();
}

function open5() {
  clearInterval(Timer);
  timerRestart();
  y = 5;
  countPoint();
}
