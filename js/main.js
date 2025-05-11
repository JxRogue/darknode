// Modal functionality
function showPreview(tool) {
    document.getElementById('previewModal').style.display = "block";
    document.getElementById('modalTitle').innerText = tool;
    document.getElementById('modalDescription').innerText = `Interactive preview for ${tool} will be available soon.`;
}

document.querySelector(".close-btn").onclick = function() {
    document.getElementById('previewModal').style.display = "none";
};

// Scroll effect for tools section
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

// Fade-in effect for elements on scroll
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
