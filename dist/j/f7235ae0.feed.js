/**
 * This is the RSS feed management code for matthewpennell.com.
 * It is loaded by main.js via Require.js.
 */

define([], function () {
	
	var last_fm_api_key = 'f809fa776ffb24285a6dd7a080c93c92',
		last_fm_track = [];
	
	function loadLastFm() {
		
		// Request the last 10 listened tracks.
		$.getJSON('http://ws.audioscrobbler.com/2.0/?callback=?', {
			method	: 'user.getrecenttracks',
			api_key	: last_fm_api_key,
			user	: 'Watchmaker',
			limit	: 25,
			format	: 'json'
		}, function (data) {
			var $container = $('#last-fm');
			for (var i in data.recenttracks.track) {
				$.getJSON('http://ws.audioscrobbler.com/2.0/?callback=?', {
					method	: 'track.getInfo',
					api_key	: last_fm_api_key,
					artist	: data.recenttracks.track[i].artist['#text'],
					track	: data.recenttracks.track[i].name,
					format	: 'json'
				}, function (data) {
					if (data.track && data.track.album && data.track.artist) {
						$container.append('<div class="last-fm" style="box-shadow: 0px 2px 2px #999; text-align: center; font-size: 12px; padding: 10px; background: #fff; float: left; margin: 10px; width: 130px;">'
							+ '<a href="' + data.track.url + '">'
							+ '<img width="126" height="126" src="' + data.track.album.image[1]['#text'] + '">'
							+ '<br><br><em>' + data.track.name + '</em><br>' + data.track.artist.name
							+ '</a>'
							+ '</div>');
					}
				});
			}
		});
		
	}
	
	return {
		lastfm: loadLastFm
	};

});