console.log("jeg er i ddcolor2")

const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]

const ddColors2 = document.getElementById("ddColor2")
const pbfillDropdown2 = document.getElementById("ddColor2")

function fillDropdown2(item){
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColors2.appendChild(el);
}

function setBackgroundColor2() {
    const selindex = ddColors2.selectedIndex;
    const selectedOption = ddColors2.options[selindex];
    const color = selectedOption.value
    console.log(color)
    bdy.style.backgroundColor = color
}

function addColors2() {
    ddColors2.innerHTML = ""
    colArray2.forEach(fillDropdown2)
    console.log(document.all)
}

pbfillDropdown2.addEventListener('click', addColors2)
ddColors2.addEventListener('change', setBackgroundColor2)

