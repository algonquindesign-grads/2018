var $allImage = $('[data-category] image');
var $brandingImage = $('[data-category*=branding] image');
var $illustrationImage = $('[data-category*=illustration] image');
var $motionImage = $('[data-category*=motion] image');
var $printImage = $('[data-category*=print] image');
var $uxUiImage = $('[data-category*=ux-ui] image');
var $webImage = $('[data-category*=web] image');

var $allName = $('[data-category] .name');
var $brandingName = $('[data-category*=branding] .name');
var $illustrationName = $('[data-category*=illustration] .name');
var $motionName = $('[data-category*=motion] .name');
var $printName = $('[data-category*=print] .name');
var $uxUiName = $('[data-category*=ux-ui] .name');
var $webName = $('[data-category*=web] .name');

$('#select-specialty').on('change', function () {
  $allImage.attr("filter", "url(#pixelate)");
  $allName.hide();

  switch ($(this).val()) {
    case 'option-all':
      $allImage.removeAttr("filter");
      $allName.show();
      break;
    case 'option-branding':
      $brandingImage.removeAttr("filter");
      $brandingName.show();
      break;
    case 'option-illustration':
      $illustrationImage.removeAttr("filter");
      $illustrationName.show();
      break;
    case 'option-motion':
      $motionImage.removeAttr("filter");
      $motionName.show();
      break;
    case 'option-print':
      $printImage.removeAttr("filter");
      $printName.show();
      break;
    case 'option-ux-ui':
      $uxUiImage.removeAttr("filter");
      $uxUiName.show();
      break;
    case 'option-web':
      $webImage.removeAttr("filter");
      $webName.show();
      break;
  }
});
