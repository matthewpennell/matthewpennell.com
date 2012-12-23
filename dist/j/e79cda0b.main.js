require.config({
  paths: {
    jquery: 'vendor/jquery.min'
  }
});

// Code to deal with loading various bits of content via RSS, Ajax navigation, history state, etc.
require(['feed'], function (feed) {
	
	// Basic click interception for site navigation.
	$('.site-nav a').click(function () {
		loadSection(this.href, this.getAttribute('data-title'));
		return false;
	});
	
	function loadSection(url, title) {
		$.ajax({
			error: function (jqXHR, textStatus, errorThrown) {
				
			},
			success: function (data, textStatus, jqXHR) {
				$data = $(data);
				$('#ajax-target').animate({
					left: '33%',
					opacity: 0
				}, 400, function () {
					$(this).empty().append($data.find('section')).animate({
						left: 0,
						opacity: 1
					}, 400);
					$('title').empty().append($data.find('title'));
				});
				history.pushState({
					mp: true
				}, title, url);
				_gaq.push['_trackPageview', url];
				// Call any section specific feeds.
				populateFeeds(title);
			},
			url: url
		});
	}
	
	// Handle Back button usage.
	$(window).bind("popstate", function (e) {
		if (e.state && e.state.mp) {
	    	loadSection(location.pathname);
		}
	});
	
	function populateFeeds(title) {
		switch(title) {
			case 'Musician':
				feed.lastfm();
				break;
		}
	}
	
});
