/** FAKE INPUT VALIDATION TO SHOW STYLES ON VALID/INVALID REQUIRED INPUT**/

$('#requiredInput').on('blur keyup', function() {
  if ($('#requiredInput').val().length == '') {
    console.log('less than');
    $('.required-input').addClass('input-invalid');
    $('.required-error-message').addClass('show-error-message');
  } else if ($('#requiredInput').val().length > 0) {
    console.log('greater than');
    $('.required-input').removeClass('input-invalid');
    $('.required-error-message').removeClass('show-error-message');
  }
});
