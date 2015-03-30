var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p class='imgCaption'></p>");


//Adds (appends) $overlay variable to the document with the '$image' var that will be placed within the <div> tags
$overlay.append($image);

//Add overlay to body of document
  $("body").append($overlay);
  $overlay.append($caption);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  //prevent default action of opening new page
  event.preventDefault();
  var imageLocation = $(this).attr("href");
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

  //Show the overlay
  $overlay.show();
  //code here


  //Get child alt attribute for the caption text
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
  //hide overlay
$overlay.click(function(){
  $(this).hide();
});

//uses escape key as a way to close overlay
$(document).keyup(function(e){
	if (e.which == 27){
		$("#overlay").hide();

	}
	console.log(e);

});

// '.hover()' to change background color of navigation links on mouse hover
$(".navigation a").hover(
	function(){
		//change to this color when mouse enters element
      // $(this).css("border", "solid #000000 1px")
      $(this).css("background-color", "#8bafFF");
      $(this).css("color", "#000000");
    }, 
    function(){
    	//change back when mouse leaves element
      // $(this).css("border", "none")
      $(this).css("background-color", "#FFc34e");
      $(this).css("color", "#000000");
}); 








