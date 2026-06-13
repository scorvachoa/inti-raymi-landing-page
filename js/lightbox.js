(function() {
  var items = document.querySelectorAll('.destino-gallery-item');
  if (!items.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML =
    '<button class="lightbox-close">&times;</button>' +
    '<button class="lightbox-prev">&#8249;</button>' +
    '<button class="lightbox-next">&#8250;</button>' +
    '<img src="" alt="">' +
    '<div class="lightbox-counter"></div>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('img');
  var counter = overlay.querySelector('.lightbox-counter');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var prevBtn = overlay.querySelector('.lightbox-prev');
  var nextBtn = overlay.querySelector('.lightbox-next');

  var currentIndex = 0;

  function open(index) {
    if (index < 0 || index >= items.length) return;
    currentIndex = index;
    var item = items[currentIndex];
    var sources = item.querySelectorAll('source');
    var src = '';
    for (var i = 0; i < sources.length; i++) {
      if (sources[i].media === '(min-width: 1025px)') {
        src = sources[i].srcset;
      }
    }
    if (!src) {
      for (var i = 0; i < sources.length; i++) {
        if (sources[i].media === '(min-width: 481px)') {
          src = sources[i].srcset;
        }
      }
    }
    var img = item.querySelector('img');
    imgEl.src = src || img.src;
    imgEl.alt = img.alt || '';
    counter.textContent = (currentIndex + 1) + ' / ' + items.length;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function next() { open(currentIndex + 1); }
  function prev() { open(currentIndex - 1); }

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      var idx = Array.prototype.indexOf.call(items, this);
      open(idx);
    });
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) close();
  });
  prevBtn.addEventListener('click', function(e) { e.stopPropagation(); prev(); });
  nextBtn.addEventListener('click', function(e) { e.stopPropagation(); next(); });

  document.addEventListener('keydown', function(e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });
})();
