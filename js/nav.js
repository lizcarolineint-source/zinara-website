// Zinara Navigation & Interactions Script - MOBILE OPTIMIZED
(function() {
  'use strict';

  // ==========================================
  // NAVIGATION TOGGLE FOR MOBILE
  // ==========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const allNavLinks = document.querySelectorAll('.nav-links a');

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close menu when link is clicked
  allNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks) {
        navLinks.classList.remove('active');
      }
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navLinks && navToggle) {
      if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navLinks) {
      navLinks.classList.remove('active');
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    }
  });

  // Highlight active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === '/' && currentPage === 'index.html') {
      link.classList.add('active');
    } else if (href === currentPage || href.includes(currentPage)) {
      link.classList.add('active');
    }
  });

  // ==========================================
  // FAQ ACCORDION FUNCTIONALITY
  // ==========================================
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const isOpen = item.classList.contains('open');
      
      // Close all other items
      document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.classList.remove('open');
      });
      
      // Toggle current item
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Keyboard navigation for FAQ
  faqHeaders.forEach((header, index) => {
    header.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextHeader = faqHeaders[index + 1];
        if (nextHeader) nextHeader.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevHeader = faqHeaders[index - 1];
        if (prevHeader) prevHeader.focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ==========================================
  // ANIMATED METRICS COUNTERS
  // ==========================================
  function animateCounter(element, target, duration = 2000) {
    const originalText = element.textContent;
    const isPercentage = originalText.includes('%');
    const isSeconds = originalText.includes('s');
    const isMultiplier = originalText.includes('x');
    const hasPlus = originalText.includes('+');
    const hasSlash = originalText.includes('/');
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    function update() {
      current += increment;
      if (current >= target) {
        // Display final value with correct format
        if (hasSlash) {
          element.textContent = target + '/5';
        } else if (isPercentage) {
          element.textContent = target + '%';
        } else if (isSeconds) {
          element.textContent = target + 's';
        } else if (isMultiplier) {
          element.textContent = target + 'x';
        } else if (hasPlus) {
          element.textContent = target.toLocaleString() + '+';
        } else {
          element.textContent = target.toLocaleString();
        }
      } else {
        const displayValue = Math.floor(current);
        // Display intermediate value with correct format
        if (hasSlash) {
          element.textContent = displayValue + '/5';
        } else if (isPercentage) {
          element.textContent = displayValue + '%';
        } else if (isSeconds) {
          element.textContent = displayValue + 's';
        } else if (isMultiplier) {
          element.textContent = displayValue + 'x';
        } else if (hasPlus) {
          element.textContent = displayValue.toLocaleString() + '+';
        } else {
          element.textContent = displayValue.toLocaleString();
        }
        requestAnimationFrame(update);
      }
    }

    update();
  }

  // ==========================================
  // INTERSECTION OBSERVER FOR METRICS
  // ==========================================
  const counters = document.querySelectorAll('[data-count]');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateCounter(entry.target, target, 2000);
        entry.target.classList.add('counted');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));

  // ==========================================
  // CTA BUTTON LOGIC
  // ==========================================
  const allCTAs = document.querySelectorAll('a.btn');
  allCTAs.forEach(cta => {
    cta.addEventListener('click', function(e) {
      // Ensure the link is properly clickable
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#')) {
        // For non-anchor links, let the browser handle navigation
        return;
      }
      
      // For anchor links, handle smooth scroll
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ==========================================
  // SMOOTH SCROLL TO SECTIONS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return; // Skip empty anchors
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================
  // SCROLL-BASED ANIMATIONS FOR CARDS
  // ==========================================
  const cards = document.querySelectorAll(
    '.card, .benefit-card, .case-study-card, .testimonial, .pricing-card, .process-step, .metric-card'
  );
  
  const cardObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  }, cardObserverOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
  });

  // ==========================================
  // BUTTON HOVER EFFECTS
  // ==========================================
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
  });

  // ==========================================
  // FORM VALIDATION (if forms exist)
  // ==========================================
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = this.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ff6b6b';
          isValid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) {
        e.preventDefault();
        console.warn('Form validation failed');
      }
    });
  });

  // ==========================================
  // LAZY LOAD IMAGES (if data-src attribute exists)
  // ==========================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }

  // ==========================================
  // PERFORMANCE MONITORING
  // ==========================================
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page Load Time:', pageLoadTime + 'ms');
    });
  }

  // ==========================================
  // ACCESSIBILITY: SKIP TO MAIN CONTENT
  // ==========================================
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const mainContent = document.querySelector('main') || document.querySelector('section');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }

})();
