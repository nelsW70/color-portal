// hamburger menu animation
$(document).ready(function() {
  $('#nav-icon-container').click(function() {
    $('.nav-icon').toggleClass('open');
  });
});

//if you click outside the menu icon it will close the icon
$(document).click(function(event) {
  if (!$(event.target).closest('#nav-icon-container,.open').length) {
    $('body')
      .find('.nav-icon')
      .removeClass('open');
  }
});
