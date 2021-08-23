function slider({container, slide , nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    current = document.getElementById(currentCounter),
    total = document.getElementById(totalCounter),
    slidesWrapper = document.querySelector(wrapper),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector(field);

  function addZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function changeElemOpacity(array, target, others) {
    array.forEach((elem) => (elem.style.opacity = `${others}`));
    dots[slideIndex - 1].style.opacity = `${target}`;
  }

  let slideIndex = 1;
  let offset = 0;

  total.innerHTML = addZero(slides.length);
  current.innerHTML = addZero(slideIndex);

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const indicators = document.createElement("ol");
  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  let dots = [];
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    indicators.append(dot);
    dots.push(dot);
  }

  dots[slideIndex - 1].style.opacity = "1";

  next.addEventListener("click", () => {
    if (offset == parseInt(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseInt(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    current.innerHTML = addZero(slideIndex);
    changeElemOpacity(dots, 1, 0.5);
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = parseInt(width) * (slides.length - 1);
    } else {
      offset -= parseInt(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    current.innerHTML = addZero(slideIndex);
    changeElemOpacity(dots, 1, 0.5);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = parseInt(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      changeElemOpacity(dots, 1, 0.5);
      current.innerHTML = addZero(slideIndex);
    });
  });
  //simple slider

  // function showSlides(n){
  //   if(n>slides.length){
  //     slideIndex = 1;
  //   }
  //   if(n<1){
  //     slideIndex = slides.length;
  //   }
  //    slides.forEach(item => item.classList.add('hide'));
  //    slides[slideIndex-1].classList.remove('hide');
  //    current.innerHTML = addZero(slideIndex);
  // }
  // showSlides(slideIndex);
  // total.innerHTML = addZero(slides.length);
  // function plusSlides(n){
  //   showSlides(slideIndex += n);
  // }
  // prev.addEventListener('click',()=>{
  //   plusSlides(-1);

  // });
  // next.addEventListener('click',()=>{
  //   plusSlides(1);

  // });
}

export default slider;