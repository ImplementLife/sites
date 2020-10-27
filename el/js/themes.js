const lightTheme = "css/themes/ligth.css";
const darkTheme = "css/themes/dark.css";

const button = document.getElementById("theme-button");

var currentTheme = JSON.parse(localStorage.getItem('theme'));

if (currentTheme == null) { setTheme(lightTheme); } 
else { setTheme(currentTheme); }

button.addEventListener("click", function () { changeTheme(); });

setTimeout(includeCSS, 600, "css/themes/color_trans.css");
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
    if (theme == darkTheme) {
        button.setAttribute('checked', 'checked');
    }
}

function changeTheme() {
    if(currentTheme == lightTheme) { setTheme(darkTheme); } 
    else { setTheme(lightTheme); }
}
