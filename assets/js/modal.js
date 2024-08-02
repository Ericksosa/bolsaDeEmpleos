var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("openModal");
var spans = document.getElementsByClassName("closeModal");

for(let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modals[i].style.display = "block";
  }
}

for(let i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    modals[i].style.display = "none";
  }
}

window.onclick = function(event) {
  for(let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}