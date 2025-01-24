function pop() {
  document.getElementById("popOuter").style.display = "none";
}
function lode() {
  document.getElementById("popOuter").style.display = "block";
}
var btn = document.getElementById("top");

function up() {
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

window.onscroll = up;
function topbtn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
