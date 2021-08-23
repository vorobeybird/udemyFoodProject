function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  // modal.classList.toggle("show");
  document.body.style.overflow = "hidden";
  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  // modal.classList.toggle("show");
}

function modalWindow(triggerSelector, modalSelector, modalTimerId) {
  // Modal vindow activation
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector,modalTimerId));
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    /*тут мы сравниваем складывая pageYOffset (расстояние скролла) плюс размер элемента в окне
    с полным размером скролла документа, если они совпадают - вызываем модальное окно */

    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector,modalTimerId);
      window.removeEventListener(
        "scroll",
        showModalByScroll
      ); /*при вызове Remove мы должны четко указывать
       какое событие и какую функцию удалить*/
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //Add class to Create daily Menu field
}

export default modalWindow;
export { closeModal };
export { openModal };
