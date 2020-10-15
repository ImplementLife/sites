document.getElementById("add-button").addEventListener("click", function () { add(); });

var count = 0;

function add() {
	count++;
	document.getElementById("add").innerHTML = count;
}