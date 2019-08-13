$(document).ready(function() {
  $("#b-ghost").click(function() {
    $("ul#ghost-talk").prepend("<li>BOO!</li>");
  });

  $("#b-zombie").click(function() {
    $("#zombie-pic").css('width', '1000px');
    $("#zombie-pic").css('margin-left', '-800px');
    $("#zombie-pic").css('margin-top', '0px');
    $(".visible").css('display', 'none');
  });
});
