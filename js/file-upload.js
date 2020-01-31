// GETS FILE UPLOAD NAME

$('#file-upload').change(function() {
  var i = $(this)
    .prev('.selected-file-name')
    .clone();
  var file = $('#file-upload')[0].files[0].name;
  $(this)
    .prev('.selected-file-name')
    .text(file);
});

// FAKE CLICK EVENT ON "Import file" BUTTON TO DEMONSTRATE PROGRESS BAR
// Documentation is here: https://semantic-ui.com/modules/progress.html#/examples

$('#demo-animate-progress').on('click', function() {
  var $progress = $('#progressbar-one'),
    $displayPercent = $('.percent-loaded'),
    updateEvent;
  // restart to zero
  clearInterval(window.fakeProgress);
  $progress.progress('reset');
  // updates every 10ms until complete
  window.fakeProgress = setInterval(function() {
    $('.file-status-row').removeClass('hide');
    $('.file-status--loaded').addClass('hide');
    $('.file-status--loading').removeClass('hide');
    $progress.progress('increment');
    $displayPercent.text($progress.progress('get value'));
    // stop incrementing when complete
    if ($progress.progress('is complete')) {
      clearInterval(window.fakeProgress);
      $('.file-status--loaded').removeClass('hide');
      $('.file-status--loading').addClass('hide');
    }
  }, 10);
});
$('#progressbar-one').progress({
  duration: 200,
  total: 100,
  text: {
    active: '{value} %'
  }
});
