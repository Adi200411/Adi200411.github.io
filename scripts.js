document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  window.addEventListener('scroll', function() {
      let scrolled = window.pageYOffset;
      document.querySelector('.parallax').style.backgroundPositionY = `${scrolled * 0.5}px`;
  });
});
