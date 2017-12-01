/*
 * Name:        postcomment.js
 * Purpose:     Used as supporting javascript for an application using jquery validation.
 * Author:      Murache
 * Modified by: Bridget Disney (5 Oct 2017) for IS_LT 7356
 *              Added code to set the initial focus to arrival_date.
 * 				Added rules to make all text fields required.
 * 				Added rules to ensure the correct format for arrival_date, email, and phone.
 * 				Added rule to make sure that only digits are entered for nights.
 * 				Added method positiveNumber to make sure that the number entered is greater than 0.
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
