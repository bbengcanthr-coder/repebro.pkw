function setImage(layer, src) {
  document.getElementById("layer" + layer).src = src;
}

/* บาง browser ต้องคลิกก่อนเพลงจะดัง */
window.addEventListener("click", function() {
  document.getElementById("bgm").play();
});
