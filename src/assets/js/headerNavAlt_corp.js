// corproate nav routines
// both primary and subnav for now -- may break apart ir needed
// add highlighting to parent link in desktop nav (not dependant on ready event.)
$('#desktop-corporate-home').addClass('active');

// routine to display the subnav on hover
function navHoverOff(){
  $('.nav-main').find('.current-hover').removeClass('current-hover');
  //$('#nav-main').find('.was-active').removeClass('was-active').addClass('active');
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
 
$('#nav-perspectives, #nav-research, #nav-blog, #nav-mediaroom, #nav-about, #subnav-perspectives, #subnav-research, #subnav-blog, #subnav-mediaroom, #subnav-about').each(function(){  
  $(this).mouseenter(function(){
    if (Foundation.MediaQuery.atLeast('xlarge')) {
      var i = $(this).attr('id').replace(/^(sub)?nav/,"section"); 
      if($('#'+i).length){
        $('#'+i).not('.active').addClass('current-hover');
        // $('#nav-main').find('.active').removeClass('active').addClass('was-active');
      }
    }
    }).mouseleave(function(){ navHoverOff();})
});
 
$(".ribbon-rbo-section").on("mouseleave", function(){ 
    var $t = $(".ribbon-rbo-toggle"); 
    if($t.attr('aria-expanded') === "true"){$t.find('a').blur().triggerHandler('click');}
 });  
$(".nav-bus-section").on("mouseleave", function(){ 
    var $t = $(".nav-bus-toggle"); 
    if($t.attr('aria-expanded') === "true"){$t.find('a').blur().triggerHandler('click');}
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