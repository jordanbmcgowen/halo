/* HALO — Editorial. Finish picker, product render stamping, mobile nav. */
(function () {
  'use strict';

  var FINISH_NAMES = {
    champagne: 'Matte Champagne',
    spaceGray: 'Space Gray',
    obsidian:  'Obsidian Black'
  };

  /* ---- Stamp the CSS product render into every mount point ---------------- */
  var tpl = document.getElementById('halo-template');
  if (tpl && 'content' in tpl) {
    var mounts = document.querySelectorAll('.halo-mount');
    for (var i = 0; i < mounts.length; i++) {
      mounts[i].appendChild(tpl.content.cloneNode(true));
    }
  }

  /* ---- Finish picker ------------------------------------------------------ */
  var swatches = document.querySelectorAll('.swatch');
  var dynamicMounts = document.querySelectorAll('.halo-mount[data-dynamic="finish"]');
  var binds = document.querySelectorAll('[data-bind]');

  function selectFinish(finish) {
    if (!FINISH_NAMES[finish]) return;
    var name = FINISH_NAMES[finish];

    for (var i = 0; i < dynamicMounts.length; i++) {
      dynamicMounts[i].setAttribute('data-finish', finish);
    }

    for (var j = 0; j < binds.length; j++) {
      var key = binds[j].getAttribute('data-bind');
      if (key === 'finishName') binds[j].textContent = name;
      else if (key === 'finishNameUpper') binds[j].textContent = name.toUpperCase();
    }

    for (var k = 0; k < swatches.length; k++) {
      var on = swatches[k].getAttribute('data-finish') === finish;
      swatches[k].classList.toggle('is-selected', on);
      swatches[k].setAttribute('aria-checked', on ? 'true' : 'false');
    }
  }

  for (var s = 0; s < swatches.length; s++) {
    swatches[s].addEventListener('click', function () {
      selectFinish(this.getAttribute('data-finish'));
    });
  }

  /* ---- Mobile nav -------------------------------------------------------- */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      var link = e.target.closest('.nav-links a');
      if (link) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
