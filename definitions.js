const definitionPopup = document.querySelector('.definition-popup');
const definitionTitle = definitionPopup.querySelector('#definition-title');
const definitionText = definitionPopup.querySelector('.definition-text');
const glossaryLink = definitionPopup.querySelector('.definition-source');

document.addEventListener('click', (event) => {
  const term = event.target.closest('.definition-term');
  if (!term) return;

  definitionTitle.textContent = term.textContent.trim().replace(/\s+/g, ' ');
  definitionText.textContent = term.dataset.definition;
  glossaryLink.href = term.dataset.glossary
    ? 'glossary.html#' + encodeURIComponent(term.dataset.glossary)
    : 'glossary.html';
  glossaryLink.textContent = term.dataset.glossary ? 'Open in glossary →' : 'Browse the glossary →';
  definitionPopup.showModal();
});
