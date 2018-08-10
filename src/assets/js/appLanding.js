function getWidth(){
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
  return w;
} 
Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Reveal.defaults.deepLink = true;
Foundation.Reveal.defaults.fullScreen = false;
Foundation.Reveal.defaults.resetOnClose = true;
Foundation.Reveal.defaults.updateHistory = true;
Foundation.Reveal.defaults.vOffset = 0;
// Reveal closeOnEsc and closeOnClick are both true 
Foundation.Tabs.defaults.deepLink = true;
Foundation.Tabs.defaults.updateHistory = true;
Foundation.Tabs.defaults.deepLinkSmudge = true; 
if (getWidth() > 569) { 
  Foundation.Tabs.defaults.matchHeight = true;
}
$(document).foundation(); 
