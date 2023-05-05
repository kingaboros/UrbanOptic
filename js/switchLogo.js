const body = document.querySelector('.body-yellow');
const logo = document.querySelector('.logo');

// Get the computed background color of the body element
const bgColor = getComputedStyle(body).backgroundColor;

// Check if the background color is yellow
if (bgColor === 'rgb(255, 255, 0)') {
  logo.classList.add('logo-dark'); // Show the dark logo
} else {
  logo.classList.remove('logo-dark'); // Show the light logo
}
