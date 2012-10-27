/* *********************
Rocktaves | Oasis - 2012
********************* */

/* ***************************************************
Javascript jQuery for Showing Content Holder Elements.
*************************************************** */

// Function to detect a click and call showContent Function passing contentHolder ID.
$(document).ready ( function(){
	$("a#navElementAbout").click(function (){
	showContent('a');
	return false;
	});
});

$(document).ready ( function(){
	$("a#navElementRules").click(function (){
	showContent('b');
	return false;
	});
});

$(document).ready ( function(){
	$("a#navElementParticipate").click(function (){
	showContent('c');
	return false;
	});
});