document.addEventListener("DOMContentLoaded", () => {
  let questionsDom = document.querySelectorAll('.question__title');
  questionsDom.forEach((item) => {
    if (item.nextElementSibling.classList.contains("hidden")) {
      $(item.nextElementSibling).hide();
    }
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.toggle("hidden");
      if (!item.nextElementSibling.classList.contains("hidden")) {
        $(item.nextElementSibling).slideDown("slow");
      } else {
        $(item.nextElementSibling).slideUp("slow");
      }
      item.classList.toggle("active");
    });
  });

  let burgerDom = document.querySelector(".burger");
  let mobileNavDom = document.querySelector(".mobileNav__wrapper");
  burgerDom.addEventListener("click", () => {
    burgerDom.classList.toggle("active");
    mobileNavDom.classList.toggle("hidden");
  });

  // Mobile
  let additionalLinkMobileCDom = document.querySelector(".c__vitamins .additionalLinkMobile");
  let additionalMobileCDom = document.querySelector(".c__vitamins .additionalMobile");
  if (additionalMobileCDom.classList.contains("hidden")) {
    $(additionalMobileCDom).hide();
  }
  additionalLinkMobileCDom.addEventListener("click", () => {
    if (additionalMobileCDom.classList.contains("hidden")) {
      $(additionalMobileCDom).slideDown("slow");
      additionalMobileCDom.classList.toggle("hidden");
      additionalLinkMobileCDom.classList.toggle("active");
    } else {
      $(additionalMobileCDom).slideUp("slow");
      additionalMobileCDom.classList.toggle("hidden");
      additionalLinkMobileCDom.classList.toggle("active");
    }
  });

  let additionalLinkMobileD3Dom = document.querySelector(".d3__vitamins .additionalLinkMobile");
  let additionalMobileD3Dom = document.querySelector(".d3__vitamins .additionalMobile");
  if (additionalMobileD3Dom.classList.contains("hidden")) {
    $(additionalMobileD3Dom).hide();
  }
  additionalLinkMobileD3Dom.addEventListener("click", () => {
    if (additionalMobileD3Dom.classList.contains("hidden")) {
      $(additionalMobileD3Dom).slideDown("slow");
      additionalMobileD3Dom.classList.toggle("hidden");
      additionalLinkMobileD3Dom.classList.toggle("active");
    } else {
      $(additionalMobileD3Dom).slideUp("slow");
      additionalMobileD3Dom.classList.toggle("hidden");
      additionalLinkMobileD3Dom.classList.toggle("active");
    }
  });

  // Desktop
  let additionalLinkCDom = document.querySelector(".c__vitamins .additionalLink");
  let additionalCDom = document.querySelector(".c__vitamins .additional");
  if (additionalCDom.classList.contains("hidden")) {
    $(additionalCDom).hide();
  }
  additionalLinkCDom.addEventListener("click", () => {
    if (additionalCDom.classList.contains("hidden")) {
      $(additionalCDom).slideDown("slow");
      additionalCDom.classList.toggle("hidden");
    } else {
      $(additionalCDom).slideUp("slow");
      additionalCDom.classList.toggle("hidden");
    }
  });

  let additionalLinkD3Dom = document.querySelector(".d3__vitamins .additionalLink");
  let additionalD3Dom = document.querySelector(".d3__vitamins .additional");
  if (additionalD3Dom.classList.contains("hidden")) {
    $(additionalD3Dom).hide();
  }
  additionalLinkD3Dom.addEventListener("click", () => {
    if (additionalD3Dom.classList.contains("hidden")) {
      $(additionalD3Dom).slideDown("slow");
      additionalD3Dom.classList.toggle("hidden");
    } else {
      $(additionalD3Dom).slideUp("slow");
      additionalD3Dom.classList.toggle("hidden");
    }
  });

  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < $("#d3").offset().top - 160 && !$('.buyLink').hasClass("active")) {
      $('.buyLink').toggleClass("active");
      $('.d3Link').removeClass("active");
      $('.cLink').removeClass("active");
      $('.reviewsLink').removeClass("active");
      $('.contactsLink').removeClass("active");
    } else if (scroll >= $("#d3").offset().top - 150 &&
      scroll < $("#c").offset().top - 100 && !$('.d3Link').hasClass("active")) {
      $('.buyLink').removeClass("active");
      $('.d3Link').toggleClass("active");
      $('.cLink').removeClass("active");
      $('.reviewsLink').removeClass("active");
      $('.contactsLink').removeClass("active");
    } else if (scroll >= $("#c").offset().top - 100 &&
      scroll < $("#reviews").offset().top - 100 && !$('.cLink').hasClass("active")) {
      $('.buyLink').removeClass("active");
      $('.d3Link').removeClass("active");
      $('.cLink').toggleClass("active");
      $('.reviewsLink').removeClass("active");
      $('.contactsLink').removeClass("active");
    } else if (scroll >= $("#reviews").offset().top - 100 &&
      scroll < $("#contacts").offset().top - 1500 && !$('.reviewsLink').hasClass("active")) {
      $('.buyLink').removeClass("active");
      $('.d3Link').removeClass("active");
      $('.cLink').removeClass("active");
      $('.reviewsLink').toggleClass("active");
      $('.contactsLink').removeClass("active");
    } else if (scroll >= $("#contacts").offset().top - 1500 && !$('.contactsLink').hasClass("active")) {
      $('.buyLink').removeClass("active");
      $('.d3Link').removeClass("active");
      $('.cLink').removeClass("active");
      $('.reviewsLink').removeClass("active");
      $('.contactsLink').toggleClass("active");
    }
  });

  // scrolls
  $(".buyLink").click(function() {
    burgerDom.classList.remove("active");
    mobileNavDom.classList.add("hidden");
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
  $(".d3Link").click(function() {
    burgerDom.classList.remove("active");
    mobileNavDom.classList.add("hidden");
    $('html, body').animate({
      scrollTop: $("#d3").offset().top - 150
    }, 1000);
  });
  $(".cLink").click(function() {
    burgerDom.classList.remove("active");
    mobileNavDom.classList.add("hidden");
    $('html, body').animate({
      scrollTop: $("#c").offset().top - 25
    }, 1000);
  });
  $(".reviewsLink").click(function() {
    burgerDom.classList.remove("active");
    mobileNavDom.classList.add("hidden");
    $('html, body').animate({
      scrollTop: $("#reviews").offset().top - 25
    }, 1000);
  });
  $(".contactsLink").click(function() {
    burgerDom.classList.remove("active");
    mobileNavDom.classList.add("hidden");
    $('html, body').animate({
      scrollTop: $("#contacts").offset().top - 100
    }, 1000);
  });
});