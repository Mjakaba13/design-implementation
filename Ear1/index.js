let linkList = document.getElementById("links");
let closeIcon = document.getElementById("close");

function dropdownMenu() {
  linkList.style.display = "block";
  closeIcon.style.display = "block";
}

function closeMenu() {
  closeIcon.style.display = "none";
  linkList.style.display = "none";
}
