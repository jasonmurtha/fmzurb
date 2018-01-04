var adjustSideBar = {
	init: function() {  
    var $side = $('.content-band:first > .row > .large-5'),
    hero = $('.hero-blended:first').outerHeight() || 0,
    cntBand = parseInt($('.content-band:first').css('padding-top').replace("px", "")) || 0,
    sdBar = $side.find('.sidebar:first').outerHeight(true);        
		if( Foundation.MediaQuery.atLeast('large') ) {     
      if(sdBar < hero) { $side.css('margin-top', -(sdBar+cntBand)); }
      else if (hero > 0) { $side.css('margin-top', -(hero/2 +cntBand)); }
			else { $side.css('margin-top', -50); }
		} 
    else {
			$side.removeAttr('style');
		}
	}
},
adjustSideNav = {
	init: function() { 
    var $side = $('.content-band:first > .row > .large-5'),
    pgTitle = $('.page-title:first').outerHeight() || 0,
    cntBand = parseInt($('.content-band:first').css('padding-top').replace("px", "")) || 0;
		if( Foundation.MediaQuery.atLeast('large') && pgTitle > 0) {
			$side.css('margin-top', -(pgTitle/2 +cntBand));
		} 
    else {
			$side.removeAttr('style');
		}
	}
};

$(function(){
  if($('.tertiary-nav').length) {
    adjustSideNav.init();
    $(window).on('changed.zf.mediaquery', function() {
      adjustSideNav.init();
    });    
  }
  else if ($('.blog-detail-hero').length || $('.perspectives-detail-hero').length) {
    adjustSideBar.init();
    $(window).on('changed.zf.mediaquery', function() {
      adjustSideBar.init();
    });     
  }
});

