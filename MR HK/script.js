    // Updated Skills (AI removed, VS Code + Dart added - total 12 real icons)
    const skills = [
      { name: 'HTML5', iconClass: 'devicon-html5-plain' },
      { name: 'CSS3', iconClass: 'devicon-css3-plain' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
      { name: 'Python', iconClass: 'devicon-python-plain' },
      { name: 'Django', iconClass: 'devicon-django-plain' },
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain' },
      { name: 'Docker', iconClass: 'devicon-docker-plain' },
      { name: 'Git', iconClass: 'devicon-git-plain' },
      { name: 'Flutter', iconClass: 'devicon-flutter-plain' },
      { name: 'Dart', iconClass: 'devicon-dart-plain' },
      { name: 'Figma', iconClass: 'devicon-figma-plain' },
      { name: 'VS Code', iconClass: 'devicon-vscode-plain' }
    ];

    const projects = [
      {
        id: 1, title: 'E-Commerce Platform',
        description: 'Full-stack solution with React and Django',
        fullDescription: 'A complete e-commerce solution featuring user authentication, product catalog, shopping cart, payment processing, and order management built for scale.',
        tech: ['React', 'Django', 'PostgreSQL', 'Stripe'],
        color: '#D6FF4F',
        features: ['User auth & authorization', 'Product search & filtering', 'Shopping cart & checkout', 'Payment integration']
      },
      {
        id: 2, title: 'Task Management App',
        description: 'Productivity tool with real-time collaboration',
        fullDescription: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        color: '#4F46E5',
        features: ['Real-time collaboration', 'Drag & drop interface', 'Team workspaces', 'Deadline reminders']
      },
      {
        id: 3, title: 'Weather Dashboard',
        description: 'Interactive weather app with forecasts',
        fullDescription: 'An interactive weather application providing real-time weather data, 7-day forecasts, and location-based services with dynamic visualizations.',
        tech: ['React', 'OpenWeather', 'Chart.js'],
        color: '#0EA5E9',
        features: ['Location detection', '7-day forecast', 'Weather maps', 'Temperature graphs']
      },
      {
        id: 4, title: 'Social Media Analytics',
        description: 'Data visualization for social metrics',
        fullDescription: 'A comprehensive analytics dashboard for tracking social media performance across multiple platforms securely.',
        tech: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
        color: '#F97316',
        features: ['Custom dashboards', 'Automated reports', 'Audience insights', 'Engagement metrics']
      },
      {
        id: 5, title: 'Cyberpunk Portfolio',
        description: 'Modern portfolio with bold design',
        fullDescription: 'A modern portfolio website featuring brutalist/cyberpunk design elements, smooth animations, and responsive layout without heavy frameworks.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
        color: '#A855F7',
        features: ['Bold design language', 'Smooth animations', 'Custom cursor', 'Intersection Observer reveals']
      }
    ];

    // Initialization
    document.addEventListener('DOMContentLoaded', () => {
      initCursor();
      renderSkills();
      renderProjects();
      initReveal();
      initMobileMenu();
      initContactForm();
    });

    // Custom Cursor logic
    function initCursor() {
      const cursorDot = document.getElementById('cursor-dot');
      const cursorRing = document.getElementById('cursor-ring');
      if (!cursorDot || !cursorRing) return;

      let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, ringX = 0, ringY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
      });

      function animateCursor() {
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;

        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      // Hover Effects
      document.body.addEventListener('mouseover', (e) => {
        if(e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card')) {
          document.body.classList.add('cursor-hover');
        }
      });
      document.body.addEventListener('mouseout', (e) => {
        if(e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card')) {
          document.body.classList.remove('cursor-hover');
        }
      });
    }

    // Render Skills with REAL colored Devicon logos
    function renderSkills() {
      const container = document.getElementById('skills-grid');
      container.innerHTML = skills.map(skill => `
        <div class="skill-item">
          <div class="skill-icon">
            <i class="${skill.iconClass}"></i>
          </div>
          <span class="skill-name">${skill.name}</span>
        </div>
      `).join('');
    }

    // Render Projects (unchanged)
    function renderProjects() {
      const container = document.getElementById('projects-grid');
      container.innerHTML = projects.map((p, i) => `
        <div class="project-card cursor-pointer" onclick="openModal(${p.id})">
          <div class="project-number">0${i + 1}</div>
          <div class="project-image" style="background: linear-gradient(45deg, ${p.color}15, transparent)">
            <div class="project-image-inner font-display" style="color: ${p.color}">
              ${p.title.substring(0,2).toUpperCase()}
            </div>
          </div>
          <div class="project-content">
            <div>
              <h3 class="project-title">${p.title}</h3>
              <p class="project-desc">${p.description}</p>
            </div>
            <div class="project-tags">
              ${p.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Modal Logic
    const modal = document.getElementById('modal');
    
    function openModal(id) {
      const p = projects.find(proj => proj.id === id);
      if(!p) return;
      
      document.getElementById('modal-title').innerText = p.title;
      document.getElementById('modal-body').innerHTML = `
        <div class="mb-8">
          <p class="text-[var(--fg-muted)] mb-6 text-lg">${p.fullDescription}</p>
          <div class="flex flex-wrap gap-2 mb-8">
            ${p.tech.map(t => `<span class="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-wider">${t}</span>`).join('')}
          </div>
          
          <h4 class="text-xs uppercase tracking-[0.15em] text-[var(--accent)] mb-4">Key Features</h4>
          <ul class="space-y-3 mb-8 text-[var(--fg-muted)]">
            ${p.features.map(f => `<li class="flex items-center gap-3"><span class="text-[var(--accent)]">→</span> ${f}</li>`).join('')}
          </ul>
        </div>
        
        <div class="flex gap-4">
          <button class="submit-btn py-3 px-6" onclick="closeModal()">View Live App</button>
          <button class="submit-btn py-3 px-6 bg-transparent border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]" onclick="closeModal()">GitHub Repo</button>
        </div>
      `;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.getElementById('modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if(e.target === modal) closeModal();
    });

    // Reveal Animation on Scroll
    function initReveal() {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
      
      reveals.forEach(reveal => observer.observe(reveal));
    }

    // Mobile Menu
    function initMobileMenu() {
      const btn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('mobile-nav-close');
      const nav = document.getElementById('mobile-nav');
      const links = nav.querySelectorAll('a');

      btn.addEventListener('click', () => nav.classList.add('active'));
      closeBtn.addEventListener('click', () => nav.classList.remove('active'));
      links.forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));
    }

    // Contact Form Stub
    function initContactForm() {
      const form = document.getElementById('contact-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.style.opacity = '0.7';
        
        // Simulate sending
        setTimeout(() => {
          btn.innerText = 'Message Sent!';
          btn.style.background = '#4CAF50';
          btn.style.color = '#fff';
          btn.style.opacity = '1';
          form.reset();
          
          setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'var(--accent)';
            btn.style.color = 'var(--bg)';
          }, 3000);
        }, 1500);
      });
    }