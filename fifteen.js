
$(document).ready(function(){
	var emptySpaceTop = 0;
	var emptySpaceLeft = 300;
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
				
				$(listArray[j]).click(function(){
					console.log(this);
					moveTile(this);
					checkNeighbor(this);
				});
		}
	}
	
	setClass();
	function moveTile(tile){ //takes a tile, checks it position and then move the tile based on where it was
		
		var tilePositionLeft = $(tile).position().left;
		var tilePositionTop = $(tile).position().top;
		
		console.log(tilePositionLeft);
		
		$(tile).css({left: emptySpaceLeft + "px", top: emptySpaceTop + "px"});
		
		console.log($(tile).position().left);
		
		emptySpaceLeft = tilePositionLeft;
		emptySpaceTop = tilePositionTop;
		console.log(emptySpaceLeft);
		
	}
	
	function checkNeighbor(tile){
		
		if(($(tile).position().left > emptySpaceLeft)){
			console.log("this is a neighbor");
			$(tile).addClass("movablepiece");
		}
		if(($(tile).position().left < emptySpaceLeft)){
			console.log("this is also a neighbor");
			$(tile).addClass("movablepiece");
		}
	}
	
});

