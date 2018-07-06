// capital markets nav routines
// add highlighting to parent link in ribbon nav (not dependant on ready event.)
$('#desktop-markets-home').addClass('active');

// routine to display the subnav on hover
function navHoverOff(){
  $('.nav-main').find('.current-hover').removeClass('current-hover');
}
// mobile toggles
var $toggles = $('#subnav-creditrisk-toggle, #subnav-debt-toggle, #subnav-mbs-toggle, #subnav-seasonedloans-toggle');
$toggles.each(function(){  
  $(this).on("click", function(){
    if (!Foundation.MediaQuery.atLeast('xlarge')) {
      var parentID = $(this).parent('li').attr('id');
      $('.subnav-item').not('#'+parentID).each(function(){ 
        if($(this).attr('aria-expanded') === "true"){   
          $(this).find('.mobile-nav-accordion-parent').triggerHandler('click');
        }
      });
    }
  })
});
 
$('#nav-creditrisk, #nav-debt, #nav-mbs, #nav-seasonedloans, #subnav-creditrisk, #subnav-debt, #subnav-mbs, #subnav-seasonedloans').each(function(){  
  $(this).mouseenter(function(){
    if (Foundation.MediaQuery.atLeast('xlarge')) {
      var i = $(this).attr('id').replace(/^(sub)?nav/,"section"); 
      if($('#'+i).length){
        $('#'+i).not('.active').addClass('current-hover');
      }
    }
    }).mouseleave(function(){ navHoverOff();})
});

$(".ribbon-rbo-section").on("mouseleave", function(){ 
    var $t = $(".ribbon-rbo-toggle"); 
    if($t.attr('aria-expanded') === "true"){
      $t.find('a').blur().triggerHandler('click');
    }
 });

$(window).on('changed.zf.mediaquery', function(e, nS, oS){
  if((nS==="xlarge" || nS==="xxlarge")){
    $('.is-accordion-submenu-parent[aria-expanded="true"]').each(  
      function(){   
        $(this).closest('[data-accordion-menu]').foundation('hideAll'); 
      }
    );
    if ($('#nav-main').attr('aria-expanded') === "true") {
      $('#nav-main').foundation('toggle');
    }
    if ($('#body-wrapper.is-mobile-expanded').length) {
      $('#body-wrapper').foundation('toggle');
    }
    if ($('#nav-search').attr('aria-expanded') === "true") {
      $('#nav-search').foundation('toggle');
    }
  } 
  else if(oS==="xlarge" || oS==="xxlarge"){
    navHoverOff(); 
  }
});

$(function(){  
  $('#nav-main, #body-wrapper').attr('aria-expanded', "false");
  $("#nav-search").on('on.zf.toggler', function(){ 
    $("#mobile-search").focus();
  });
  $("#search-toggle").on('click', function(){ 
    if ($('#body-wrapper').attr('aria-expanded') === "true") {
      if ($('#nav-main').attr('aria-expanded') === "true") {
        $('#nav-main').foundation('toggle');
      }
      $('#body-wrapper').foundation('toggle');
    }
  });
  $("#menu-toggle").on('click', function(){ 
    if ($('#nav-search').attr('aria-expanded') === "true") {
      $('#nav-search').foundation('toggle');
    }
  });
  $("#nav-main").on('off.zf.toggler', function(){ 
    if ($('#body-wrapper.is-mobile-expanded').length) {
      $('#body-wrapper').foundation('toggle');
    }
  });
});