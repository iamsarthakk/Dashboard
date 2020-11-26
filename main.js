"use strict";

$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
      $('.sidebar').addClass('d-none');
      $('.card-container').removeClass('col-9')
      $('.card-container').addClass('col-12')
    }
    else{
      $('.sidebar').removeClass('d-none');
      $('.card-container').removeClass('col-12')
      $('.card-container').addClass('col-9')
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
      // $("body").addClass("sidebar-toggled");
      // $(".sidebar").addClass("toggled");
      // $('.sidebar').addClass('d-none');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $(".sidebar").addClass("d-none");
      $('.sidebar .collapse').collapse('hide');
    };
    if ($(window).width() > 768) {
      // $("body").addClass("sidebar-toggled");
      // $(".sidebar").addClass("toggled");
      $(".sidebar").removeClass("d-none");
      $('.sidebar .collapse').collapse('hide');
    };

    
  });

  