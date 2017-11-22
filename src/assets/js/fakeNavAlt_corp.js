
// faking the nav highlight settings since we don't have a cms to do this for us locally.

function fakeNav(){
  // this will be automated on the backend, faking it for now to show different highlighting/subnavs
  var p = location.pathname;
  if (p.match(/perspectives/)) { 
    $('#nav-perspectives').addClass('active');
  }
  else if (p.match(/blog/) && !p.match(/hr/)) { 
    $('#nav-blog').addClass('active');
    $('#subnav-blog').addClass('expand-desktop');
    $('#header-nav').addClass('header-extend');
    if (p.match(/detail|homeownership/)) {$('#subnav-blog-homeownership').addClass('active');}
    else if (p.match(/rental/)) {$('#subnav-blog-rental').addClass('active');}
    else if (p.match(/research/)) {$('#subnav-blog-research').addClass('active');}
    else if (p.match(/notable/)) {$('#subnav-blog-notable').addClass('active');}
    else if (p.match(/archive|harp/)) {$('#subnav-blog-archive').addClass('active');}
  }
  else if (p.match(/about/) || p.match(/hr-blog/)) {
    $('#nav-about').addClass('active');
    $('#subnav-about').addClass('expand-desktop');
    $('#header-nav').addClass('header-extend');
    if (p.match(/leaders/)) {$('#subnav-about-leaders').addClass('active');}
    else if (p.match(/business/)) {$('#subnav-about-business').addClass('active');}
    else if (p.match(/people|employee|supplier|hr-blog/)) {$('#subnav-about-people').addClass('active');}
    else if (p.match(/communities/)) {$('#subnav-about-communities').addClass('active');}
    else if (p.match(/governance|annual|agenda|board/)) {$('#subnav-about-governance').addClass('active');}
    else if (p.match(/investor/)) {$('#subnav-about-investors').addClass('active');}
  }
  else if (p.match(/media-/)) {
    $('#nav-mediaroom').addClass('active');
    $('#subnav-mediaroom').addClass('expand-desktop');
    $('#header-nav').addClass('header-extend');
    if (p.match(/detail|archive/)) {$('#subnav-mediaroom-archive').addClass('active');}   
    else if (p.match(/press/)) {$('#subnav-mediaroom-resources').addClass('active');} 
  }
  else if (p.match(/research/)) {
    $('#nav-research').addClass('active');
    $('#subnav-research').addClass('expand-desktop');
    $('#header-nav').addClass('header-extend');
    if(p.match(/pmms/)) {$('#subnav-research-mortgage').addClass('active');} 
    else if (p.match(/detail|insight/)) {$('#subnav-research-insight').addClass('active');} 
    else if (p.match(/outlook/)) {$('#subnav-research-outlook').addClass('active');} 
    else if (p.match(/consumer/)) {$('#subnav-research-consumer').addClass('active');} 
    else if (p.match(/aimi/)) {$('#subnav-research-indices').addClass('active');}   
    else if (p.match(/data/)) {$('#subnav-research-datasets').addClass('active');}   
  }
}

fakeNav();