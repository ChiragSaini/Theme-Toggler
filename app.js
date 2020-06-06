var setTheme = localStorage.getItem('theme')
console.log("Current Theme: ", setTheme);

if (setTheme == null){
    swapStyle('light.css')
} else {
    swapStyle(setTheme)
}

function swapStyle(sheet) {
    document.querySelector("#mystylesheet").href = sheet
    localStorage.setItem('theme', sheet)
    console.log("Current Theme: ", sheet);
}