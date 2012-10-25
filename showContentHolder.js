/* *********************
Rocktaves | Oasis - 2012
********************* */

/* ********************************************
Javascript for Showing Content Holder Elements.
******************************************** */

// Function to show the passed content holder element.
function showContentHolder(contentHolderID)
{
	document.getElementById("contentHolderAbout").style.visibility = "hidden";
	document.getElementById("contentHolderRules").style.visibility = "hidden";					// First hide all content holder elements.
	document.getElementById("contentHolderParticipate").style.visibility = "hidden";
	
	document.getElementById("contentHolderAbout").style.display = 'none';
	document.getElementById("contentHolderRules").style.display = 'none';						// Then remove display, so they don't interfere in layout.
	document.getElementById("contentHolderParticipate").style.display = 'none';
	
	if(contentHolderID == -1)																	// Lets Body tag use this function to hide all content holder elements.
	{
		;
	}
	else
	{
		document.getElementById(contentHolderID).style.display = 'block';						// Change display of selected content holder element.
		document.getElementById(contentHolderID).style.visibility = "visible";					// Make selected content holder visible.
	
		fadeIn(contentHolderID);																// Fade in function to animate fade in effect.
	}
}

// Function to set opacity of content holder element passed.
// This function is called repeatedly from the function fadeIn().
function setOpacity(opacity, contentHolderID)
{
	contentHolderID.style.opacity = opacity;													// Sets opacity of content holder selected to a value passed to the function.
	contentHolderID.style.MozOpacity = opacity;
	contentHolderID.style.KhtmlOpacity = opacity;
	contentHolderID.style.filter = 'alpha(opacity=' + (opacity * 100) + ');';					// I.E. uses opacity scale of 0 - 100 rather than 0 - 1.
}

// Function to animate content holder element giving a fade in effect.
function fadeIn(contentHolderID)
{
	duration = 1000;																			// Sets the milliseconds it takes for the animation to complete.
	
	for(i = 0 ; i <= 1 ; i += 0.01)
	{
		setTimeout("setOpacity(" + (i) + "," + contentHolderID + ")", i * duration);			// Calls the setOpacity() function to set opacity after a certain duration.
	}																							// using (i * duration) sets a 'increasing gradient' and smooths the transition.
}

// End of Javascript.