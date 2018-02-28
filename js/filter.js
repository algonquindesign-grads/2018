var $all = $('[data-category]');
var $branding = $('[data-category*=branding]');
var $illustration = $('[data-category*=illustration]');
var $motion = $('[data-category*=motion]');
var $print = $('[data-category*=print]');
var $uxUi = $('[data-category*=ux-ui]');
var $web = $('[data-category*=web]');

$('#select-specialty').on('change', function () {
  $all.find('.designer-portrait').css('object-position', 'center bottom');
  $all.find('.designer-link').css('pointer-events', 'none');
  $all.find('.border-container').css('opacity', '0');
  $all.find('.designer-name').hide();

  switch ($(this).val()) {
    case 'option-all':
      $all.find('.designer-portrait').css('object-position', 'center top');
      $all.find('.designer-link').css('pointer-events', 'auto');
      $all.find('.border-container').css('opacity', '1');
      $all.find('.designer-name').show();
      break;
    case 'option-branding':
      $branding.find('.designer-portrait').css('object-position', 'center top');
      $branding.find('.designer-link').css('pointer-events', 'auto');
      $branding.find('.border-container').css('opacity', '1');
      $branding.find('.designer-name').show();
      break;
    case 'option-illustration':
      $illustration.find('.designer-portrait').css('object-position', 'center top');
      $illustration.find('.designer-link').css('pointer-events', 'auto');
      $illustration.find('.border-container').css('opacity', '1');
      $illustration.find('.designer-name').show();
      break;
    case 'option-motion':
      $motion.find('.designer-portrait').css('object-position', 'center top');
      $motion.find('.designer-link').css('pointer-events', 'auto');
      $motion.find('.border-container').css('opacity', '1');
      $motion.find('.designer-name').show();
      break;
    case 'option-print':
      $print.find('.designer-portrait').css('object-position', 'center top');
      $print.find('.designer-link').css('pointer-events', 'auto');
      $print.find('.border-container').css('opacity', '1');
      $print.find('.designer-name').show();
      break;
    case 'option-ux-ui':
      $uxUi.find('.designer-portrait').css('object-position', 'center top');
      $uxUi.find('.designer-link').css('pointer-events', 'auto');
      $uxUi.find('.border-container').css('opacity', '1');
      $uxUi.find('.designer-name').show();
      break;
    case 'option-web':
      $web.find('.designer-portrait').css('object-position', 'center top');
      $web.find('.designer-link').css('pointer-events', 'auto');
      $web.find('.border-container').css('opacity', '1');
      $web.find('.designer-name').show();
      break;
  }
});
