/**
 * This is the primary workhorse JavaScript code for matthewpennell.com.
 * It is loaded by main.js via Require.js.
 * 
 * Within the define() call, the first parameter is an array of strings representing
 * paths to dependencies, expressed without a suffix (e.g. ['./ajax']). These objects are
 * then made available within the function by passing them as named parameters (e.g. function (ajax) {...}; )
 * 
 * The return value represents the object, value or function to be used within main.js.
 */

define([], function () {

	// Basic click interception
	$('.site-nav a').click(function () {
		var url = this.href;
		$('#ajax-target').load(url + ' section', function () {
			history.pushState({}, '', url);
			_gaq.push['_trackPageview', url];
		});
		return false;
	});
	
	// Make the Back button work with Ajax-powered HTML5 pushState.
	addEvent(window, 'popstate', function (event) {
		if (event.state) {
			
		}
		
	});

});