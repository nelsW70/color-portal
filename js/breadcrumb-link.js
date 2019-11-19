// adds/removes active to breadcrumb link
$('.breadcrumb-link').click(function(e) {
  e.stopPropagation();
  $('.breadcrumb-link').removeClass('active');
  $(this).addClass('active');
});
