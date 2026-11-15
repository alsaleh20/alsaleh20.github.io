/* ============================================================
   Visual effects: navigation toggle, scroll reveal, 3D card tilt,
   and the 3D wireframe scene in the hero. No dependencies.
   ============================================================ */
(function () {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;

  /* ---------- Mobile navigation ---------- */
  const nav = document.querySelector('.nav');
  const navToggle = document.getElementById('nav-toggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- 3D tilt on cards (delegated, so script-rendered cards work too) ---------- */
  if (canHover && !reduceMotion) {
    const MAX_TILT = 9;
    let active = null;

    const reset = card => {
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
    };

    document.addEventListener('pointermove', e => {
      const card = e.target.closest ? e.target.closest('.project-card') : null;
      if (active && active !== card) reset(active);
      active = card;
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', ((px - 0.5) * 2 * MAX_TILT).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((0.5 - py) * 2 * MAX_TILT).toFixed(2) + 'deg');
      card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
      if (active) reset(active);
      active = null;
    });
  }

  /* ---------- Hero 3D scene ---------- */
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const stage = canvas.parentElement;

  // Icosahedron (outer shell)
  const PHI = (1 + Math.sqrt(5)) / 2;
  const icoVerts = [];
  [-1, 1].forEach(a => [-PHI, PHI].forEach(b => {
    icoVerts.push([0, a, b], [a, b, 0], [b, 0, a]);
  }));
  const norm = Math.hypot(1, PHI);
  icoVerts.forEach(v => { v[0] /= norm; v[1] /= norm; v[2] /= norm; });
  const icoEdges = [];
  for (let i = 0; i < icoVerts.length; i++) {
    for (let j = i + 1; j < icoVerts.length; j++) {
      const d = Math.hypot(icoVerts[i][0] - icoVerts[j][0], icoVerts[i][1] - icoVerts[j][1], icoVerts[i][2] - icoVerts[j][2]);
      if (Math.abs(d - 2 / norm) < 0.01) icoEdges.push([i, j]);
    }
  }

  // Octahedron (inner core, counter-rotating)
  const octVerts = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  const octEdges = [];
  for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) if (i >> 1 !== j >> 1) octEdges.push([i, j]);

  // Orbit rings of dots
  const rings = [
    { radius: 1.32, tiltX: 1.15, tiltZ: 0.3, count: 44, speed: 0.25, colour: 'accent' },
    { radius: 1.5, tiltX: 0.45, tiltZ: -0.7, count: 52, speed: -0.18, colour: 'orange' },
    { radius: 1.68, tiltX: 1.45, tiltZ: 1.1, count: 60, speed: 0.12, colour: 'lime' }
  ];

  const colours = { accent: '#22d3ee', orange: '#ff8a1f', lime: '#76b900', red: '#ed1c24' };
  function readColours() {
    const cs = getComputedStyle(root);
    colours.accent = cs.getPropertyValue('--green').trim() || colours.accent;
    colours.orange = cs.getPropertyValue('--orange').trim() || colours.orange;
    colours.lime = cs.getPropertyValue('--lime').trim() || colours.lime;
    colours.red = cs.getPropertyValue('--red').trim() || colours.red;
  }

  let size = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    size = stage.clientWidth;
    canvas.width = canvas.height = Math.round(size * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rotate(v, ax, ay, az) {
    let [x, y, z] = v;
    let c = Math.cos(ax), s = Math.sin(ax);
    [y, z] = [y * c - z * s, y * s + z * c];
    c = Math.cos(ay); s = Math.sin(ay);
    [x, z] = [x * c + z * s, -x * s + z * c];
    c = Math.cos(az); s = Math.sin(az);
    [x, y] = [x * c - y * s, x * s + y * c];
    return [x, y, z];
  }

  const FOCAL = 4;
  function project(p) {
    const k = FOCAL / (FOCAL + p[2]);
    const unit = size * 0.27;
    return [size / 2 + p[0] * k * unit, size / 2 + p[1] * k * unit, k];
  }

  function drawWire(verts, edges, scale, ax, ay, az, colour, width) {
    const pts = verts.map(v => rotate([v[0] * scale, v[1] * scale, v[2] * scale], ax, ay, az));
    const scr = pts.map(project);
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    edges.forEach(([a, b]) => {
      const depth = (pts[a][2] + pts[b][2]) / 2;            // -scale (near) .. +scale (far)
      ctx.globalAlpha = 0.2 + 0.8 * (1 - (depth + scale) / (2 * scale));
      ctx.beginPath();
      ctx.moveTo(scr[a][0], scr[a][1]);
      ctx.lineTo(scr[b][0], scr[b][1]);
      ctx.stroke();
    });
    return { pts, scr };
  }

  let pointerX = 0, pointerY = 0, easeX = 0, easeY = 0;
  if (canHover) {
    window.addEventListener('pointermove', e => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
  }

  let frame = 0;
  function draw(time) {
    const t = time / 1000;
    if (frame++ % 90 === 0) readColours();
    easeX += (pointerX - easeX) * 0.06;
    easeY += (pointerY - easeY) * 0.06;
    stage.style.setProperty('--sry', (easeX * 26).toFixed(2) + 'deg');
    stage.style.setProperty('--srx', (-easeY * 26).toFixed(2) + 'deg');

    ctx.clearRect(0, 0, size, size);
    const ax = t * 0.22 + easeY * 1.2;
    const ay = t * 0.31 + easeX * 1.6;

    // Rings (behind and in front, depth-faded)
    rings.forEach(ring => {
      ctx.fillStyle = colours[ring.colour];
      for (let i = 0; i < ring.count; i++) {
        const a = (i / ring.count) * Math.PI * 2 + t * ring.speed;
        let p = [Math.cos(a) * ring.radius, 0, Math.sin(a) * ring.radius];
        p = rotate(p, ring.tiltX + easeY * 0.6, easeX * 0.8, ring.tiltZ);
        const s = project(p);
        ctx.globalAlpha = Math.max(0.08, 0.75 - (p[2] + ring.radius) / (2 * ring.radius) * 0.7);
        ctx.beginPath();
        ctx.arc(s[0], s[1], 1.5 * s[2], 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Inner core, then outer shell
    drawWire(octVerts, octEdges, 0.62, -ax * 1.4, -ay * 1.2, t * 0.2, colours.lime, 1.2);
    const shell = drawWire(icoVerts, icoEdges, 1.05, ax, ay, 0, colours.accent, 1.5);

    // Shell vertices
    ctx.fillStyle = colours.orange;
    shell.scr.forEach((s, i) => {
      ctx.globalAlpha = 0.35 + 0.65 * (1 - (shell.pts[i][2] + 1.05) / 2.1);
      ctx.beginPath();
      ctx.arc(s[0], s[1], 3 * s[2], 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  let running = false, rafId = 0;
  function loop(time) {
    draw(time);
    if (running) rafId = requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener('resize', () => { resize(); if (!running) draw(performance.now()); });

  if (reduceMotion) {
    draw(4000);
    return;
  }

  // Only animate while the hero is on screen and the tab is visible
  const start = () => { if (!running) { running = true; rafId = requestAnimationFrame(loop); } };
  const stop = () => { running = false; cancelAnimationFrame(rafId); };
  let onScreen = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      onScreen = entries[0].isIntersecting;
      (onScreen && !document.hidden) ? start() : stop();
    }).observe(stage);
  } else {
    start();
  }
  document.addEventListener('visibilitychange', () => {
    (onScreen && !document.hidden) ? start() : stop();
  });
})();
