document.addEventListener("DOMContentLoaded", () => {
  let questionsDom = document.querySelectorAll('.question__title');
  questionsDom.forEach((item) => {
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.toggle("hidden");
      item.classList.toggle("active");
    });
  });

  let burgerDom = document.querySelector(".burger");
  let mobileNavDom = document.querySelector(".mobileNav__wrapper");
  burgerDom.addEventListener("click", () => {
    burgerDom.classList.toggle("active");
    mobileNavDom.classList.toggle("hidden");
  })

});