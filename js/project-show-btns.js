// adds/removes active to project show buttons
$('.btn-project--show').click(function(e) {
  e.stopPropagation();
  $('.btn-project--show').removeClass('active');
  $(this).addClass('active');
});
