
// faking the nav highlight settings since we don't have a cms to do this for us locally.

function fakeNav(){
  // this will be automated on the backend, faking it for now to show different highlighting/subnavs
  var p = location.pathname;
  if (p.match(/seller_servicer/)) { 
    $('#nav-seller-servicers').children('a').addClass('active');
    $('#subnav-seller-servicers').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/uw/)) {$('#subnav-seller-servicers-uw').addClass('active');}
    else if (p.match(/purchase/)) {$('#subnav-seller-servicers-purchase').addClass('active');}
    else if (p.match(/reporting/)) {$('#subnav-seller-servicers-reporting').addClass('active');}
    else if (p.match(/asset/)) {$('#subnav-seller-servicers-asset').addClass('active');}
    else if (p.match(/tech/)) {$('#subnav-seller-servicers-tech').addClass('active');}
    else if (p.match(/guide/)) {$('#subnav-seller-servicers-guide').addClass('active');}
    else if (p.match(/legal/)) {$('#subnav-seller-servicers-legal').addClass('active');}
  }
  else if (p.match(/investors/)) { 
    $('#nav-investors').children('a').addClass('active');
    $('#subnav-investors').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/calendars/)) {$('#subnav-investors-calendars').addClass('active');}
    else if (p.match(/presentations/)) {$('#subnav-investors-presentations').addClass('active');}
    else if (p.match(/data/)) {$('#subnav-investors-performance').addClass('active');}
    else if (p.match(/lookup/)) {$('#subnav-investors-lookup').addClass('active');}
    else if (p.match(/investments|certs/)) {$('#subnav-investors-investments').addClass('active');}
  }
  else if (p.match(/borrowers|lenders/)) {
    $('#nav-borrowers').children('a').addClass('active');
    $('#subnav-borrowers').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/conventional/)) {$('#subnav-borrowers-conventional').addClass('active');}   
    else if (p.match(/tah/)) {$('#subnav-borrowers-tah').addClass('active');}   
    else if (p.match(/seniors/)) {$('#subnav-borrowers-seniors').addClass('active');}   
    else if (p.match(/sbl/)) {$('#subnav-borrowers-sbl').addClass('active');} 
  }
  else if (p.match(/product/)) {
    $('#nav-products').children('a').addClass('active');
    $('#subnav-products').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/conventional/)) {$('#subnav-products-conventional').addClass('active');}   
    else if (p.match(/sbl/)) {$('#subnav-products-sbl').addClass('active');}   
    else if (p.match(/tah/)) {$('#subnav-products-tah').addClass('active');}   
    else if (p.match(/seniors/)) {$('#subnav-products-seniors').addClass('active');}   
    else if (p.match(/lock/)) {$('#subnav-products-lock').addClass('active');}   
    else if (p.match(/green/)) {$('#subnav-products-green').addClass('active');}   
  }
  else if (p.match(/news|research|aimi|events|viewpoints/)) {
    $('#nav-news').children('a').addClass('active');
    $('#subnav-news').addClass('on').find('.no-bullet').removeClass('hide');
    if(p.match(/viewpoints/)) {$('#subnav-news-viewpoints').addClass('active');}  
    else if(p.match(/events/)) {$('#subnav-news-events').addClass('active');}  
    else if(p.match(/aimi/)) {$('#subnav-news-aimi').addClass('active');}  
    else if(p.match(/research/)) {$('#subnav-news-research').addClass('active');}  
    else if(p.match(/release/)) {$('#subnav-news-releases').addClass('active');}  
    else if(p.match(/customer-news/))  {$('#subnav-news-customer').addClass('active');}  
  }
  else if (p.match(/about/)) {
    $('#nav-about').children('a').addClass('active');
    $('#subnav-about').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/who/)) {$('#subnav-about-who').addClass('active');}
    if (p.match(/results/)) {$('#subnav-about-results').addClass('active');}
  }
}

fakeNav();