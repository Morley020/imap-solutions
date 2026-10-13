'use strict';
(() => {
  const nav = document.getElementById('primary-nav');
  const toggle = document.querySelector('.menu-toggle');
  const closeNavigation = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
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

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(item => {
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

  const searchDialog = document.getElementById('site-search');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let pageList = [];
  let searchLoaded = false;
  const words = {
    '/services/digital-systems/': 'software DHIS2 REDCap Kobo SmartCare mobile application AI ChatOps Text-to-SQL OCR GIS ERP API digital health',
    '/services/infrastructure/': 'Dell HP computers laptops printers hardware power solar server database networking Wi-Fi structured cabling VoIP VPN upgrades support SLA maintenance',
    '/services/security-communications/': 'CCTV camera security biometric access control privacy governance SMS OTP communications campaigns',
    '/services/research-data/': 'research baseline midline endline evaluation impact programme field data analytics dashboards',
    '/products/nyoniline/': 'poultry farmer Nyoni Nyoniline flock feed offline vaccination market',
    '/products/lumikiza/': 'SME founders advisor business Whitewood Lumikiza',
    '/products/rais/': 'RAIS church religious member institution household records',
    '/contact/': 'contact email call quote quotation address Chibombo Zambia'
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
          const response = await fetch('/manus-routes.json');
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
      window.location.href = `mailto:info@imapsolutions.co.zm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Email draft prepared. If your email app opens, press send there. Nothing has been submitted through this website. You can also copy the enquiry and email info@imapsolutions.co.zm directly.';
    });
    form.querySelector('.copy-enquiry').addEventListener('click', async () => {
      if (!form.reportValidity()) return;
      const {subject, body} = details();
      try {
        await navigator.clipboard.writeText(`${subject}\n\n${body}`);
        status.textContent = 'Enquiry copied. Paste it into an email to info@imapsolutions.co.zm and send when ready. Nothing has been submitted automatically.';
      } catch {
        status.textContent = 'Clipboard access is unavailable. Please use Prepare enquiry email or send your details directly to info@imapsolutions.co.zm.';
      }
    });
  }
})();
