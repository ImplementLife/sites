var elementFavoriteCount = document.getElementById('countFavorite');

var elementBaskedCount = document.getElementById('countBasked');

var buttons = document.getElementsByClassName('button');

//alert(elementFavoriteCount.textContent);

function f1(argument) {
	
}

/* Работа с количеством товара и ценой */
document.getElementById('q_down').addEventListener('click',function(){change(-1);});
document.getElementById('q_up').addEventListener('click',function(){change(+1);});

var fullPrice = document.getElementById('fullPrice');

var input = document.getElementById('quantity_wanted');
input.oninput = function() {changePrice(input.value);};

var defaultPrice = 30;
function change(argument) {
	let inputValue = Number(input.value);
	if (inputValue + argument >= 1) {
		input.value = inputValue + argument;
		changePrice(input.value);
	}
}
function changePrice(argument) {
	if (argument == '') {input.value = 1;}
	else {fullPrice.innerHTML = argument * defaultPrice;}
}