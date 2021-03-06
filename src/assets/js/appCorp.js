function getWidth(){
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
  return w;
} 
Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
//Foundation.Accordion.defaults.deepLink = true;
//Foundation.Accordion.defaults.updateHistory = true;
//Foundation.Accordion.defaults.deepLinkSmudge = true;
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
Foundation.Abide.defaults.patterns['digits_dashes'] = /^[0-9-]*$/;
Foundation.Abide.defaults.patterns['digits_slashes'] = /^[0-9\/]*$/;
Foundation.Abide.defaults.patterns['tel'] = /^\(?\d{3}\)?[\s+|-]?\d{3}[\s+|-]?\d{4}/;
Foundation.Abide.defaults['validators']['checked_required'] =
  function ($el, required, parent) {
    var group = parent.closest('.checked-group');
    var min = group.attr('data-validator-abide-min') || 1;
    var max = group.attr('data-validator-abide-max') || 9999;
    var checked = group.find(':checked').length;
    if (checked >= min  && checked <= max) {
      group.find('label').filter('.is-invalid-label').removeClass('is-invalid-label');
      group.find('[data-abide-error]').hide();   
      return true;
    } else {
      group.find('label').each(function() { $(this).addClass('is-invalid-label'); });
      group.find('[data-abide-error]').css({ display: 'block' });
      group.find('[data-validator="checked_required"]').siblings('label').addBack().on('click', function(){ 
        group.find('[data-abide-error]').hide().end().find('label').filter('.is-invalid-label').removeClass('is-invalid-label');
      });
      return false;
    }
  };

$(document).foundation(); 
