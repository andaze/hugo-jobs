$('.example-1').square1({
  caption: 'none',
  theme: 'light',
  lazy_load: true
});


$(document).ready(function() {
  $(".title1").css("display","block");
  $(".title2").css("display","block");
});
$('#searchBox').hide();

$('.navbar-toggler').on('click', function(e) {
  const bodyCon = $("body").hasClass("show_sidebar");
  if(bodyCon === true){
    console.log('sdfsfsdf')
    $('body').removeClass('show_sidebar');
  } else {
    console.log('false')
    $('body').addClass('show_sidebar');
  }
});

$('#searchIcon').on('click', function(){
  $("button").attr("aria-expanded", "false");
  $("button").addClass("collapsed");
  $("#navbarColor03").removeClass("show");
  $('body').removeClass('show_sidebar');
  $('#searchBox').show();
});

$('.search-close').on('click', function(){
  $('#searchBox').hide();
  $('#search-input').val('');
  $('#searchTitle').empty();
  $('#searchTitle').removeClass('active');
})
