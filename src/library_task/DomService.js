/* eslint-disable */
class DOMService { 
  show(element) {
    element.classList.remove("hide");
  }

  hide(element) {
    element.classList.add("hide");
  }
}
