(function () {
  function initHubLink() {
    if (document.querySelector('.hub-back')) return;
    var header = document.querySelector('.md-header__inner');
    if (!header) return;
    var link = document.createElement('a');
    link.href = 'https://romi110.github.io/';
    link.className = 'hub-back md-header__button md-icon';
    link.title = 'Hub';
    link.setAttribute('aria-label', 'Back to Hub');
    link.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
    header.insertBefore(link, header.firstChild);
  }

  function initTicker() {
    var track = document.querySelector('.ticker-track');
    var wrap  = document.querySelector('.ticker-wrap');
    if (!track || !wrap) return;

    track.style.animation = 'none';

    var pos   = 0;
    var speed = 0.55;

    function half() {
      return track.scrollHeight / 2;
    }

    function loop() {
      pos += speed;
      var h = half();
      if (pos >= h) pos -= h;
      if (pos <  0) pos += h;
      track.style.transform = 'translateY(-' + pos.toFixed(2) + 'px)';
      requestAnimationFrame(loop);
    }

    wrap.addEventListener('wheel', function (e) {
      e.preventDefault();
      pos += e.deltaY * 0.45;
    }, { passive: false });

    var touchY = 0;
    wrap.addEventListener('touchstart', function (e) {
      touchY = e.touches[0].clientY;
    }, { passive: true });
    wrap.addEventListener('touchmove', function (e) {
      var delta = touchY - e.touches[0].clientY;
      touchY = e.touches[0].clientY;
      pos += delta * 0.8;
      e.preventDefault();
    }, { passive: false });

    requestAnimationFrame(loop);
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(initHubLink);
    document$.subscribe(initTicker);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      initHubLink();
      initTicker();
    });
  }
})();
