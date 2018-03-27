function isElementInViewport(item) {
  var el = item[0];
  if (el.getBoundingClientRect) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } else {
    return true;
  }
}

function animTriggers(elem) {
  if (isElementInViewport(elem)) {
    elem.find('.mui-enter').addClass('mui-enter-active');
  } 
  else {
    elem.find('.mui-enter-active').removeClass('mui-enter-active');
  }
}

function runSeries(animClass) {
  setTimeout(function(){$('.animate-1').addClass(animClass)}, 100);
  setTimeout(function(){$('.animate-2').addClass(animClass)}, 400);
  setTimeout(function(){$('.animate-3').addClass(animClass)}, 700);
  setTimeout(function(){$('.animate-4').addClass(animClass)}, 1000);
  setTimeout(function(){$('.animate-1,.animate-2,.animate-3,.animate-4').removeClass(animClass)}, 1300);
}

function anim(elem, animClass) {
  setTimeout(function(){elem.addClass(animClass)}, 100);
  setTimeout(function(){elem.removeClass(animClass)}, 300);
}
