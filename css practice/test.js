const slider = document.querySelector(".family-body-slider");

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  // Touch event handling
  if (e.type === "touchstart") {
    startX = e.touches[0].pageX;
  } else {
    startX = e.pageX;
  }
  startScrollLeft = slider.scrollLeft;
};
const dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  // Touch event handling
  let pageX;
  if (e.type === "touchmove") {
    pageX = e.touches[0].pageX;
  } else {
    pageX = e.pageX;
  }
  slider.scrollLeft = startScrollLeft - (pageX - startX);
};

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);

slider.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging);

slider.addEventListener("mouseup", dragStop);
slider.addEventListener("touchend", dragStop);
