'use strict';

/* =========================================================
   PORTFOLIO — ADITYA PRATAMA
   ========================================================= */

const root = document.documentElement;
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = () => reduceMotionQuery.matches;

/* ---------- Data proyek ---------- */
const projects = [
  {
    id: 1,
    title: 'Adit Servis Yuk — Manajemen Servis',
    category: 'php',
    categoryLabel: 'PHP',
    year: '2026',
    icon: 'icon-code',
    summary: 'Aplikasi web untuk mencatat data pelanggan, perangkat servis, status pengerjaan, dan riwayat transaksi.',
    description:
      'Adit Servis Yuk adalah aplikasi manajemen servis berbasis PHP. Aplikasi ini membantu pemilik usaha mencatat pelanggan, perangkat yang diservis, keluhan, status pengerjaan, hingga riwayat servis dalam satu tempat.',
    features: [
      'Pendataan pelanggan dan perangkat servis',
      'Pencatatan keluhan serta status pengerjaan',
      'Riwayat transaksi servis',
      'Tampilan dashboard yang mudah digunakan'
    ],
    tech: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
    link: 'https://github.com/aditrekayasa22-11/aditservisyuk',
    demo: 'https://aditrekayasa22-11.github.io/aditservisyuk/'
  },
  {
    id: 2,
    title: 'Absensi Siswa — Kehadiran Digital',
    category: 'php',
    categoryLabel: 'PHP',
    year: '2026',
    icon: 'icon-users',
    summary: 'Sistem absensi siswa berbasis web untuk mencatat kehadiran dan merekap data absensi secara digital.',
    description:
      'Absensi Siswa membantu guru dan petugas sekolah mencatat kehadiran siswa setiap hari tanpa rekap manual. Data siswa, kelas, dan riwayat kehadiran tersusun lebih rapi dan mudah dicari.',
    features: [
      'Pendataan siswa dan kelas',
      'Pencatatan kehadiran harian',
      'Rekap data absensi siswa',
      'Antarmuka sederhana dan responsif'
    ],
    tech: ['PHP', 'MySQL', 'CSS', 'JavaScript'],
    link: 'https://github.com/aditrekayasa22-11/absensi_siswa'
  },
  {
    id: 3,
    title: 'Parkir Adit — Manajemen Parkir',
    category: 'php',
    categoryLabel: 'Laravel',
    year: '2026',
    icon: 'icon-globe',
    summary: 'Aplikasi manajemen parkir untuk mencatat kendaraan masuk dan keluar, perhitungan tarif, serta riwayat transaksi.',
    description:
      'Parkir Adit dirancang untuk membantu pengelola lahan parkir mencatat kendaraan yang masuk dan keluar. Perhitungan biaya dan riwayat transaksi dibuat lebih tertata sehingga mengurangi pencatatan manual.',
    features: [
      'Pencatatan kendaraan masuk dan keluar',
      'Perhitungan biaya parkir',
      'Riwayat transaksi parkir',
      'Pengelolaan data area dan tarif'
    ],
    tech: ['Laravel', 'PHP', 'JavaScript', 'CSS'],
    link: 'https://github.com/aditrekayasa22-11/parkir_adit'
  },
  {
    id: 4,
    title: 'Perpus Adit — Sistem Perpustakaan',
    category: 'php',
    categoryLabel: 'Laravel',
    year: '2026',
    icon: 'icon-book',
    summary: 'Sistem perpustakaan digital untuk mengelola buku, anggota, peminjaman, dan pengembalian.',
    description:
      'Perpus Adit adalah aplikasi perpustakaan berbasis web yang membantu pengelola mengatur koleksi buku, data anggota, serta transaksi peminjaman dan pengembalian secara terpusat.',
    features: [
      'Pengelolaan data buku dan anggota',
      'Transaksi peminjaman dan pengembalian',
      'Pencarian koleksi buku',
      'Riwayat peminjaman anggota'
    ],
    tech: ['Laravel', 'PHP', 'JavaScript', 'CSS'],
    link: 'https://github.com/aditrekayasa22-11/perpus_adit'
  },
  {
    id: 5,
    title: 'Perpustakaan SMK — Informasi Sekolah',
    category: 'php',
    categoryLabel: 'PHP',
    year: '2026',
    icon: 'icon-book',
    summary: 'Aplikasi perpustakaan sekolah untuk mengelola koleksi buku, data anggota, dan sirkulasi peminjaman.',
    description:
      'Perpustakaan SMK dibuat untuk kebutuhan perpustakaan sekolah. Aplikasi ini memudahkan petugas dalam mendata buku, mengelola anggota, serta mencatat peminjaman dan pengembalian buku.',
    features: [
      'Katalog dan data buku',
      'Pendataan anggota perpustakaan',
      'Pencatatan peminjaman dan pengembalian',
      'Laporan data perpustakaan'
    ],
    tech: ['PHP', 'JavaScript', 'CSS'],
    link: 'https://github.com/aditrekayasa22-11/perpustakaan-smk'
  },
  {
    id: 6,
    title: 'Peminjaman Barang — Dashboard Sekolah',
    category: 'js',
    categoryLabel: 'JavaScript',
    year: '2026',
    icon: 'icon-globe',
    summary: 'Dashboard peminjaman barang sekolah dengan data siswa, stok barang, transaksi, dan riwayat.',
    description:
      'Aplikasi Peminjaman Barang membantu sekolah mengelola peminjaman inventaris. Mulai dari data siswa, stok barang, formulir peminjaman, pengembalian, hingga riwayat transaksi. Aplikasi ini sudah dipublikasikan melalui GitHub Pages.',
    features: [
      'Dashboard ringkasan peminjaman',
      'Pengelolaan data siswa dan stok barang',
      'Formulir peminjaman dan pengembalian',
      'Riwayat seluruh transaksi'
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    link: 'https://github.com/aditrekayasa22-11/aplikasi-peminjaman-barang',
    demo: 'https://aditrekayasa22-11.github.io/aplikasi-peminjaman-barang/'
  }
];

/* ---------- Tema terang / gelap ---------- */
const themeToggle = document.getElementById('theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme, persist) {
  const isDark = theme === 'dark';

  if (isDark) {
    root.dataset.theme = 'dark';
  } else {
    root.removeAttribute('data-theme');
  }

  if (persist) {
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (error) { /* localStorage tidak tersedia */ }
  }

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
  }

  if (themeMeta) {
    themeMeta.setAttribute('content', isDark ? '#0b1220' : '#f6f8fc');
  }
}

applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });
}

/* ---------- Navigasi mobile ---------- */
const siteHeader = document.getElementById('site-header');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const desktopNavQuery = window.matchMedia('(min-width: 901px)');

function setNavState(open) {
  if (!navToggle || !navLinks) return;

  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  navLinks.classList.toggle('is-open', open);
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setNavState(!isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavState(false));
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.classList.contains('is-open')) return;
    if (navLinks.contains(event.target) || navToggle.contains(event.target)) return;
    setNavState(false);
  });

  const handleDesktopNav = (event) => {
    if (event.matches) setNavState(false);
  };

  if (typeof desktopNavQuery.addEventListener === 'function') {
    desktopNavQuery.addEventListener('change', handleDesktopNav);
  } else if (typeof desktopNavQuery.addListener === 'function') {
    desktopNavQuery.addListener(handleDesktopNav);
  }
}

/* ---------- Scroll: header, progress, back to top ---------- */
const progressBar = document.getElementById('scroll-progress-bar');
const backToTop = document.getElementById('back-to-top');
let scrollTicking = false;

function updateOnScroll() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (siteHeader) {
    siteHeader.classList.toggle('scrolled', scrollTop > 12);
  }

  if (progressBar) {
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  }

  if (backToTop) {
    backToTop.classList.toggle('is-visible', scrollTop > 640);
  }

  scrollTicking = false;
}

function onScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(updateOnScroll);
}

window.addEventListener('scroll', onScroll, { passive: true });
updateOnScroll();

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
}

/* ---------- Navigasi aktif saat scroll ---------- */
const navAnchors = Array.from(document.querySelectorAll('.nav-link'));
const observedSections = Array.from(document.querySelectorAll('main section[id]'));

function setActiveNav(id) {
  navAnchors.forEach((anchor) => {
    anchor.classList.toggle('active', anchor.getAttribute('href') === `#${id}`);
  });
}

if ('IntersectionObserver' in window && observedSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    },
    { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
  );

  observedSections.forEach((section) => navObserver.observe(section));
}

/* ---------- Animasi reveal ---------- */
function initReveal() {
  const revealElements = Array.from(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

/* ---------- Animasi angka statistik ---------- */
function initCounters() {
  const counters = Array.from(document.querySelectorAll('[data-count]'));

  const runCounter = (element) => {
    const target = Number(element.dataset.count) || 0;

    if (prefersReducedMotion()) {
      element.textContent = String(target);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = String(Math.round(target * eased));

      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(runCounter);
    return;
  }

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/* ---------- Progress bar keahlian ---------- */
function initSkills() {
  const bars = Array.from(document.querySelectorAll('.skill-bar'));

  const fillBar = (bar) => {
    bar.style.width = `${Number(bar.dataset.level) || 0}%`;
  };

  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    bars.forEach(fillBar);
    return;
  }

  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        fillBar(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => skillObserver.observe(bar));
}

/* ---------- Efek mengetik ---------- */
function initTyping() {
  const typedText = document.getElementById('typed-text');
  if (!typedText || prefersReducedMotion()) return;

  const roles = ['Web Developer', 'UI/UX Enthusiast', 'Front-End Learner', 'Problem Solver'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  typedText.textContent = '';

  const tick = () => {
    const word = roles[roleIndex];

    if (!deleting) {
      charIndex += 1;
      typedText.textContent = word.slice(0, charIndex);

      if (charIndex >= word.length) {
        deleting = true;
        window.setTimeout(tick, 1700);
        return;
      }

      window.setTimeout(tick, 85);
      return;
    }

    charIndex -= 1;
    typedText.textContent = word.slice(0, Math.max(charIndex, 0));

    if (charIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      window.setTimeout(tick, 350);
      return;
    }

    window.setTimeout(tick, 42);
  };

  window.setTimeout(tick, 600);
}

/* ---------- Render proyek ---------- */
const projectGrid = document.getElementById('project-grid');

function projectCardTemplate(project, index) {
  const tags = project.tech
    .slice(0, 3)
    .map((tech) => `<span class="chip">${tech}</span>`)
    .join('');

  const cardDemo = project.demo
    ? ` data-demo="${project.demo}" tabindex="0" role="link" aria-label="Buka demo ${project.title}"`
    : '';

  const demoLink = project.demo
    ? `<a class="project-repo" href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Buka demo ${project.title}" title="Buka demo">
         <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg>
       </a>`
    : '';

  return `
    <article class="project-card reveal" data-category="${project.category}"${cardDemo} style="--delay: ${Math.min(index * 55, 280)}ms">
      <div class="project-thumb thumb-${project.category}">
        <span class="chip thumb-chip">${project.categoryLabel}</span>
        <span class="thumb-year">${project.year}</span>
        <svg class="icon thumb-icon" aria-hidden="true"><use href="#${project.icon}"></use></svg>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-footer">
          <span class="project-index">Proyek ${String(index + 1).padStart(2, '0')}</span>
          <div class="project-actions">
            ${demoLink}
            <a class="project-repo" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Buka repository GitHub ${project.title}" title="Buka repository GitHub">
              <svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg>
            </a>
            <button class="project-link" type="button" data-project="${project.id}">
              Lihat Detail
              <svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.innerHTML = projects.map(projectCardTemplate).join('');
}

/* ---------- Filter proyek ---------- */
function initProjectFilters() {
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => {
        const isCurrent = item === button;
        item.classList.toggle('is-active', isCurrent);
        item.setAttribute('aria-pressed', String(isCurrent));
      });

      const filter = button.dataset.filter;
      const cards = Array.from(document.querySelectorAll('.project-card'));

      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);

        if (show && !prefersReducedMotion() && typeof card.animate === 'function') {
          card.animate(
            [
              { opacity: 0, transform: 'translateY(14px)' },
              { opacity: 1, transform: 'none' }
            ],
            { duration: 280, easing: 'ease-out' }
          );
        }
      });
    });
  });
}

/* ---------- Modal detail proyek ---------- */
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
let lastFocusedElement = null;

function openProjectModal(project) {
  if (!modal || !modalContent) return;

  lastFocusedElement = document.activeElement;

  const features = project.features
    .map(
      (feature) => `
        <li>
          <svg class="icon" aria-hidden="true"><use href="#icon-check"></use></svg>
          <span>${feature}</span>
        </li>`
    )
    .join('');

  const techTags = project.tech
    .map((tech) => `<span class="chip">${tech}</span>`)
    .join('');

  const demoAction = project.demo
    ? `<a class="btn btn-primary btn-sm" href="${project.demo}" target="_blank" rel="noopener noreferrer">
         Buka Demo
         <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg>
       </a>`
    : '';

  const repoButtonClass = project.demo ? 'btn-ghost' : 'btn-primary';

  modalContent.innerHTML = `
    <div class="modal-meta">
      <span class="chip chip-primary">${project.categoryLabel}</span>
      <span class="modal-year">${project.year}</span>
    </div>
    <h3 id="modal-title">${project.title}</h3>
    <p class="modal-desc">${project.description}</p>
    <h4>Fitur Utama</h4>
    <ul class="modal-features">${features}</ul>
    <h4>Teknologi</h4>
    <div class="modal-tags">${techTags}</div>
    <div class="modal-actions">
      ${demoAction}
      <a class="btn ${repoButtonClass} btn-sm" href="${project.link}" target="_blank" rel="noopener noreferrer">
        Lihat Repository
        <svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg>
      </a>
    </div>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (modalClose) modalClose.focus();
}

function closeProjectModal() {
  if (!modal || !modal.classList.contains('is-open')) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

if (modal && modalContent) {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-project]');
    if (!trigger) return;

    const projectId = Number(trigger.dataset.project);
    const project = projects.find((item) => item.id === projectId);
    if (project) openProjectModal(project);
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  const backdrop = modal.querySelector('[data-close-modal]');
  if (backdrop) {
    backdrop.addEventListener('click', closeProjectModal);
  }

  modal.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;

    const focusables = Array.from(modal.querySelectorAll('button, a[href]'));
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  setNavState(false);
  closeProjectModal();
});

/* ---------- Buka demo dari kartu proyek ---------- */
function openCardDemo(card) {
  if (!card || !card.dataset.demo) return;
  window.open(card.dataset.demo, '_blank', 'noopener,noreferrer');
}

document.addEventListener('click', (event) => {
  const card = event.target.closest('.project-card[data-demo]');
  if (!card || event.target.closest('a, button')) return;
  openCardDemo(card);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;

  const card = event.target.closest('.project-card[data-demo]');
  if (!card || event.target.closest('a, button')) return;

  event.preventDefault();
  openCardDemo(card);
});

/* ---------- Galeri orbit hero ---------- */
function initHeroOrbit() {
  const stage = document.getElementById('hero-orbit');
  if (!stage) return;

  const cards = Array.from(stage.querySelectorAll('[data-orbit-angle]'));
  if (!cards.length) return;

  const baseAngles = cards.map((card) => Number(card.dataset.orbitAngle) || 0);
  const duration = 32000;
  let frameId = 0;
  let running = false;
  let elapsed = 0;
  let lastTime = 0;

  function positionCards(now) {
    if (!lastTime) lastTime = now;

    if (!prefersReducedMotion()) {
      elapsed += now - lastTime;
    }
    lastTime = now;

    const rect = stage.getBoundingClientRect();
    const radiusX = rect.width * 0.34;
    const radiusY = rect.height * 0.27;
    const turn = (elapsed / duration) * 360;

    cards.forEach((card, index) => {
      const angle = ((baseAngles[index] + turn) * Math.PI) / 180;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      const depth = (Math.sin(angle) + 1) / 2;
      const scale = 0.84 + depth * 0.16;
      const tilt = (index % 2 === 0 ? -1 : 1) * (4 + depth * 5);

      card.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)}) rotate(${tilt.toFixed(1)}deg)`;
      card.style.zIndex = String(1 + Math.round(depth * 7));
      card.style.opacity = String(0.74 + depth * 0.26);
    });
  }

  function tick(now) {
    if (!running) return;
    positionCards(now);
    frameId = requestAnimationFrame(tick);
  }

  function start() {
    if (running || prefersReducedMotion()) return;
    running = true;
    lastTime = 0;
    frameId = requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(frameId);
  }

  if (prefersReducedMotion()) {
    positionCards(0);
    window.addEventListener('resize', () => positionCards(performance.now()));
    return;
  }

  start();

  stage.addEventListener('pointerenter', stop);
  stage.addEventListener('pointerleave', start);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });
}

/* ---------- Tahun berjalan ---------- */
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

/* ---------- Inisialisasi ---------- */
renderProjects();
initProjectFilters();
initHeroOrbit();
initReveal();
initCounters();
initSkills();
initTyping();
