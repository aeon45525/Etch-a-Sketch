const container = document.querySelector("#container");

grids = 16;
numOfDivs = grids * grids;
for (let i = 1; i <= numOfDivs; i++) {
  const divGrid = document.createElement("div");
  // divGrid.style.cssText = "width: 50px; height: 50px;";
  divGrid.style.cssText =
    "width: 50px; height: 50px; border: 1px solid black; box-sizing: border-box";
  divGrid.classList.add("divGrid");
  // div.textContent = `NO ${i}`;

  container.appendChild(divGrid);
}

const cell = document.querySelector(".divGrid");

const cellWidth = cell.offsetWidth;
const cellHeight = cell.offsetHeight;

container.style.width = `${cellWidth * grids}px`;
container.style.height = `${cellHeight * grids}px`;

console.log(`cellwidth: ${cellWidth}`);
console.log(`cellheight: ${cellHeight}`);
console.log(`numofDivs: ${numOfDivs}`);
console.log(`container width: ${container.offsetWidth}`);
