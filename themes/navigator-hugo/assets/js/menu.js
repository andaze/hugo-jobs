function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$('.example-1').square1({
  caption: 'none',
  theme: 'light',
  lazy_load: true
});
$(window).bind('orientationchange', function (event) {
  location.reload(true);
});

$(document).ready(function() {
  $('.maplink a').attr('target', '_blank');
});