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

    $('#footer-plus-icon1').on('click',()=> {
      $('#footer-plus-icon1').hide();
      $('#footer-minus-icon1').show();
      $('#ul-toggle1').show();
    });
    $('#footer-minus-icon1').on('click',()=> {
      $('#footer-minus-icon1').hide();
      $('#footer-plus-icon1').show();
      $('#ul-toggle1').hide();
    });

    $('#footer-plus-icon2').on('click',()=> {
      $('#footer-plus-icon2').hide();
      $('#footer-minus-icon2').show();
      $('#ul-toggle2').show();
    });
    $('#footer-minus-icon2').on('click',()=> {
      $('#footer-minus-icon2').hide();
      $('#footer-plus-icon2').show();
      $('#ul-toggle2').hide();
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