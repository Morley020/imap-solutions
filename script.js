'use strict';
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nav = document.getElementById('primary-nav');
  const toggle = document.querySelector('.menu-toggle');
  const closeNavigation = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('nav-open', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNavigation));
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeNavigation();
      document.querySelectorAll('.nav-dropdown[open]').forEach(item => {
        if (!item.contains(event.target)) item.open = false;
      });
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      const wasOpen = nav.classList.contains('open');
      closeNavigation();
      document.querySelectorAll('.nav-dropdown[open]').forEach(item => {
        item.open = false;
        if (!wasOpen) item.querySelector('summary').focus();
      });
      if (wasOpen) toggle.focus();
    });
    window.matchMedia('(min-width: 1001px)').addEventListener('change', closeNavigation);
  }

  // Header state, reading progress and gentle hero parallax.
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress span');
  const heroMedia = document.querySelector('.hero-media img');
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY || 0;
    if (header) header.classList.toggle('is-scrolled', y > 12);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    }
    if (heroMedia && !reducedMotion.matches && y < window.innerHeight) {
      heroMedia.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(1.04)`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  // Scroll reveals with light stagger.
  const revealTargets = document.querySelectorAll([
    '.section-heading', '.split-heading', '.challenge-card', '.service-row', '.service-card',
    '.proof-card', '.sector-pathway', '.operating-step', '.nyoni-feature', '.about-bridge figure',
    '.pipeline article', '.feature-list article', '.faq-layout', '.org-card', '.contact-detail',
    '#enquiry-form', '.insight-link', '.closing-inner > *', '.work-detail article', '.project-list article',
    '.about-summary > div', '.location-layout > *'
  ].join(','));
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach((item, index) => {
      item.classList.add('reveal', 'ready');
      item.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
      observer.observe(item);
    });
    document.querySelectorAll('.reveal:not(.ready)').forEach(item => {
      item.classList.add('ready');
      observer.observe(item);
    });
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        document.querySelectorAll('.reveal').forEach(item => item.classList.add('visible'));
        observer.disconnect();
      }
    });
  }

  // Count-up for the hero proof numbers.
  const counters = document.querySelectorAll('.hero-stat strong');
  if (counters.length && !reducedMotion.matches && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        const target = Number(el.textContent.trim());
        if (!Number.isFinite(target)) { countObserver.unobserve(el); continue; }
        const start = performance.now();
        const duration = 1100;
        const step = now => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = String(Math.round(target * eased)).padStart(2, '0');
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      }
    }, { threshold: 0.6 });
    counters.forEach(counter => countObserver.observe(counter));
  }

  const modeToggle = document.querySelector('.mode-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const setMode = mode => {
    const light = mode === 'light';
    document.documentElement.classList.toggle('light-mode', light);
    if (themeMeta) themeMeta.setAttribute('content', light ? '#f8f4ec' : '#07192d');
    if (!modeToggle) return;
    modeToggle.setAttribute('aria-pressed', String(light));
    modeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    modeToggle.setAttribute('title', light ? 'Switch to dark mode' : 'Switch to light mode');
    const icon = modeToggle.querySelector('.mode-icon');
    if (icon) icon.textContent = light ? '☾' : '☼';
  };
  const storedMode = window.localStorage.getItem('imap-color-mode');
  setMode(storedMode === 'light' ? 'light' : 'dark');
  modeToggle?.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('light-mode') ? 'dark' : 'light';
    window.localStorage.setItem('imap-color-mode', next);
    setMode(next);
  });

  const searchDialog = document.getElementById('site-search');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let pageList = [];
  let searchLoaded = false;
  const words = {
    '/services/digital-systems/': 'software DHIS2 REDCap Kobo SmartCare mobile application AI ChatOps Text-to-SQL OCR GIS ERP API digital health',
    '/services/infrastructure/': 'Dell HP computers laptops printers hardware power solar server database networking Wi-Fi structured cabling VoIP VPN upgrades support SLA maintenance',
    '/services/security-communications/': 'CCTV camera security biometric access control privacy governance SMS OTP communications campaigns',
    '/services/research-data/': 'research baseline midline endline evaluation impact programme field research business intelligence analytics dashboards',
    '/products/nyoniline/': 'poultry farmer Nyoni Nyoniline flock feed offline vaccination market',
    '/products/lumikiza/': 'SME founders advisor business Whitewood Lumikiza',
    '/products/rais/': 'RAIS church religious member institution household records',
    '/contact/': 'contact email call quote quotation address Chibombo Zambia',
    '/technology/': 'technology tools stack software AI data infrastructure cybersecurity networks DHIS2 KoboToolbox REDCap Python JavaScript Wireshark'
  };
  const showResults = () => {
    searchResults.replaceChildren();
    const query = searchInput.value.trim().toLowerCase();
    const results = pageList.filter(item => !query || `${item.title} ${words[item.path] || ''}`.toLowerCase().includes(query)).slice(0, 10);
    for (const result of results) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = result.path;
      a.textContent = result.title;
      li.appendChild(a);
      searchResults.appendChild(li);
    }
    if (!results.length) {
      const li = document.createElement('li');
      li.className = 'empty';
      li.textContent = 'No matching page. Try a service name or browse the service directory.';
      searchResults.appendChild(li);
    }
  };
  if (searchDialog && searchInput && searchResults) {
    document.querySelector('.search-button').addEventListener('click', async () => {
      closeNavigation();
      searchDialog.showModal();
      searchInput.focus();
      if (!searchLoaded) {
        try {
          const response = await fetch('/routes.json');
          if (!response.ok) throw new Error('Route list unavailable');
          const data = await response.json();
          pageList = data.routes;
          searchLoaded = true;
        } catch {
          pageList = [{ path:'/services/', title:'Browse the service directory' }, {path:'/products/', title:'Browse digital products' }, { path:'/contact/', title:'Contact iMap' }];
        }
      }
      showResults();
    });
    searchInput.addEventListener('input', showResults);
    searchDialog.addEventListener('click', event => {
      const bounds = searchDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) searchDialog.close();
    });
  }

  const notFoundForm = document.getElementById('not-found-search');
  const notFoundInput = document.getElementById('not-found-input');
  const notFoundResults = document.getElementById('not-found-results');
  if (notFoundForm && notFoundInput && notFoundResults) {
    const loadNotFoundRoutes = async () => {
      if (searchLoaded) return;
      try {
        const response = await fetch('/routes.json');
        if (!response.ok) throw new Error('Route list unavailable');
        pageList = (await response.json()).routes;
        searchLoaded = true;
      } catch {
        pageList = [{path:'/services/',title:'Browse the service directory'}, {path:'/products/',title:'Browse digital products'}, {path:'/contact/',title:'Contact iMap'}];
      }
    };
    const renderNotFoundResults = () => {
      const query = notFoundInput.value.trim().toLowerCase();
      const results = pageList.filter(item => !query || `${item.title} ${words[item.path] || ''}`.toLowerCase().includes(query)).slice(0, 5);
      notFoundResults.replaceChildren();
      for (const result of results) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = result.path;
        a.textContent = result.title;
        li.appendChild(a);
        notFoundResults.appendChild(li);
      }
      if (!results.length) {
        const li = document.createElement('li');
        li.className = 'empty';
        li.textContent = 'No close match yet. Try a broader term or browse the services.';
        notFoundResults.appendChild(li);
      }
    };
    loadNotFoundRoutes().then(renderNotFoundResults);
    notFoundInput.addEventListener('input', renderNotFoundResults);
    notFoundForm.addEventListener('submit', async event => {
      event.preventDefault();
      await loadNotFoundRoutes();
      renderNotFoundResults();
      notFoundResults.focus?.();
    });
  }

  const form = document.getElementById('enquiry-form');
  if (form) {
    const topic = new URLSearchParams(window.location.search).get('topic');
    if (topic && Array.from(form.elements.topic.options).some(option => option.value === topic)) form.elements.topic.value = topic;
    const status = form.querySelector('.form-status');
    const details = () => {
      const values = new FormData(form);
      const subject = `iMap scoping enquiry: ${values.get('topic')}`;
      const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\nOrganisation: ${values.get('organisation') || 'Not specified'}\nTopic: ${values.get('topic')}\n\n${values.get('message')}`;
      return { subject, body };
    };
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const {subject, body} = details();
      window.location.href = `mailto:imapsolutions.zm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Email draft prepared. If your email app opens, press send there. Nothing has been submitted through this website. You can also copy the enquiry and email imapsolutions.zm@gmail.com directly.';
    });
    form.querySelector('.copy-enquiry').addEventListener('click', async () => {
      if (!form.reportValidity()) return;
      const {subject, body} = details();
      try {
        await navigator.clipboard.writeText(`${subject}\n\n${body}`);
        status.textContent = 'Enquiry copied. Paste it into an email to imapsolutions.zm@gmail.com and send when ready. Nothing has been submitted automatically.';
      } catch {
        status.textContent = 'Clipboard access is unavailable. Please use Prepare enquiry email or send your details directly to imapsolutions.zm@gmail.com.';
      }
    });
  }
})();
