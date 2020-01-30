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

// FAKES PROGRESS ANIMATION

$('#progressbar-one').progress({
  text: {
    active: '{percent}%',
    success: 'File successfully imported!'
  }
});

// FAKE CLICK EVENT ON "Import file" BUTTON TO DEMONSTRATE PROGRESS BAR

$('#demo-animate-progress').click(function() {
  $('#progressbar-one').progress('increment');
});
