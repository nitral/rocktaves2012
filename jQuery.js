/* *********************
Rocktaves | Oasis - 2012
********************* */

/* ***************************************************
Javascript jQuery for Showing Content Holder Elements.
*************************************************** */

// Function to detect a click and call showContent Function passing contentHolder ID.
$(document).ready ( function(){
	$("a#navElementAbout").click(function (){
	showContentHolder('about');
	return false;
	});
});

$(document).ready ( function(){
	$("a#navElementUnplugged").click(function (){
	showContentHolder('unplugged');
	return false;
	});
});

$(document).ready ( function(){
	$("a#navElementAxetacy").click(function (){
	showContentHolder('axetacy');
	return false;
	});
});

$(document).ready ( function(){
	$("a#navElementRocktavesCOM").click(function (){
	showContentHolder('rocktavesCom');
	return false;
	});
});