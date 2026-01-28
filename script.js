const container = document.querySelector("#container");

numOfDivs = 16 * 16;
for (let i = 1; i <= numOfDivs; i++) {
  const divGrid = document.createElement("div");
  divGrid.style.cssText =
    "width: 50px; height: 50px; border: 1px solid black; box-sizing: border-box";
  divGrid.classList.add("divGrid");
  // div.textContent = `NO ${i}`;

  container.appendChild(divGrid);
}
