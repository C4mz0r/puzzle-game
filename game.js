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
	console.log("Clicked on grd " + number);
	$("#div"+number).trigger("click");
	return;
}

function isCellNextToEmpty(  cell )
{
	var clickedCellId = null;
	if (cell.is("#div1"))
		clickedCellId = 1;
	else if (cell.is("#div2"))
		clickedCellId = 2;
	else if (cell.is("#div3"))
		clickedCellId = 3;
	else if (cell.is("#div4"))
		clickedCellId = 4;
	else if (cell.is("#div5"))
		clickedCellId = 5;	
	else if (cell.is("#div6"))
		clickedCellId = 6;
	else if (cell.is("#div7"))
		clickedCellId = 7;
	else if (cell.is("#div8"))
		clickedCellId = 8;
	else if (cell.is("#div9"))
		clickedCellId = 9;
	else if (cell.is("#div10"))
		clickedCellId = 10;
	else if (cell.is("#div11"))
		clickedCellId = 11;
	else if (cell.is("#div12"))
		clickedCellId = 12;
	else if (cell.is("#div13"))
		clickedCellId = 13;
	else if (cell.is("#div14"))
		clickedCellId = 14;
	else if (cell.is("#div15"))
		clickedCellId = 15;
	else if (cell.is("#div16"))
		clickedCellId = 16;

	var emptyCellId = null;
	if ($("#div1").is(".empty"))
		emptyCellId = 1;
	else if ($("#div2").is(".empty"))
		emptyCellId = 2;
	else if ($("#div3").is(".empty"))
		emptyCellId = 3;
	else if ($("#div4").is(".empty"))
		emptyCellId = 4;
	else if ($("#div5").is(".empty"))
		emptyCellId = 5;
	else if ($("#div6").is(".empty"))
		emptyCellId = 6;
	else if ($("#div7").is(".empty"))
		emptyCellId = 7;
	else if ($("#div8").is(".empty"))
		emptyCellId = 8;
	else if ($("#div9").is(".empty"))
		emptyCellId = 9;
	else if ($("#div10").is(".empty"))
		emptyCellId = 10;
	else if ($("#div11").is(".empty"))
		emptyCellId = 11;
	else if ($("#div12").is(".empty"))
		emptyCellId = 12;
	else if ($("#div13").is(".empty"))
		emptyCellId = 13;
	else if ($("#div14").is(".empty"))
		emptyCellId = 14;
	else if ($("#div15").is(".empty"))
		emptyCellId = 15;
	else if ($("#div16").is(".empty"))
		emptyCellId = 16;
	console.log("Empty one is " + emptyCellId);


	var coords = [];
	if ( clickedCellId == emptyCellId + 1 && clickedCellId % 4 != 1)
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
		return coords;
	}
	else if ( clickedCellId == emptyCellId - 1 && clickedCellId % 4 != 0 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
		return coords;
	}
	else if ( clickedCellId == emptyCellId + 4 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
		return coords;
	}
	else if ( clickedCellId == emptyCellId - 4 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
		return coords;
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
		console.log("you won");
		$("#divwin").text("Congratulations!  You won!");	
	}
	else
	{
		$("#divwin").text("");
	}
}
