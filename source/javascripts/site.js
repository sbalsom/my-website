
// bouncing images on load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('girl').classList.add('slideDown');
  }, 1500);
  setTimeout(function() {
    document.getElementById('pom').classList.add('slideDown');
  }, 1000);
  setTimeout(function() {
    document.getElementById('info-box').classList.add('slideRight');
  }, 1000);
  setTimeout(function() {
    document.getElementById('rose').classList.add('driftDown');
  }, 2000);

}, false);

// var typed = new Typed('.typed', {
//   strings: ["Hello.", "Second sentence."],
//   typeSpeed: 30
// });
