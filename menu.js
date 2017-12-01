function getMenu(page) {
	var menustring;
	var menulist = {"Home": "index.html", 
	                "Heat Source": "heatsource.html", 
	                "Ingredients": "ingredients.html", 
	                "Assembly": "assembly.html", 
	                "Virtual S'more": "virtualsmore.html", 
	                "Comments": "comments.html",
	                "Site Info": "siteinfo.html"};
 
	menustring = "<div id='menu-outer''><div class='table'><ul id='menu'>";
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
