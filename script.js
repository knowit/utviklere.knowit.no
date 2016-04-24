function selectProject(e) {
  $(".bli-med-button").each(function(btn) {
    $(this).removeClass('active');
  });

  $(e).toggleClass('active');
}
