// When DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Fade in sections
  document.querySelectorAll('.fadeIn').forEach(el => {
    el.style.animationDelay = '0.3s';
  });

  // Modal logic
  const modal = document.getElementById('previewModal');
  const title = document.getElementById('modalTitle');
  const desc  = document.getElementById('modalDescription');
  const close = document.querySelector('.close-btn');

  window.showPreview = tool => {
    switch(tool) {
      case 'RedGhost':
        title.textContent = 'RedGhost';
        desc.textContent  = 'A ghost you never catch. Payload vanishes before you blink.';
        break;
      case 'PolyMorph':
        title.textContent = 'PolyMorph';
        desc.textContent  = 'Change shape, change fate. Your undetectable chameleon.';
        break;
      case 'SlitTunnel':
        title.textContent = 'SlitTunnel';
        desc.textContent  = 'Slide through walls. The stealthiest backdoor in the biz.';
        break;
    }
    modal.style.display = 'flex';
  };

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
