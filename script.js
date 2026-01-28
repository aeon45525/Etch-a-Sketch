const container = document.querySelector("#container");

grids = 16;
for (let i = 1; i <= grids * grids; i++) {
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

container.style.width = `${cellWidth * grids}px`;

// console.log(`cellwidth: ${cellWidth}`);
// console.log(`cellheight: ${cellHeight}`);
// console.log(`container width: ${container.offsetWidth}`);
