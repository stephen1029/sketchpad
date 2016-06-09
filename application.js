$(document).ready(function() {
	createGrid(20);
	hoverEffect();
	$('.button-clear').on('click', clear);
	$('.button-create').on('click', function() {
		var size = prompt("Select grid size.");
		clear();		//erase grid colors first
		createGrid(size);		
	});
});

function createGrid(number) {
	for (var i = 0; i < (number * number); i++) {
		$('#grid').append('<div class="block"></div>');	
	}
	$('.block').width(960/number-2);
	$('.block').height(960/number-2);
}

function hoverEffect() {
	$('.block').hover(function() {
		$(this).addClass("hoverColor");
	}
	);
}

function clear() {
	$('.block').removeClass("hoverColor");
}