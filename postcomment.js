/*
 * Name:        postcomment.js
 * Purpose:     Provides validation (plugin) support for tutorial appliclation
 * Author:      Bridget Disney
 * Created:		7 Dec 2017
 */
$(document).ready(function() {
	$("name").focus();
	
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			}
		} // end rules
	}) // end validate
}); // end ready
