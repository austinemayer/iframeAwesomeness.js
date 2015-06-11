$(document).ready(function () {
  $("iframe").load(function () {
    var i = $("iframe");
    i.parent().append(i.contents().find("body").contents());
    i.remove();
  });
});
