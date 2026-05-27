(function () {
  const modal = document.getElementById("email-modal");
  if (!modal) return;

  const triggers = document.querySelectorAll("[data-email-modal-trigger]");
  if (!triggers.length) return;

  const closeBtns = modal.querySelectorAll("[data-email-close]");
  const copyBtn = modal.querySelector("[data-email-copy]");
  const addressEl = modal.querySelector("[data-email-address]");
  let lastFocused = null;

  function open(event) {
    if (event) event.preventDefault();
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const firstFocusable = modal.querySelector(".email-modal-close");
    if (firstFocusable) firstFocusable.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  triggers.forEach((t) => t.addEventListener("click", open));
  closeBtns.forEach((b) => b.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });

  if (copyBtn && addressEl) {
    copyBtn.addEventListener("click", async () => {
      const text = addressEl.textContent.trim();
      const original = copyBtn.textContent;

      const setFeedback = () => {
        copyBtn.textContent = "복사됨";
        setTimeout(() => {
          copyBtn.textContent = original;
        }, 1500);
      };

      try {
        await navigator.clipboard.writeText(text);
        setFeedback();
      } catch (err) {
        const range = document.createRange();
        range.selectNode(addressEl);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try {
          document.execCommand("copy");
          setFeedback();
        } catch (_) {
          /* 사용자가 직접 선택해서 복사할 수 있도록 selection 유지 */
        }
      }
    });
  }
})();
