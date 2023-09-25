const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).background);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var orangeElementColor = getBGColor(orange);                    //var color = getBGColor(pink);

// orange.addEventListener('mouseenter', () => {                   //pink.addEventListener("click", (click function also happens in place of enter).
//     center.style.background = orangeElementColor;               //center.style.background = color;
// }); 

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;           
    });
}


magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));