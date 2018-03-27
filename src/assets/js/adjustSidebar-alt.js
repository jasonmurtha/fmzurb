var adjustSideBar = {
	init: function() {  
    var $side = $('.iw_columns').filter('.large-5:first'),
    hero = $('.hero-blended:first').outerHeight() || 0,
    cntPdg = Foundation.MediaQuery.atLeast('xlarge') ? 58 : Foundation.MediaQuery.atLeast('large') ? 32 : 0,
    sdBar = $side.find('.sidebar:first').outerHeight(true);        
		if( Foundation.MediaQuery.atLeast('large') ) {     
      if(sdBar < hero) { $side.css('margin-top', -(sdBar+cntPdg)); }
      else if (hero > 0) { $side.css('margin-top', -(hero/2 +cntPdg)); }
			else { $side.css('margin-top', -50); }
		} 
    else {
			$side.removeAttr('style');
		}
	}
};

$(function(){
  if ($('.blog-detail-hero').length || $('.perspectives-detail-hero').length) {
    adjustSideBar.init();
    $(window).on('changed.zf.mediaquery', function() {
      adjustSideBar.init();
    });     
  }
});

