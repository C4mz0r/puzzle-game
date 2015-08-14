$(document).ready (


	function()
	{
		$("div").click(
			function() {
				//alert($(this).hasClass());
				//$(this).addClass("empty");
				if ( $(this).hasClass("container") == false && $(this).hasClass("row") == false  )
				{
					
					//alert("is it div 1? " + $(this).is("#div1"));
					//alert("is 
//					alert(isCellNextToEmpty($(this)).length);
					if ( adjacents = isCellNextToEmpty($(this)) ) // swap
					{
						//alert(adjacents.length);
						if (adjacents.length == 2 )
						{
							// swap clicked and empty						
							var adjacentClass = $("#div"+adjacents[0]).attr('class'); //getAdjacentClass( adjacents[0] );  // find out what class div+adjacents[0] has...
							//alert('adj' + adjacentClass);
							$("#div"+adjacents[1]).addClass( adjacentClass ).removeClass("empty");
							$("#div"+adjacents[0]).addClass("empty").removeClass("div1 div2 div3 div4 div5 div6 div7 div8 div9 div10 div11 div12 div13 div14 div15");
							//$(this).addClass("empty").removeClass("div1 div2 div3 div4 div5 div6 div7 div8 div9 div10 div11 div12 div13 div14 div15");
						}
					}
				}
			}
		);


	}













);

function getAdjacentClass( item )
{
	
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
	if ( clickedCellId == emptyCellId + 1 )
	{
		coords.push(clickedCellId);
		coords.push(emptyCellId);	
		return coords;
	}
	else if ( clickedCellId == emptyCellId - 1 )
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

	//if (cell.hasClass("empty") )
	//	return false;
		//alert('clicked onm empty one');
	//else if (
		
}
