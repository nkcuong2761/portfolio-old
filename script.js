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
  $('tr').click(function() {
    window.location.href = "works.html";
  })
});

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animated-text');
    }
  });
});
const headings = document.querySelectorAll('h1');
headings.forEach(h => {
  observer.observe(h)
})