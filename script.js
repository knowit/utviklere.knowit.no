function selectProject(e) {
  $(".bli-med-button").each(function(btn) {
    $(this).removeClass('active');
  });

  $(e).toggleClass('active');
}

function createTypeformWindow() {
  $('#typeform-window').fadeIn();
  $('#typeform-window iframe').attr('src', 'typeform.html');
  $('#typeform-window iframe').load(function() {
    $('iframe').fadeIn();
  });
}

function closeTypeform() {
  $("#typeform-window").fadeOut();
}

$(document).ready(function() {

  $(".soknad-knapp a").click(function(e) {
    createTypeformWindow();
    e.stopPropagation();
  });


  // Close typeform window

  $(".close-window").click(function(e) {
    closeTypeform();
  });

  $('body').click(function(e) {
    closeTypeform();
  });

  $(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) { // Escape
      closeTypeform();
    }
  });
});
