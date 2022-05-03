dropdown_active = false

function openMenu() {
  var menu_icon = document.getElementById("menu-icon")
  var menu = document.getElementById("dropdown-menu")
  if (!dropdown_active) {
    menu_icon.src = "assets/Close.svg"
    menu.style.display = "flex"
    dropdown_active = true
  } else {
    menu_icon.src = "assets/List.svg"
    menu.style.display = "none"
    dropdown_active = false
  }
}

$(document).ready(function() {
  $('.nav-icon').hover(function() {
    $(this).attr('src', this.src.substring(0, this.src.length-4) + '-filled.svg');
  },
  function() {
    $(this).attr('src', this.src.substring(0, this.src.length-11) + '.svg');
  }
  );
});