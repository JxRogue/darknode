console.log("darknode initialized :: JxRogue online");
// Typewriter effect for header text
const typewriter = document.querySelector('.typewriter');
let text = typewriter.innerText;
typewriter.innerText = '';
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerText += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Hover animation for tool links
const toolLinks = document.querySelectorAll('.tool-link');

toolLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'all 0.2s ease';
    link.style.color = '#ff4444';
  });
  
  link.addEventListener('mouseleave', () => {
    link.style.color = '#fff';
  });
});

// Scroll effect for the tools section
const toolsSection = document.querySelector('.tools');
const toolsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
    }
  });
}, {
  threshold: 0.5
});

toolsObserver.observe(toolsSection);

// Fade-in effect for elements
const fadeInElements = document.querySelectorAll('.fadeIn');

fadeInElements.forEach(element => {
  element.style.opacity = 0;
  element.style.transition = 'opacity 1s ease-in-out';
});

window.addEventListener('scroll', () => {
  fadeInElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight - 100) {
      element.style.opacity = 1;
    }
  });
});
