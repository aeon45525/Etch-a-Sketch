function generateGrid(pix) {
  const container = document.querySelector("#container");

  // grids = 16;
  for (let i = 1; i <= pix * pix; i++) {
    const divGrid = document.createElement("div");
    divGrid.classList.add("divGrid");
    divGrid.addEventListener(
      "mouseover",
      () => (divGrid.style.backgroundColor = "darkorchid"),
    );
    container.appendChild(divGrid);
  }

  const cell = document.querySelector(".divGrid");
  const cellWidth = cell.offsetWidth;
  container.style.width = `${cellWidth * pix}px`;
}

const generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", userInput);

function userInput() {
  let pixels = prompt("Please enter number of squares per side for the grid: ");
  if (pixels > 100) {
    alert("Maximun input of 100 grids!");
  } else {
    generateGrid(pixels);
  }
}

// console.log(`cellwidth: ${cellWidth}`);
// console.log(`cellheight: ${cellHeight}`);
// console.log(`container width: ${container.offsetWidth}`);
