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

	// Basic click interception for site navigation.
	$('.site-nav a').click(function () {
		loadSection(this.href, false);
		return false;
	});
	
	function loadSection(url, back) {
		$.ajax({
			complete: function (jqXHR, textStatus) {
				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				
			},
			success: function (data, textStatus, jqXHR) {
				$('#ajax-target').animate({
					left: '33%',
					opacity: 0
				}, 400, function () {
					$(this).empty().append($(data).find('section')).animate({
						left: 0,
						opacity: 1
					}, 400);
				});
				if (!back) {
					history.pushState(null, null, url);
				}
				_gaq.push['_trackPageview', url];
			},
			url: url
		});
	}
	
	// Handle Back button usage.
	window.addEventListener("popstate", function (e) {
    	loadSection(location.pathname, true);
	});
	
});