'use strict';

for (const button of document.querySelectorAll('[data-copy-target]')) {
  const command = document.getElementById(button.dataset.copyTarget);
  const status = document.getElementById('copy-status');
  if (!command || !status) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    // Read the visible command, preserving the line breaks between commands.
    const text = command.innerText.trim();
    button.disabled = true;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Command copied. Paste it into Terminal when you are ready.';
    } catch (_) {
      command.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(command);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Automatic copy is unavailable. The command is selected; press Command+C to copy.';
    } finally {
      button.disabled = false;
    }
  });
}
