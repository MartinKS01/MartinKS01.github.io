function updateQuote() {
  const input = document.getElementById('quoteInput');
  const display = document.getElementById('quoteDisplay');
  const text = input.value.trim();

  if (!text) return;

  display.classList.remove('empty');
  display.style.opacity = '0';
  setTimeout(() => {
    display.textContent = '\u201C' + text + '\u201D';
    display.style.opacity = '1';
  }, 200);

  input.value = '';
}

document.getElementById('quoteInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') updateQuote();
});