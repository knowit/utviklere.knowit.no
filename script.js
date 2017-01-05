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

function scrollToPage(selector) {
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, 500);
}

$(document).ready(function() {

  $('#prosjekt-carousel').carousel({
    interval: 10000
  });

  $('#folk-carousel').carousel({
    interval: 10000
  });

  $("#prosjekt-carousel").on("slid.bs.carousel", function(event) {
    var slide_to = $(event.target).find('.active').children('img').attr('alt');
    switch(slide_to) {
      case "NETTSTED":
        selectProject($("a.nettsted").get()); break;
      case "WEBAPPS":
        selectProject($("a.webapps").get()); break;
      case "TJENESTER":
        selectProject($("a.tjenester").get()); break;
    }
  });

/*
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
*/
});
