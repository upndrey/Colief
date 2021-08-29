document.addEventListener("DOMContentLoaded", () => {
  let questionsDom = document.querySelectorAll('.question__title');
  questionsDom.forEach((item) => {
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.toggle("hidden");
      item.classList.toggle("active");
    });
  });

});