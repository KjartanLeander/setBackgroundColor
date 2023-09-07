console.log("jeg er i setbackground")

const inpColor = document.querySelector(".inpColor")
console.log(inpColor)

const pTags = document.getElementsByTagName("p")
console.log(pTags)

const inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")
console.log(inpColorPicker)

const pbSetColor = document.querySelector(".pbSetColor")
console.log(pbSetColor)

const pArray = Array.from(pTags)
console.log(pArray)

function increaseFont(element) {
    let fontSize = element.style.fontSize;
    console.log("fsize" + fontSize)
    element.style.fontSize = 20 + "px"
}

pArray.forEach(increaseFont)

pbSetColor.textContent = "Tryk mig for set color";

const bdy = document.querySelector("body")
console.log(bdy);

function setBackgroundColor() {
    let col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function useColorPicker(){
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

document.addEventListener("keyup", setBackgroundColor)

pbSetColor.addEventListener("click",setBackgroundColor);
inpColorPicker.addEventListener("input",useColorPicker)