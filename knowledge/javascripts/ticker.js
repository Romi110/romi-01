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
    document$.subscribe(initTicker);
  } else {
    document.addEventListener('DOMContentLoaded', initTicker);
  }
})();
