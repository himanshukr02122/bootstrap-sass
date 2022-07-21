$(()=>{
    $("p").on('click',()=>{
      $("p").hide();
    });

    $('#footer-plus-icon').on('click',()=> {
      $('#footer-plus-icon').hide();
      $('#footer-minus-icon').show();
      $('#ul-toggle').show();
    });

    $('#footer-minus-icon').on('click',()=> {
      $('#footer-minus-icon').hide();
      $('#footer-plus-icon').show();
      $('#ul-toggle').hide();
    });
    var x = window.matchMedia("(min-width: 768px)")
    x.addListener(()=> {
    if (x.matches) { // If media query matches
      $('#footer-minus-icon').hide();
      $('#footer-plus-icon').hide();
      $('#ul-toggle').show();
    } else {
      $('#footer-minus-icon').hide();
      $('#footer-plus-icon').show();
      $('#ul-toggle').hide(); }

    });
    $('#to-main-sec-block__skip').on('click', ()=> {
      $(window).attr('location','./home.html');
    })
  });
let to_link= document.getElementsByClassName('to-header__bottom-link');
to_link[4].style='border-right: 0px';