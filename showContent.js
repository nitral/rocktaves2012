// Javascript for Rocktaves | Oasis - 2012



var about_text = "The sudden rush of blood to your head wakes you up with a kick. The bright lights push you forward. The crazed crowd pulls you further. You look around yourself in a daze. You're on a stage that most others only dream of. This is Rocktaves 2011.</p>p>Rocktaves is the rock festival of BITS Pilani. It is without a doubt one of the most prestigious rock competitions in India. Rocktaves is a major event of the cultural festival Oasis, which also includes other events such as a solo guitar contest called Axetacy, and an acoustic unplugged event called Oasis Unplugged.</p><p>For decades, Rocktaves has enjoyed its lofty position as one of the most venerated of all platforms in the fairly nascent Indian rock scene. Its claims to fame are numerous. Rocktaves is in factresponsible for launching some of the biggest names in the Indian rock scene today: Parikrama, Prestorika, Them Clones, The Superfuzz and Euphoria are just some of those names.</p><p>You could be next.</p>"


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