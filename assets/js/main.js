const menu = document.getElementById('hamburger');

function ChangeStyle() {
  if (menu.style.display == "none") {
    menu.style.display = "block";
    console.log('block',menu.display);
  } else {
    menu.style.display = "none";
    console.log('none',menu.display);
  }
}
