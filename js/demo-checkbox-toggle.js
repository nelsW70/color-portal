// this is fake and just for demo purposes
var radioState;

$('.demo-radio').on('click', function(e) {
  if (radioState === this) {
    this.checked = false;
    radioState = null;
  } else {
    radioState = this;
  }
});
