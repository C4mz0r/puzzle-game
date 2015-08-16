$(document).ready( function() {
$( "input:file" ).change( function() {
		var selectedFile = $('#input')[0].files[0];
		if (!selectedFile.type.match(/image.*/))
		{
			alert('You must select an image file');			
		} 
		else
		{
			var img = document.createElement("img");			
			img.src = window.URL.createObjectURL(selectedFile);
			$("#hidden").empty(); // need this to get rid of the current picture (otherwise next one didn't load)
			$("#hidden").append(img); // stick the image into a hidden div (otherwise was not seeing anything in the game area)
			$(".row>div").css("background-image", "url('"+ $("img").attr("src") + "')");
			$(".row>div").css("background-size", "800px 600px");				
			$(".row>.empty").css("background-image", "url('')");	
		}
	});
});
