(function () {
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

    requestAnimationFrame(loop);
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(initTicker);
  } else {
    document.addEventListener('DOMContentLoaded', initTicker);
  }
})();
