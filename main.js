// Modal Preview Functionality
function showPreview(toolName) {
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modal.style.display = 'flex';

    switch(toolName) {
        case 'RedGhost':
            modalTitle.innerText = 'RedGhost – Invisible, Dangerous, The Phantom Payload';
            modalDescription.innerText = 'Step deeper into the abyss. RedGhost is the payload you cannot detect, the ghost in your machine, and the payload that disappears before it executes.';
            break;
        case 'PolyMorph':
            modalTitle.innerText = 'PolyMorph – A Shadow in the Dark';
            modalDescription.innerText = 'Morphing through systems, evading detection at every turn, PolyMorph is the tool you need if you want to leave no trace.';
            break;
        case 'SlitTunnel':
            modalTitle.innerText = 'SlitTunnel – Dark Net, Only Darker';
            modalDescription.innerText = 'SlitTunnel creates connections that bleed through firewalls and digital barriers, leaving no trace. Perfect for an anonymous path into any network.';
            break;
        default:
            modalTitle.innerText = 'Unknown Tool';
            modalDescription.innerText = 'Tool not found. This might be a phantom. Proceed with caution.';
            break;
    }
}

// Close Modal on Close Button
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('previewModal').style.display = 'none';
});
