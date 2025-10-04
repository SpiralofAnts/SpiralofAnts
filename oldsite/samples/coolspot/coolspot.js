window.addEventListener('DOMContentLoaded', function() {
  var bgElement = document.querySelector('.coolspot-bg');
 

  var scrollSpeed1 = 1;

  var initHeight = bgElement.offsetTop;

  function scrollBackground() {
    var currentScrollPos1 = bgElement.offsetTop;
    var newScrollPos1 = currentScrollPos1 - scrollSpeed1;

    if (newScrollPos1 < (initHeight - (2 * 256))) {
      newScrollPos1 = -256;
    }

    bgElement.style.top = newScrollPos1 + 'px';

    requestAnimationFrame(scrollBackground);
  }

  scrollBackground();
});
