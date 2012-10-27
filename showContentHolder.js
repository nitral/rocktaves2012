/* *********************
Rocktaves | Oasis - 2012
********************* */

/* ********************************************
Javascript for Showing Content Holder Elements.
******************************************** */

// Function to Fade in and Hide concerned ContentHolders.
function showContent(contentID) 
{
	switch(contentID)
	{
	case 'a': //about
		$("#contentHolderAbout").fadeIn();
		$("#contentHolderRules").hide();
		$("#contentHolderParticipate").hide();
		break;
	case 'b': //rules
		$("#contentHolderRules").fadeIn();
		$("#contentHolderAbout").hide();
		$("#contentHolderParticipate").hide();
		break;
	case 'c': //participate
	    $("#contentHolderParticipate").fadeIn();
	    $("#contentHolderAbout").hide();
		$("#contentHolderRules").hide();
		break;
	}
}

// End of Javascript.