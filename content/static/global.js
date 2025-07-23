
// Mobile Menu Toggle

const navbarToggle = document.getElementById('nav-toggle');
const navbarLinks = document.getElementById('nav-links');

console.log(navbarLinks)
console.log(navbarToggle)

navbarToggle.addEventListener('click', function (e) {
  navbarLinks.classList.toggle('active'); // show links

  console.log("Reading nav toggle correctly")

  // Optional: Change hamburger to X icon
  navbarToggle.classList.toggle('active');
  // You would need to add CSS for .navbar-toggle.active span transformations for X icon
});