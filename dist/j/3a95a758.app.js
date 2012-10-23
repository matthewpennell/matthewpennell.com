/**
 * This is the primary workhorse JavaScript code for matthewpennell.com.
 * It is loaded by main.js via Require.js.
 * 
 * Within the define() call, the first parameter is an array of strings representing
 * paths to dependencies, expressed without a suffix (e.g. ['./ajax']). These objects are
 * then made available within the function by passing them as named parameters (e.g. function (ajax) {...}; )
 * 
 * The return value represents the object, value or function to be used witin main.js.
 */

define([], function () {
	// Basic click interception
	$('nav a').click(function () {
		var url = this.href;
		$.ajax(url, {
			error: function (obj, status, error) {
				// TODO: Add error handling code here.
			},
			success: function (data, status, obj) {
				$('.content').html($(data).filter('.content'));
				history.pushState({}, '', url);
			}
		});
		return false;
	});
});