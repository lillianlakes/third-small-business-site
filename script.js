$('div').on('click', function() {
  $(this).toggleClass('show-description');
});

function emailSubmitted() {
  var txt;
  if (confirm("By submitting your email address, you will receive promotional updates and new product alerts. Press OK to proceed or cancel if you prefer not to be emailed. Thank you.")) {
    txt = "Thank you for joining our email list.";
  } else {
    txt = "I am sorry you chose not to join our email list.  Please keep in touch.";
  }
  document.getElementById("emailConfirmation").innerHTML = txt;
}