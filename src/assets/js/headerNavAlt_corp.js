// corproate nav routines
// both primary and subnav for now -- may break apart ir needed
// add highlighting to parent link in desktop nav (not dependant on ready event.)
$('#desktop-corporate-home').addClass('active');

// routine to display the subnav on hover
function navHoverOn(pNav){
  var sNav = pNav.replace(/^nav/,"subnav");
  if($('#'+pNav).children('a:first').hasClass('active')) {
    navHoverOff();
  }
  else if ($('#'+pNav+':hover').length || $('#'+sNav+':hover').length){
    $('.nav-main').not('#'+pNav).find('.current-hover').find('.menu').not('#'+sNav).removeClass('highlight').find('.current-hover').removeClass('current-hover');
    $('.nav-main').not('#'+pNav).find('.current-hover').removeClass('current-hover');  
    $('#'+pNav).not('.current-hover').addClass('current-hover');
    $('#'+sNav).not('.highlight').addClass('highlight').find('.no-bullet').addClass('current-hover');    
  }
}
function navHoverOff(){
  $('.nav-main').find('.current-hover').find('.highlight').removeClass('highlight');
  $('.nav-main').find('.current-hover').removeClass('current-hover');  
}

// mobile toggles
var $toggles = $('#subnav-perspectives-toggle, #subnav-research-toggle, #subnav-blog-toggle, #subnav-mediaroom-toggle, #subnav-about-toggle');
$toggles.each(function(){  
  $(this).on("click", function(){
    if (!Foundation.MediaQuery.atLeast('xlarge')) {
      var parentID = $(this).parent('li').attr('id');
      $('.subnav-item').not('#'+parentID).each(function(){ 
        if($(this).filter('[aria-expanded="true"]').length){   
          $(this).find('.mobile-nav-accordion-parent').triggerHandler('click');
        }
      });
    }
  })
});
 
// comment out this section for 2nd testbed
$('#nav-perspectives, #nav-research, #nav-blog, #nav-mediaroom, #nav-about, #subnav-perspectives, #subnav-research, #subnav-blog, #subnav-mediaroom, #subnav-about').each(function(){  
  $(this).mouseenter(function(){
    if (Foundation.MediaQuery.atLeast('xlarge')) {
      var id = $(this).attr('id'), i = id.match(/^sub/) ? id.replace(/^subnav/,"nav") : id; navHoverOn(i);
    }
    }).mouseleave(function(){ navHoverOff();})
});
 
$(".ribbon-rbo-section").on("mouseleave", function(){ 
    var $t = $(".ribbon-rbo-toggle"); 
    if($t.attr('aria-expanded') === "true"){$t.find('a').blur().triggerHandler('click');}
 });  
$(".nav-bus-section").on("mouseleave", function(){ 
    var $t = $(".nav-bus-toggle"); 
    if($t.attr('aria-expanded') === "true"){$t.blur().triggerHandler('click');}
 }); 
 

$(window).on('changed.zf.mediaquery', function() {    
  navHoverOff();
  $(".search-nav").removeClass("is-expanded");
  if (Foundation.MediaQuery.atLeast('xlarge')) {
    $("#top-bar").removeClass("is-mobile-expanded").attr("aria-expanded", "false");
  }
  else {
    $('#nav-main').attr("aria-expanded", "false").find('.is-accordion-submenu-parent').attr("aria-expanded", "false");
  }
});

$(function(){
 // $(".search-nav").addClass("has-transition");
  $("#search-mobile").on('on.zf.toggler', function(){ 
    $("#mobile-search").focus();
  }); 
});