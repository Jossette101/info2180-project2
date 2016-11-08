// this applies the puzzlepiece class
$(document).ready(function(){
	var listArray = [];
	$("#puzzlearea > div").each(function addToArray(){
		listArray.push(this);
	});
	function setClass(){
		var boxLeft = 0;
		var boxTop = 0;
		var imgTop = 0;
		var imgLeft = 0;
		var positionLeft = 1;
		for (var j = 0; j < listArray.length; j++){
				$(listArray[j]).css("background-position",imgTop.toString()+"px "+imgLeft.toString()+"px");
				$(listArray[j]).addClass("puzzlepiece");
				$(listArray[j]).css({top : boxTop, left : boxLeft});
				boxLeft += 100;
				imgTop -= 100;
				
				positionLeft += 1;
				if(positionLeft == 4){
					positionLeft = 0;
					boxTop += 100;
					boxLeft = 0;
					imgLeft -= 100;
					imgTop = 0;
				}
				
				
		}
	}
	
	setClass();
});

