const container = document.querySelector("#container");

numOfDivs = 16 * 16;
for (let i = 1; i <= numOfDivs; i++) {
  const div = document.createElement("div");
  div.style.cssText =
    "width: 50px; height: 50px; border: 1px solid black; box-sizing: border-box";
  // div.textContent = `NO ${i}`;

  container.appendChild(div);
}
