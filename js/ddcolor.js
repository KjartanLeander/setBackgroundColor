console.log("jeg er i ddcolor")

const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColors = document.getElementById("ddColor")


pbfillDropdown = document.getElementById("pbFillDropdown")

const bdy = document.querySelector("body")
console.log(bdy);

function fillDropdown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColors.appendChild(el);
}
function setBackgroundColor() {
    const selindex = ddColors.selectedIndex;
    const selectedColor = ddColors.options[selindex];
    const color = selectedColor.innerText
    console.log(color)
    bdy.style.backgroundColor = color
}
function addColors() {
    ddColor.innerHTML = ""
    console.log("addcolors")
colArray.forEach(fillDropdown)
    console.log(document.all)
}



pbfillDropdown.addEventListener("click", addColors)
ddColors.addEventListener('change', setBackgroundColor)
