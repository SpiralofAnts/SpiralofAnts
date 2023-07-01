window.addEventListener('DOMContentLoaded', function() {
  var bgElement = document.querySelector('.coolspot-bg');
  
  var scrollSpeed = 1;
  
  var initHeight = bgElement.offsetTop;
  
  function scrollBackground() {
    var currentScrollPos = bgElement.offsetTop;
    var newScrollPos = currentScrollPos - scrollSpeed;
    
    if (newScrollPos < (initHeight - (2 * 256))) {
      newScrollPos = -256;
    }
    
    bgElement.style.top = newScrollPos + 'px';
    
    requestAnimationFrame(scrollBackground);
  }
  
  scrollBackground();
});
