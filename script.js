// selects base container for each grids
const container = document.querySelector("#container");

// creates grid generation button
const generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", userInput);

// function to set the size of the container needed to fit all the grids
function generateContainer(pix) {
  // creates temporary grid
  const divTest = document.createElement("div");
  divTest.classList.add("divGrid");
  container.appendChild(divTest);

  // uses temporary grid to calculates the container size needed
  const cellWidth = divTest.offsetWidth;
  container.style.width = `${cellWidth * pix}px`;

  // remove temporary grid after use
  divTest.remove();
}

// function to generate grids
function generateGrid(pix) {
  // clean html before generating new grids
  container.innerHTML = "";

  // loop to generate all needed grids
  for (let i = 1; i <= pix * pix; i++) {
    const divGrid = document.createElement("div");
    divGrid.classList.add("divGrid");
    divGrid.addEventListener(
      "mouseover",
      () => (divGrid.style.backgroundColor = "darkorchid"),
    );
    container.appendChild(divGrid);
  }
}

// gets user input limiting it to 100 pixels
function userInput() {
  let pixels = Number(
    prompt("Please enter number of squares per side for the grid: "),
  );
  if (pixels > 100) {
    alert("Maximun input of 100 grids!");
  } else {
    // if passes 100 limit, call functions
    generateContainer(pixels);
    generateGrid(pixels);
  }
}
