var hintsOn = false;  // used for toggling hints on and off

$(document).ready (


	function()
	{

		// Shuffle the grid if clicked.
		$("#shuffle").click( function() {

			for (var i=0; i<= 1000; i++)
			{
				tryToSwapTiles();
			}			
		});

		// Toggle hints (numbers) on and off
		$("#hint").click(
			function(){
				hintsOn = !hintsOn;
				updateText();
			}
		);


		// Swap tiles around if allowable
		$("div").click(
			function() {
				if ( $(this).hasClass("container") == false && $(this).hasClass("row") == false  )
				{										
					if ( adjacents = isCellNextToEmpty($(this)) ) // swap
					{
						if (adjacents.length == 2 )
						{
							// swap clicked and empty						
							var adjacentClass = $("#div"+adjacents[0]).attr('class');
							$("#div"+adjacents[1]).addClass( adjacentClass ).removeClass("empty");
							$("#div"+adjacents[0]).addClass("empty").removeClass("div1 div2 div3 div4 div5 div6 div7 div8 div9 div10 div11 div12 div13 div14 div15")
							updateText();
							showWinningScreen (checkIfUserWon());
						}
					}
				}
			}
		);
	}
);


/*
 * Tries to swap tiles by clicking on a random square in the grid.  If the move is legitimate, then the swap wil
 * occur, otherwise it will not.  Most of the time (i.e. probably 70-80%) the click will not make the swap.  This is why
 * we call this function many times in order to compensate for the high probability of inaction.
 */
function tryToSwapTiles()
{
	var number = Math.floor(Math.random() * 16) + 1; // 1 to 16	
	$("#div"+number).trigger("click");
	return;
}

/*
 * Return an array with the clicked cell # (i.e. 1 to 16) and the empty cell # if they're adjacent.
 * Otherwise the array will be empty.
 */
function isCellNextToEmpty(  cell )
{
	var clickedCellId = Number.parseInt(cell.attr('id').replace("div","")); // will be something like div15, need to remove "div" and make it into an integer
	var emptyCellId = Number.parseInt( $(".empty").attr('id').replace("div","") ); // will be something like div16, need to remove "div" and make it into an integer
	var coords = [];
	if ( clickedCellId == emptyCellId + 1 && clickedCellId % 4 != 1)
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
	}
	else if ( clickedCellId == emptyCellId - 1 && clickedCellId % 4 != 0 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
	}
	else if ( clickedCellId == emptyCellId + 4 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
	}
	else if ( clickedCellId == emptyCellId - 4 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
	}
	return coords;	
}


/* 
 * Redraw the hint text (i.e. call this after tile has been moved)
 * If the hintsOn global variable is set, then the hint text will be set (otherwise it will be empty)
 */
function updateText() {	

	for (var i=1; i<=16; i++)
	{			
		var text = $("#div"+i).attr('class').replace("div","").replace("empty", "empty (16)");
		if (!hintsOn)
			text = "";
		$("#div"+i).text( text );
	}
}

/*
 * if any of the divs ID do not match the div classes then the user has not won
 * (Note that div id 16 should match to empty)
 */
function checkIfUserWon() {	
	for (var i=1; i<=15; i++)
	{			
		var divClass = $("#div"+i).attr('class');
		if (divClass !== "div"+i)
		{
			return false;
		}
	}
	if ( $("#div16").attr('class') !== 'empty' )
	{
		return false;
	}

	return true;
}


/*
 * Shows a congragulatory message if true, otherwise message is empty
 */
function showWinningScreen( show )
{
	if (show)
	{
		$("#divwin").text("Congratulations!  You won!");	
	}
	else
	{
		$("#divwin").text("");
	}
}
