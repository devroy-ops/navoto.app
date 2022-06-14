
//Fixed header
window.onscroll = function() {myFunctionHaderfxed01()};

var header = document.getElementById("header_block1");
var sticky = header.offsetTop;

function myFunctionHaderfxed01() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader01");
  } else {
    header.classList.remove("stickyHeader01");
  }
}

 function myFunctionheader01() {
    var para = document.getElementById("primary_header01");
    para.classList.toggle("activeClass");

    var para = document.getElementById("togglemenu_block1");
    para.classList.toggle("activeToggle");
}


//gallery03
new Glide('#gallery03', {
  type: 'carousel',
  perView: 1,
  startAt: 0,
  gap: 48,
  //autoplay: 2900,
  hoverpause: true,
}).mount();