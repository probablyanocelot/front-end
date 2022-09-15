const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});






// const scrollOffset = 100;
 
// const scrollElement = document.querySelector(".js-scroll");
 
// const elementInView = (el, offset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;
 
//   return (
//     elementTop <= 
//     ((window.innerHeight || document.documentElement.clientHeight) - offset)
//   );
// };
 
// const displayScrollElement = () => {
//   scrollElement.classList.add('scrolled');
// }
 
// const hideScrollElement = () => {
//   scrollElement.classList.remove('scrolled');
// }
 
// const handleScrollAnimation = () => {
//   if (elementInView(scrollElement, scrollOffset)) {
//       displayScrollElement();
//   } else {
//     hideScrollElement();
//   }
// }
 
// window.addEventListener('scroll', () => {
//   handleScrollAnimation();
// })