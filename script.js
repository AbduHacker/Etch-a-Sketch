let container = document.querySelector(".container");
function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Pad with leading zeros if the hex code is less than 6 digits
  return `#${randomColor.padStart(6, '0')}`;
}

function createSquares(n) {
  const CONTAINER_SIZE = container.clientHeight;
  let squareSize = CONTAINER_SIZE / n;
  for (let i = 1; i <= (n ** 2); i++) {
    let square = document.createElement("div");
    square.style.cssText = `width: ${squareSize - 1}px; height: ${squareSize - 1};`
    square.classList.add("square");
    square.id = `square-${i}`;
    container.appendChild(square);
  }
  
}
function changeColor() {
  container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className === "square") {
      let random = getRandomHexColor();
      target.style.backgroundColor = random;
    }
  });
}

function changeSize() {
  let size = prompt("Enter the length of the squares(1 to 100): ");
  container.innerHTML = "";
  createSquares(size);
}
function clearColors() {
  let sqaures = document.querySelectorAll(".square");
  sqaures.forEach((item) => item.style.backgroundColor = "white");
}
createSquares(10);
changeColor();

