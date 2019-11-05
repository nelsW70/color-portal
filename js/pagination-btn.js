// adds/removes active to pagination number
$('.item--page-selection').click(function(e) {
  e.stopPropagation();
  $('.item--page-selection').removeClass('active');
  $(this).addClass('active');
});
