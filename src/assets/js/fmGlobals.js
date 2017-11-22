var FM=FM || {},QueryParam={};
FM.form = {  						
  domain : 'http://www.freddiemac.com',	
  protocol : location.protocol, 			// returns http:
  hostname : location.hostname, 			// returns www.fm.com no port)
  pathname : location.pathname, 			// returns /test/test.htm
  pathElements: location.pathname.replace(/^\//,'').split("/"),   // returns array of path sections 
  hash : location.hash, 					// returns #part2 
  href : location.href, 					// returns http://www.fm.com/test.htm#part2
  querystr : location.search, 			// returns ?f=try&g=it if URL is: http://fm.com/js/aa.cgi?f=try&g=it
  referrer:  document.referrer,          // returns referring page, if available
  fmTimer:0,
  QueryPairs : location.search.replace(/^\?/,'').split(/\&/),
  setCookie: function (a,b,c,d){b||(b="");if(!c||isNaN(c))c=.5;d||(d="/");var e=new Date;e.setTime(e.getTime()+c*24*60*60*1e3),e=e.toGMTString(),a&&(document.cookie=a+"="+b+";expires="+e+";path="+d)},
  getCookie:	function (a){var b=new RegExp(a+"=[^;]+","i");return a&&document.cookie.match(b)?document.cookie.match(b)[0].split("=")[1]:""},
  deleteCookie: function (a,b){b||(b="/"),FM.form.getCookie(a)!==""&&FM.form.setCookie(a,"","-1",b)},
  limitText: function(a,b,m) {var v=$(a).val(),l=v.length,n=m-l,r=n==1?n+' char':n+' chars'; if(l>m){$(a).val(v.substring(0,m));}else {$(b).html(r);}},
  trimWhiteSpace: function(v){v = v.replace(/^\s+/,'');v = v.replace(/\s+$/,'');return v.replace(/\s{2,}/g,' ');},
  forceGlobalLinks :  function (a){var b=(FM.form.domain+a).replace(/(\/slearnctr|\/loanlookup)(uat)?/,"");return b},
  useOmni:function(){if(typeof somniTL === "function" && !FM.form.hostname.match(/localhost/) && !FM.form.pathElements[0].match(/^iw/)){return true} else{return false}},
  toggleClick:function(){var f=arguments;return this.each(function(){var it=0;$(this).on("click",function(){f[it].apply(this, arguments);it=(it+1) % f.length;});})},
  setTimer: function(routine,delay) { if(routine && delay>0){ clearTimeout(FM.form.fmTimer); FM.form.fmTimer = setTimeout(routine, delay);}},
  resetReveal: function(){if ($('.reveal:visible').length === 0) {$('.is-reveal-open').removeClass('is-reveal-open');}},
  offsetReveal: function(){var rev = $(".reveal[aria-hidden='false']").filter('.full');  if(rev.length){ rev.css('top', 0); console.log('reset top');}},
  omniNavLink:function(event){var $tg=$(event.target),$lk=$tg.closest('a,area'),trig='link',desc='',ltype='o',txt='',dir=FM.form.pathElements[0].length?FM.form.pathElements[0]:'homepage',locale=''; 
    if($lk.length<1) { return; } 
    var a='',b='',q='',hrf=$lk.attr('href')||'',tl=$lk.attr('title'),aria=$lk.attr('aria-label'),persona='',ariacontrols=$lk.attr('aria-controls'),id=$lk.attr('id');
    txt=$lk.text().trim().replace(/\r\n|\n|\r/g, "").replace(/\t|\s+/gm, " ").replace(/"/g,"");
    if(hrf){hrf=decodeURI(hrf);}	 
    if(txt==''&&tl){txt=tl;}
    if(txt==''&&aria){txt=aria;}
    if(txt==''&&hrf=='/'){txt:'home';}
    if($lk.closest('#ribbon').length){locale='ribbon|';}
    else if(hrf.match(/privacy\.truste\.com/) || $lk.closest('.acsClassicInvite').length){locale='foreseeinvite|';}	
    else if($lk.closest('#header-nav').length){
      locale='topnav|';  
      if($lk.closest('.secondary-nav').length&&id){txt=id;}
    }  	
    else if($lk.closest('.footer').length){locale='footer|';}  
    else if($lk.closest('.share-widget').length){locale='share|'; trig='share';}
    if($lk.closest('.tertiary-nav').length){desc='tertiarynav:';}
    else if($lk.closest('.modal-content').length){desc='modal:';}
    else if($lk.closest('.feature-block').length){desc='feature:';}
    else if($lk.closest('.orbit').length){desc='carousel:';}
    else if($lk.closest('.accordion-faq').length){desc='faq:';}
    else if($lk.closest('.accordion-pointer, .accordion').length){desc='accordion:';}
    else if($lk.closest('.tabs-content, .tabs').length){desc='tab:';}	
    else if($lk.closest('.hero, hero-blended').length){desc='hero:';} 
    else if($lk.closest('.footer-promo').length){desc='prefooter:';}
    else if($lk.closest('aside').length){desc='sidebar:';}    
    if(locale==''&&desc==''){desc='content:';}    
    if(locale==''){locale=dir+'|';} 
    if(hrf.match(/\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|do[ct]x?|xls[mx]?|pptx?|vsd|rtf|txt|xml|csv)(\?.*)?(#.*)?$/i)){ltype='d';}	 
    else if(hrf.match(/^https/i)&&!hrf.match(/slearnctr|loanlookup/i)){ltype='e';}
    else if(hrf.match(/^http/i)&&!hrf.match(/www\.freddiemac\.com/i)){ltype='e';}
    else{hrf=hrf.replace(/^https?:\/\/(www\.freddiemac\.com)?/i,'').replace(/^\//,'').replace(/index.html?/i,'');}
    if(txt==''&&$lk.has('img')){ var $im=$lk.find('img:first');
      if($im.attr("alt")){ txt='image:'+$im.attr("alt")}
      else if($im.attr("title")){ txt='image:'+$im.attr("title")}
      else if(tl){txt='image:'+tl;}
      else if(ariacontrols){txt='image:'+ariacontrols;}
      if($lk.closest('.video-modal').length){txt='video:'+txt;}      
    }
    if (txt==''&&ariacontrols){txt=ariacontrols;}
    if (txt==''){txt=hrf.length?hrf:'unidentified link';}    
    txt=txt.slice(0,100).toLowerCase();
    if(FM.form.pathElements[0]=='search'){
      a=QueryParam['as_q']||"";b=QueryParam['q']||"";q=a!==""?a.toLowerCase():b.toLowerCase();
      q=q.replace(/\+inmeta:.+/ig,'').replace(/"/g,"").replace(/\+|\s+/g, " ").replace(/^\s|\s$/g,"");
      if(q.length){ locale='search|';trig='search';
        if($lk.closest('.keyMatchTable').length){desc=q+'|keymatch:';}
        else if($lk.closest('.main-results').length){desc=q+'|result:';}
        else if($lk.closest('.dn-attr').length){desc=$(this).closest('#attr_1').length?q+'|category:':q+'|filetype:';}
        else if ($lk.closest('.search-stat-bar').length){desc=q+'|stat-bar:';} 
      }
    }
    if (FM.form.useOmni()){ 
      somniTL(event,ltype,hrf,trig,locale+desc+txt,persona);
      // console.log('nav link type:'+ltype+', link name:'+ locale+desc+txt+'.'); 
    }
  } 
};
for (var x in FM.form.QueryPairs) {
  QueryParam[decodeURIComponent(FM.form.QueryPairs[x].split('=')[0] || "")] = decodeURIComponent(FM.form.QueryPairs[x].split('=')[1] || "");
};

$("input[type='text'],input[type='search'],input[type='email']").on('change',function(){var v = $(this).val();$(this).val(FM.form.trimWhiteSpace(v));});
// process offsite
$('[href]').filter('.offsite, [rel="external"]').each(function(){
  var x = $(this)[0].hasAttribute('rel') ? $(this).attr('rel') : '',  y = x!=='' ? 'noopener noreferrer '+x : 'noopener noreferrer';	
  $(this).attr('target','_blank').attr('rel',y); 
  
});
// fix https relative urls
if(FM.form.protocol === 'https:') {		
  $('#header-nav,.footer').find('a[href^="/"]').each(function(){
	  $(this).attr('href', FM.form.forceGlobalLinks($(this).attr('href')));
  });		
};
if (FM.form.useOmni()){ 
  $(document).on("click",FM.form.omniNavLink); 
}
// process file markers
if (FM.form.pathElements[0] !== "search") { 
	$(".content-band, .two-column-layout").find("a[href]").not('.plain').not(":has(img)").not(":has(.callout)").not(":has(.card)").not(function(){
    return (/.+\.(html?|#|javascript)(\?.*)?(#.*)?$/i).test($(this).attr('href'));
  }).filter(function(){
    return (/.+\.(pdf|zip|csv|doc|xls|ppt)[mx]?(\?.*)?(#.*)?$/i).test($(this).attr('href'));
  }).each(function(){ 
    var h=$(this).attr('href').toLowerCase().replace(/.+\.(pdf|zip|csv|doc|xls|ppt)[mx]?(\?.*)?(#.*)?$/, "$1"); 
    if ($(this).is('.button')&& h.length) { $(this).append(" <span class='icon-file'>"+h+"</span>") }     
    else if($(this).closest('.data-filterable').length==0) { $(this).append(" <span class='icon-file'>"+h+"</span>"); }
  });
} 

$(function(){  
 // fix for full reveals not restoring scrollbar on close, may not be needed if fixed by Zurb. Animation takes 250ms
  $(window).on('closed.zf.reveal', function() {
      FM.form.resetReveal;
      FM.form.setTimer = setTimeout(FM.form.resetReveal, 400);
  }).on('open.zf.reveal', function() { 
      FM.form.setTimer = setTimeout(FM.form.offsetReveal, 350);  
  }).on('resizeme.zf.trigger', function() { 
      FM.form.setTimer = setTimeout(FM.form.offsetReveal, 300);  
  }).on('change.zf.tabs', function() { $(window).trigger('resize'); });
  // Site Catalyst trigger
  if (FM.form.useOmni()){
    s_somni.t(); 
  }
});
