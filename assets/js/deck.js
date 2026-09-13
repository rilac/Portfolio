/* 슬라이드 네비게이션 + PDF 내보내기 */
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var N = slides.length;
  var idx = 0;
  var baseClass = slides.map(function (s) { return s.className.replace(/\s*active/, ''); });
  var dotsEl = document.getElementById('dots');
  var curEl = document.getElementById('cur');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');

  document.getElementById('tot').textContent = N;

  slides.forEach(function (_, i) {
    var d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' on' : '');
    d.type = 'button';
    d.setAttribute('aria-label', (i + 1) + '번 슬라이드');
    d.addEventListener('click', function () { show(i); });
    dotsEl.appendChild(d);
  });

  function show(i) {
    idx = i;
    slides.forEach(function (s, j) { s.className = baseClass[j] + (j === i ? ' active' : ''); });
    var dots = dotsEl.querySelectorAll('.dot');
    for (var j = 0; j < N; j++) dots[j].className = 'dot' + (j === i ? ' on' : '');
    curEl.textContent = i + 1;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === N - 1;
  }

  window.go = function (dir) {
    var n = idx + dir;
    if (n >= 0 && n < N) show(n);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') window.go(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') window.go(-1);
  });

  show(0);

  /* ── PDF ──────────────────────────────────────────────────────── */
  function waitImages() {
    var imgs = Array.prototype.slice.call(document.querySelectorAll('.deck img'));
    return Promise.all(imgs.map(function (img) {
      if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
      return new Promise(function (resolve) {
        img.addEventListener('load', resolve);
        img.addEventListener('error', resolve);
        setTimeout(resolve, 4000);
      });
    }));
  }

  window.savePDF = async function () {
    var btn = document.getElementById('pdfBtn');
    var label = btn.textContent;
    btn.disabled = true;
    btn.textContent = '이미지 로딩 중…';
    var restore = idx;
    try {
      await waitImages();
      var jsPDF = window.jspdf.jsPDF;
      var deck = document.getElementById('deck');
      var pw = 297, ph = 167.06; // 16:9 landscape (mm)
      var pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [pw, ph] });
      for (var i = 0; i < N; i++) {
        show(i);
        await new Promise(function (r) { setTimeout(r, 500); });
        var canvas = await html2canvas(deck, {
          scale: 2, useCORS: true, allowTaint: true, logging: false,
          width: 1280, height: 720, windowWidth: 1280, windowHeight: 720,
          backgroundColor: '#ffffff', imageTimeout: 6000,
          onclone: function (doc) {
            doc.querySelectorAll('.deck img').forEach(function (img) {
              img.style.maxWidth = '100%';
              img.style.maxHeight = '100%';
              img.style.width = 'auto';
              img.style.height = 'auto';
              img.style.objectFit = 'contain';
            });
            doc.querySelectorAll('.img-wrap').forEach(function (w) {
              var h = w.getBoundingClientRect().height;
              if (h > 0) { w.style.height = h + 'px'; w.style.minHeight = h + 'px'; }
            });
          }
        });
        if (i > 0) pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pw, ph, undefined, 'FAST');
        btn.textContent = (i + 1) + ' / ' + N + ' 처리 중…';
      }
      pdf.save('임대연_포트폴리오.pdf');
      btn.textContent = '완료';
    } catch (e) {
      console.error(e);
      alert('PDF 생성 실패: ' + e.message);
    } finally {
      show(restore);
      setTimeout(function () { btn.textContent = label; btn.disabled = false; }, 1500);
    }
  };
})();
