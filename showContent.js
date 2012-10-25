// Javascript for Rocktaves | Oasis - 2012



var about_text = "<p>Rocktaves is the annual semi-professional rock festival of BITS Pilani. It is without a doubt one of the most prestigious rock competitions in India. Rocktaves is a major event of the cultural festival Oasis, which also includes other musical events such as the solo guitar contest called \"Axetacy\", and the acoustic unplugged event called \"Oasis Unplugged\".</p><p>For decades, Rocktaves has strived towards excellence, pioneering and redefining the fairly young and volatile Indian rock scene. Rocktaves is, in fact, responsible for launching some of the biggest names in the Indian rock scene today; Parikrama, Prestorika, Them Clones, The Superfuzz and Euphoria are just some of the footnotes in this epic musical odyssey. It just might be your turn now...</p>";

$(document).ready(function(){

});

function showContent(contentID) 
{
	switch(contentID)
	{
	case 'a': //about
		$("#about").fadeIn();
		$("#rules").hide();
		$("#participate").hide();
		break;
	case 'b': //rules
		$("#rules").fadeIn();
		$("#about").hide();
		$("#participate").hide();
		break;
	case 'c': //participate
	    $("#participate").fadeIn();
	    $("#about").hide();
		$("#rules").hide();
		break;
	}
}













/* TEST for Showing and Hidding Div Tags */

/*
function showContentAbout()
{
	document.getElementById("contentAbout").style.visibility = "visible";
	document.getElementById("contentRules").style.visibility = "hidden";
	document.getElementById("contentParticipate").style.visibility = "hidden";	
}

function showContentRules()
{
	document.getElementById("contentAbout").style.visibility = "hidden";
	document.getElementById("contentRules").style.visibility = "visible";
	document.getElementById("contentParticipate").style.visibility = "hidden";	
}

function showContentParticipate()
{
	document.getElementById("contentAbout").style.visibility = "hidden";
	document.getElementById("contentRules").style.visibility = "hidden";
	document.getElementById("contentParticipate").style.visibility = "visible";	
}
*/