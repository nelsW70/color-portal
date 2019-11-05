// adds/removes active to project status buttons
$('.btn-project--status').click(function(e) {
  e.stopPropagation();
  $('.btn-project--status').removeClass('active');
  $(this).addClass('active');
});
