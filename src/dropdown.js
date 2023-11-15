var accHeaders = document.getElementsByClassName("accordion-header");
var i;


for (i = 0; i < accHeaders.length; i++) {
  accHeaders[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
