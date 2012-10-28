/* *********************
Rocktaves | Oasis - 2012
********************* */

/* ********************************************
Javascript for Showing Content Holder Elements.
******************************************** */

// Function to Fade in and Hide concerned ContentHolders.
function showContentHolder(contentID) 
{
	switch(contentID)
	{
	case 'about': //About
		$("#contentHolderAbout").fadeIn();
		$("#contentHolderAbout").show();
		$("#contentHolderUnplugged").hide();
		$("#contentHolderAxetacy").hide();
		$("#contentHolderRocktavesCOM").hide();
		break;
	case 'unplugged': //Unplugged
		$("#contentHolderUnplugged").fadeIn();
		$("#contentHolderUnplugged").show();
		$("#contentHolderAbout").hide();
		$("#contentHolderAxetacy").hide();
		$("#contentHolderRocktavesCOM").hide();
		break;
	case 'axetacy': //Axetacy
	    $("#contentHolderAxetacy").fadeIn();
		$("contentHolderAxetacy").show();
	    $("#contentHolderAbout").hide();
		$("#contentHolderUnplugged").hide();
		$("#contentHolderRocktavesCOM").hide();
		break;
	case 'rocktavesCom': //Rocktaves.com
	    $("#contentHolderRocktavesCOM").fadeIn();
		$("contentHolderRocktavesCOM").show();
	    $("#contentHolderAbout").hide();
		$("#contentHolderUnplugged").hide();
		$("#contentHolderAxetacy").hide();
		break;
	}
}

// End of Javascript.