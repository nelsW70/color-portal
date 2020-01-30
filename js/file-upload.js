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
