// corproate nav routines
// both primary and subnav for now -- may break apart ir needed

// add highlighting to parent link in desktop nav (not dependant on ready event.)
$('#desktop-corporate-home').addClass('active');

// routine to display the subnav on hover
function navHoverOff(){
  $('.nav-main').find('.current-hover').removeClass('current-hover');
}

// mobile toggles
var $toggles = $('#subnav-perspectives-toggle, #subnav-research-toggle, #subnav-blog-toggle, #subnav-mediaroom-toggle, #subnav-about-toggle');
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
 
$('#nav-perspectives, #nav-research, #nav-blog, #nav-mediaroom, #nav-about, #subnav-perspectives, #subnav-research, #subnav-blog, #subnav-mediaroom, #subnav-about').each(function(){  
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
$(".nav-bus-section").on("mouseleave", function(){ 
    var $t = $(".nav-bus-toggle"); 
    if($t.attr('aria-expanded') === "true"){
      $t.find('a').blur().triggerHandler('click'); 
    }
 }); 
 

$(window).on('changed.zf.mediaquery', function(e, nS, oS){
  if((nS==="xlarge" || nS==="xxlarge")){
    if ($('#body-wrapper.is-mobile-expanded').length) {
      $('#body-wrapper').foundation('toggle');
    }
    if ($('#nav-search').attr('aria-expanded') === "true") {
      $('#nav-search').foundation('toggle');
    }
  } 
  else if((oS==="xlarge" || oS==="xxlarge") && (nS==="small" || nS==="medium" || nS==="large")){
    navHoverOff(); 
    $('#nav-main, #body-wrapper').attr('aria-expanded', "false");
  }
});

$(function(){  
  $('#nav-main, #body-wrapper').attr('aria-expanded', "false");
  $("#nav-search").on('on.zf.toggler', function(){ 
    $("#mobile-search").focus(); 
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