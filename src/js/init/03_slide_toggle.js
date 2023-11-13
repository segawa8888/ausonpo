/*------------------------------------
jQUeryのslideUp/slideDown/slideToggleの
Vanilla JSでの再現
ex.slideDown(element);slideUp(element);slideToggle(element);
------------------------------------*/
const slideDown = (element, triggerButton, duration = 400) => {
  element.style.display = "block";
  const displayHeight = element.offsetHeight;
  element.style.height = "0px";
  element.style.overflow = "hidden";
  element.style.transitionProperty = "height";
  element.style.transitionDuration = `${duration}ms`;

  setTimeout(() => {
    element.style.height = `${displayHeight}px`;
  }, 0);

  setTimeout(() => {
    element.style.overflow = "";
    element.style.height = "";
    element.style.transitionDuration = "";
  }, duration);

  triggerButton.classList.add("is-active");
};

const slideUp = (element, triggerButton, duration = 400) => {
  element.style.height = `${element.offsetHeight}px`;
  element.style.overflow = "hidden";
  element.style.transitionProperty = "height";
  element.style.transitionDuration = `${duration}ms`;

  setTimeout(() => {
    element.style.height = "0px";
  }, 0);

  setTimeout(() => {
    element.style.display = "none";
    element.style.overflow = "";
    element.style.height = "";
    element.style.transitionDuration = "";
  }, duration);

  triggerButton.classList.remove("is-active");
};

const slideToggle = (element, triggerButton, duration = 400) => {
  if (window.getComputedStyle(element).display === "none") {
    slideDown(element, triggerButton, duration);
  } else {
    slideUp(element, triggerButton, duration);
  }
};
