$('.play-sound').click(function() {
  if ($('video').get(0).muted == true) {
    $('video').get(0).muted = false;
    $('.play-sound').html('Turn Sound Off');
  }
  else {
    $('video').get(0).muted = true;
    $('.play-sound').html('Turn Sound On');
  }
});
