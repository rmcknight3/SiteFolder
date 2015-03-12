var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


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

//?????  why not "e.keyUp" instead of 'e.which'?
$(document).keyup(function(e){
	if (e.which == 27){
		$("#overlay").hide();

	}
	console.log(e);

});

// '.hover()' to change background color of navigation links on mouse hover
$("li a").hover(
	function(){
		//change to this color when mouse enters element
    	$(this).css("background-color", "white");
    }, 
    function(){
    	//change back when mouse leaves element
    	$(this).css("background-color", "#fa0000");
}); 










