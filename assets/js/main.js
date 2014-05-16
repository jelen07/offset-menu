$(function(){

});


// LESS setup, set options before less.js script
less = {
	env: "development",	// or "production"
	async: false,		// load imports async
	fileAsync: false,	// load imports async when in a page under a file protocol
	poll: 1000,			// when in watch mode, time in ms between polls
	functions: {},		// user functions, keyed by name
	dumpLineNumbers: "comments", // or "mediaQuery" or "all"
	relativeUrls: false,// whether to adjust url's to be relative
	// if false, url's are already relative to the entry less file
	// rootpath: ":/a.com/"// a path to add on to the start of every url resource
};


// VIEWPORT INFO
function showViewPortSize(display) {
	if(display) {
		var height = jQuery(window).height();
		var width = jQuery(window).width();
		jQuery('body').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;top:0px;right:0px;color:#fff;background:#000;padding:10px">Height: '+height+'<br>Width: '+width+'</div>');
		jQuery(window).resize(function() {
			height = jQuery(window).height();
			width = jQuery(window).width();
			jQuery('#viewportsize').html('Height: '+height+'<br>Width: '+width);
		});
	}
}
// showViewPortSize(true);
$('#viewportsize').on('click', function() {
	$('#viewportsize').hide();
})


// $('.push-menu-toggle').on('click', function() {
// 	$('#menu-left').toggle();
// 	$('#root-container').toggleClass('push-menu-open');
// });

if (window.navigator.standalone) {
	// Standalone mode
	// $("meta[name='apple-mobile-web-app-status-bar-style']").remove();
	$('#viewportsize').append('<br>Native app');
}
