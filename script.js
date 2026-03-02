function setImage(layer, path) {
  document.getElementById("layer" + layer).src = path;
}

/* แก้ autoplay บาง browser */
window.addEventListener("click", function(){
  const bgm = document.getElementById("bgm");
  bgm.play();
});
