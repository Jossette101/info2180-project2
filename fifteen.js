
$(document).ready(function(){
	var listArray = [];
	$("#puzzlearea > div").each(function addToArray(){ 			//select the divs in within puzzlearea and push them to an array
		listArray.push(this);
	});
	function setClass(){      //declares variables for the boxes and the image
		var boxLeft = 0;
		var boxTop = 0;
		var imgTop = 0;
		var imgLeft = 0;
		var positionLeft = 1; //refers to the first top position
		for (var j = 0; j < listArray.length; j++){ //for every item in the array, the class, image and positions are added
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
	function moveTile(tile){ //takes a tile, checks it position and then move the tile based on where it was
		var tilePosition = tile.position();
		var tileTop;
		var tileLeft;
		var tileBottom;
		var tileRight;
		var positionOne = 0;
		var positionTwo = 100;
		var positionThree = 200;
		var positionFour = 300;
		
		if(tilePosition == $(this).css("top")){
			tileBottom = tilePosition.position().top += 100;
			tile.animate({top: tileBottom.toString()});
			alert($(tile).position());
		}
		/*if(tilePosition == $(this).css(){
			tileTop = tilePosition.position.top -= 100;
			tile.animate({top: tileTop.toString()});
		}
		if(tilePosition == $(this).css("")){
			tileLeft = tilePosition.position.left += 100;
			tile.animate({left: tileLeft.toString()});
		}*/
		
	}
	
	moveTile(1);
});

