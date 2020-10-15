const lightTheme = "css/ligth.css";
const darkTheme = "css/dark.css";

var currentTheme = JSON.parse(localStorage.getItem('theme'));

if (currentTheme == null) { setTheme(darkTheme); } 
else { setTheme(currentTheme); }

document.getElementById("theme-button").addEventListener("click", function () { myChangeTheme(); });
/////////////////////////////////////////////////

function includeCSS(aFile, aRel) {
    let head = window.document.getElementsByTagName('head')[0];
    let style = window.document.createElement('link');
    style.href = aFile;
    style.rel = aRel || 'stylesheet';
    head.appendChild(style);
}

function setTheme(theme) {
    includeCSS(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
    currentTheme = theme;
}

function myChangeTheme() {
    if(currentTheme == lightTheme) { setTheme(darkTheme); } 
    else { setTheme(lightTheme); }
}
