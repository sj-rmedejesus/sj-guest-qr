$(document).ready(function(){

  $("main").load("./pages/home.html #home-container");

  $(document).on('click','#box1',function() {
    $("main").load("./pages/whatsapp.html #whatsapp-container");
    window.scrollTo(0, 0);
  });

  $(document).on('click','#box2',function() {
    $("main").load("./pages/niseko-information.html #niseko-container");
    window.scrollTo(0, 0);
  });

  $(document).on('click','#box4',function() {
    $("main").load("./pages/dining.html #dining-container");
    window.scrollTo(0, 0);
  });

  $(document).on('click','#box6',function() {
    $("main").load("./pages/nbs.html #nbs-container");
    window.scrollTo(0, 0);
  });

  $(document).on('click','#box7',function() {
    $("main").load("./pages/onsen.html #onsen-container");
    window.scrollTo(0, 0);
  });

  $(document).on('click','#back-btn',function() {
    $("main").load("./pages/home.html #home-container");
    window.scrollTo(0, 0);
  });
});