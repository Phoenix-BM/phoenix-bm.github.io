(() => {
  const fullText = document.querySelector(".author__motto > span");
  if (!fullText || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const text = fullText.textContent;
  const typedText = document.createElement("span");
  typedText.setAttribute("aria-hidden", "true");
  fullText.classList.add("transparent");
  fullText.after(typedText);

  let length = 0;
  function typeNextCharacter() {
    length += 1;
    typedText.textContent = text.slice(0, length);
    if (length < text.length) {
      window.setTimeout(typeNextCharacter, 85);
    } else {
      fullText.classList.remove("transparent");
      typedText.remove();
    }
  }

  window.setTimeout(typeNextCharacter, 450);
})();
