/*
 * Name:        menu.js
 * Purpose:     Provides menu support for tutorial appliclation
 * Author:      Bridget Disney
 * Created:		7 Dec 2017
 */
function getMenu(page) {
	var menustring;
	
	// Set up the menu list so that each item on the menu directs the user to the correct page
	var menulist = {"Home": "smore/index.html", 
	                "Heat Source": "heatsource.html", 
	                "Ingredients": "ingredients.html", 
	                "Assembly": "assembly.html", 
	                "Virtual S'more": "virtualsmore.html", 
	                "Comments": "comments.html",
	                "Site Info": "siteinfo.html"};
 
    // Set the menu string so that the active page is highlighted
	menustring = "<div id='menu-outer''><div class='menutable'><ul id='menu'>";
	$.each(menulist, function(key, value) {
		if (page == key) {
			menustring += "<li class='active'><a href=" + value + ">" + key + "</li>";
		} else {
			menustring += "<li><a href=" + value + ">" + key + "</li>";
		}
    });
	menustring += "</ul></div></div>";
	return menustring;
}
