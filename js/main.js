/* ============================================================
   ZINGARA — main.js
   Minimal interactions only — no layout or styling logic
   ============================================================ */

(function () {
  'use strict';

  /* ---------- NAV: scroll shadow ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- NAV: mobile hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ---------- MENU PAGE TABS ---------- */
  const menuTabs = document.getElementById('menuTabs');
  if (menuTabs) {
    // Tab switching logic
    menuTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      const target = btn.dataset.tab;

      // Update active button
      menuTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide panels
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${target}`);
      });
    });

    // Desktop horizontal scroll with mouse wheel
    menuTabs.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        menuTabs.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }

  /* ---------- GALLERY FILTER ---------- */
  const galleryTabs = document.getElementById('galleryTabs');
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryTabs && galleryGrid) {
    galleryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      const filter = btn.dataset.gallery;

      galleryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
        item.style.opacity = '0';
        if (show) {
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 0.4s ease';
            item.style.opacity = '1';
          });
        }
      });
    });
  }

  /* ---------- RESERVE FORM ---------- */
  const reserveForm = document.getElementById('reserveForm');
  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value || '';
      const date = document.getElementById('date')?.value || '';
      const guests = document.getElementById('guests')?.value || '';
      const phone = document.getElementById('phone')?.value || '';

      // Build WhatsApp message and open
      const msg = `Hi Zingara! I'd like to reserve a table.\nName: ${name}\nDate: ${date}\nGuests: ${guests}\nPhone: ${phone}`;
      const url = `https://wa.me/919187103005?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener');

      const msgEl = document.getElementById('reserveMsg');
      if (msgEl) {
        msgEl.textContent = '✓ Your reservation request is being sent via WhatsApp. We\'ll confirm shortly.';
        msgEl.style.display = 'block';
      }
      reserveForm.reset();
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---------- BREAKFAST FLOATING BADGE ---------- */
  const breakfastBadge = document.getElementById('breakfastBadge');
  const breakfastTrigger = document.getElementById('breakfastBadgeTrigger');
  const breakfastClose = document.getElementById('breakfastBadgeClose');
  const breakfastLightbox = document.getElementById('breakfastLightbox');
  const breakfastLightboxClose = document.getElementById('breakfastLightboxClose');

  if (breakfastBadge && breakfastTrigger && breakfastClose && breakfastLightbox) {
    const collapseBadge = () => breakfastBadge.classList.add('is-collapsed');

    breakfastClose.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseBadge();
    });

    const openLightbox = () => {
      breakfastLightbox.classList.add('open');
    };
    const closeLightbox = () => breakfastLightbox.classList.remove('open');

    breakfastTrigger.addEventListener('click', openLightbox);
    breakfastLightboxClose?.addEventListener('click', closeLightbox);
    breakfastLightbox.addEventListener('click', (e) => {
      if (e.target === breakfastLightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ---------- SET ACTIVE NAV LINK ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

})();
