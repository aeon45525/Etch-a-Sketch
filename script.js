const container = document.querySelector("#container");

numOfDivs = 16 * 16;
for (let i = 1; i <= numOfDivs; i++) {
  const div = document.createElement("div");
  div.style.cssText = "border: 2px solid black; width: 50px; height: 50px;";
  div.textContent = `NO ${i}`;

  container.appendChild(div);
}
