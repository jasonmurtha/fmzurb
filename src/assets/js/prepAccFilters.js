/*
	author: Sherry Carrero
*/
(function($) {
  $.fn.filterAccContent = function (options){
	 var accRefresh,
       defaults = {
       refreshRate: 50,
       dataF: '.filterform',
			 dataGP:'.accordion-pointer',
       dataE: '.accordion-item',
       dataL: '.accordion-title',
			 dataP: '.accordion-content',
			 dataC: 'li'
		},
		params = $.extend({}, defaults, options);
		params = $.metadata ? $.extend({}, params, this.metadata()) : params; 
    var 
      $frm = $(this).find(params.dataF),
      $acc = $(this).find(params.dataGP);        
	  postFilter = function (){            
		  $acc.find(params.dataE).each(function(){
				var item = $(this),
            sections = item.find(params.dataP), 
            matches = sections.find(params.dataC).not(".hide").length;
        if(matches >0) { 
          item.removeClass('hide');
          $acc.foundation('down', sections, true);
				}
				else {
          $acc.foundation('up', sections, false);
          item.addClass('hide'); 
				}
		  }); 
      return;
		},      
	  postReset = function (){
      $acc.find(params.dataE).each(function(){
        var item = $(this),
            sections = item.find(params.dataP);				
          item.removeClass('hide');
          $acc.foundation('up', sections, false);
		  }); 
      return;
		},
		applyFilter = function(){ 
      var topic = $frm.find('[name="filterTopic"]:checked').length ? $frm.find('[name="filterTopic"]:checked').val() : '',
          str = $frm.find('.filterField').length ? $.trim($frm.find('.filterField').val()).replace(/\s+/g, '|') : '',
          patt = new RegExp(str, "i");
      $acc.find(params.dataP).find(params.dataC).each(function(){
        var text = $(this).text();
        if(
           (str.length && patt.test(text) && !topic.length) || 
           (str.length && patt.test(text) && topic.length && $(this).attr('data-topic').match(topic)) || 
           (!str.length && $frm.find('[name="filterTopic"]:checked').length && $(this).attr('data-topic').match(topic))  ||
           (!str.length && !topic.length)
          ){ 
          $(this).removeClass('hide');
        }
        else {
          $(this).addClass('hide');
        }  
      });
      if($frm.find('[name="filterTopic"]:checked').length){console.log($frm.find('[name="filterTopic"]:checked').val())}
      if(str.length || topic.length){
        postFilter();
      }
      else {
        postReset();
      }
		}; 
    $frm.find(".filterReset").on("click", function(){
      clearTimeout(accRefresh);
      $frm.find('.filterField').val("");
      accRefresh = setTimeout(applyFilter(), 0);
    });
    $frm.find('.filterField').on("keyup", function(event){
      if (event.keyCode == 27) { return; } 	
      clearTimeout(accRefresh);
      accRefresh = setTimeout(applyFilter(), params.refreshRate);
    }); 
    $frm.find('[name="filterTopic"]').on("change", function(){
      clearTimeout(accRefresh);
      accRefresh = setTimeout(applyFilter(), 0);
    });        
    return this;            
  };   
})(jQuery);  


if($('.data-filterable').length) {  
  if($('.data-filterable').find('.accordion-pointer').length == $('.data-filterable').find('.filterform').length) { 
    $('.data-filterable').filterAccContent();
  }
}