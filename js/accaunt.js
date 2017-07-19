(function($){

	var $mainElemnt = $("#wrap_accaunt");
	var $accauntBox = $mainElemnt.find(".accauntBox");
	var $nextBox =$(".nextEl");
	var $prevBox =$(".prevEl");

	$accauntBox.not(':first-of-type').hide();

	function nextEleemnt(elem){
		var currentElement = elem;
		var elemChange = currentElement.closest($accauntBox);
		var elemNext = elemChange.next();

		if(elemNext.hasClass('reg_loader')){
			elemChange.hide();
			elemNext.show()
			setTimeout (function() { 
				elemNext.hide(); 
			}, 1000);

			setTimeout (function() { 
				elemNext.next().show();
			}, 1000);
		} else {
			elemChange.hide();
			elemNext.show();
		}
	}

	function prevElement(elem){
		var currentElement = elem;
		var elemChange = currentElement.closest($accauntBox);
		var elemPrev = elemChange.prev();

		if(elemPrev.hasClass('reg_loader')){
			elemChange.hide();
			elemPrev.prev().show();
		} else {
			elemChange.hide();
			elemPrev.show();
		}

	};

	$nextBox.on('click', function(){
		nextEleemnt($(this));
	});

	$prevBox.on('click', function(){
		prevElement($(this));
	});

})(jQuery);