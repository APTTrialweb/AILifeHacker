document.addEventListener('DOMContentLoaded', function() {
  // Initialize the custom cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  // Cursor movement
  window.addEventListener('mousemove', function(e) {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    
    cursorOutline.style.left = `${e.clientX}px`;
    cursorOutline.style.top = `${e.clientY}px`;
    
    cursorOutline.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, { duration: 500, fill: "forwards" });
  });
  
  // Scroll animations
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
