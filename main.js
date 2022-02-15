// open modal
const openModal = document.querySelector(".modalOpen");
const modalOverlay = document.querySelector(".modalOverlay");

// close modal
const modalClose = document.querySelector(".modalClose");
const modalDone = document.querySelector(".modalDone");

openModal.addEventListener("click", function () {
  modalOverlay.classList.add("active");
});

modalClose.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

modalDone.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

// accordion
const accordion = document.querySelectorAll(".accordionTop");
// const accordionContent = document.querySelector(".accordionBottom");

// accordion1.addEventListener("click", function () {
//   accordionContent.classList.add("accordionOpen");
// });

accordion.forEach(function (buttonClick) {
  buttonClick.addEventListener("click", function () {
    this.classList.toggle("accordionContentActive");
    // console.log(buttonClick.nextElementSibling);
    const accordionContent = this.nextElementSibling;
    if (accordionContent.style.height) {
      accordionContent.style.height = null;
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
    }
  });
});

// scroll to top
const scrollDisplayTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 300) {
    scrollDisplayTop.style.display = "block";
  } else {
    scrollDisplayTop.style.display = "none";
  }
});

scrollDisplayTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
