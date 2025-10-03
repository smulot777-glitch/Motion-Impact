// Motion Impact - JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Portfolio data
    const portfolioData = [
        {
            title: "Publicité Produit Tech",
            category: "motion",
            description: "Montage dynamique pour le lancement d'un Home Dashboard révolutionnaire. Création d'une vidéo publicitaire de 35 secondes alliant techniques de montage moderne et storytelling percutant.",
            client: "Nexus Home",
            duration: "35 secondes",
            objectives: ["Présenter les fonctionnalités clés", "Créer l'engouement autour du produit", "Générer des conversions"],
            results: ["Augmentation des pré-commandes", "Grande croissance de vues en 24h", "Taux d'engagement 15% au-dessus de la moyenne"],
            techniques: ["Montage rythmé", "Motion graphics intégrées", "Sound design personnalisé"]
        },
        {
            title: "Générique Série Web",
            category: "montage",
            description: "Conception et réalisation du générique d'ouverture pour une série YouTube à succès. Mélange de séquences live et d'éléments graphiques pour créer l'identité visuelle de la série.",
            client: "WebSeries Productions",
            duration: "85 secondes",
            objectives: ["Créer l'identité de la série", "Capter l'attention dès les premières secondes", "Établir le ton et l'univers"],
            results: ["Reconnaissance immédiate de la série", "Augmentation de 25% du taux de rétention", "Mémorabilité accrue auprès des viewers"],
            techniques: ["Compositing avancé", "Animation de textes", "Création d'atmosphère sonore"]
        },
        {
            title: "Showreel 2025",
            category: "montage",
            description: "Présentation des projets au cours de l'année.",
            client: "Motion Impact",
            duration: "75 secondes",
            objectives: ["Mettre en valeur la diversité des compétences en montage et motion design", "Démontrer la capacité à travailler sur différents types de projets (publicité, corporate, branding, réseaux sociaux)", "Séduire des prospects grâce à un montage rythmé et innovant"],
            results: ["Nombre de visionnages en hausse sur le site (x2 en 3 mois)", "Génération de nouveaux contacts clients suite à la diffusion du showreel", "Utilisé comme support pour décrocher des missions via Upwork et LinkedIn"],
            techniques: ["Montage cut et synchronisation musicale avancée", "Transitions dynamiques et animations typographiques", "Colorimétrie poussée (étalonnage)", "Mixage et sound design soigné", "Intégration d’éléments de motion design"]
        },
        {
            title: "Clip Vidéo",
            category: "montage",
            description: "Montage créatif sur un extrait musical, mettant en valeur la synchronisation entre l’image et le rythme sonore.",
            client: "Projet personnel",
            duration: "20 secondes",
            objectives: ["Expérimenter de nouvelles techniques de montage rapides et dynamiques", "Renforcer la dimension artistique du projet à travers le rythme et les transitions", "Montrer la polyvalence dans le choix des styles et l'adaptation à différents univers visuels"],
            results: ["Feedback très positif de la communauté sur les réseaux sociaux", "Utilisé comme référence auprès de prospects pour illustrer la créativité et l'énergie du montage", "Accroissement de la visibilité sur les plateformes de partage vidéo"],
            techniques: ["Montage rythmé sur la bande-son", "Transitions créatives et effets rapides", "Découpage précis en fonction de la musique", "Étalonnage colorimétrique pour ambiance forte", "Effets de superposition et accélérés"]
        },
        {
            title: "Transformation du jour à la nuit",
            category: "montage",
            description: "Montage expérimental explorant la transition visuelle d’une scène de jour vers une ambiance nocturne, à travers des effets spéciaux et des retouches colorimétriques.",
            client: "Projet personnel",
            duration: "40 secondes",
            objectives: ["Maîtriser les techniques de color grading pour reproduire un changement d’ambiance réaliste", "Tester des effets visuels avancés pour simuler le passage du jour à la nuit", "Démontrer la capacité à transformer radicalement l’esthétique d’une séquence"],
            results: ["Projet largement partagé sur les réseaux sociaux et forums de vidéo", "Apprécié pour la fluidité et la crédibilité de la transformation", "Ajouté comme démonstration de savoir-faire technique sur le portfolio"],
            techniques: ["Color grading avancé (baisse de luminosité, virage bleu, ajout de tons froids)", "Superpositions d’effets lumineux (lampadaires, reflets de lune, lumières de ville)", "Transitions douces entre les différentes ambiances", "Utilisation de masques et d’animations d’opacité", "Ajout de bruit vidéo et d’effets de lueur pour renforcer l’effet nocturne"]
        },
        {
            title: "Aquarium",
            category: "étalonnage",
            description: "Exercice d'étalonnage sur une séquence sous-marine, visant à révéler toute la profondeur et la richesse des couleurs dans un environnement aquatique.",
            client: "Projet personnel",
            duration: "60 secondes",
            objectives: [ "Corriger les dominantes de couleur et restaurer la fidélité des tons sous-marins", "Sublimer les teintes naturelles et l’atmosphère lumineuse unique de l’aquarium", "Mettre en avant la clarté et le contraste des sujets filmés"],
            results: ["Diffusion remarquée sur les réseaux sociaux comme exemple de retouche colorimétrique avancée", "Acquisition de compétences pointues en correction des couleurs sur la vidéo aquatique", "Vidéo utilisée comme vitrine pédagogique auprès de prospects et de la communauté"],
            techniques: ["Neutralisation de la dominante bleue/verte", "Ajustement fin de la balance des blancs", "Rehaussement sélectif des couleurs (coraux, poissons, plantes)", "Gestion localisée de l’exposition et du contraste", "Utilisation de masques et de courbes pour retravailler certaines zones spécifiques"]
        },
    ];
              
    // Navigation functionality
    initNavigation();
    
    // Portfolio functionality
    initPortfolio();
    
    // Modal functionality
    initModal();
    
    // Contact form functionality
    initContactForm();
    
    // Scroll animations
    initScrollAnimations();
    
    // Smooth scrolling for anchor links
    initSmoothScroll();

    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Sticky navbar on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                if (document.documentElement.getAttribute('data-color-scheme') === 'dark' || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    navbar.style.background = 'rgba(38, 40, 40, 0.98)';
                }
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                if (document.documentElement.getAttribute('data-color-scheme') === 'dark' || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    navbar.style.background = 'rgba(38, 40, 40, 0.95)';
                }
            }
        });

        // Mobile menu toggle
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Highlight active section in navigation
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    function initPortfolio() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const portfolioButtons = document.querySelectorAll('.portfolio-btn');

        // Tab filtering
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetCategory = this.getAttribute('data-tab');
                
                // Update active tab
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (targetCategory === 'tous' || itemCategory === targetCategory) {
                        item.style.display = 'block';
                        // Add animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Portfolio item click handlers
        portfolioButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectIndex = parseInt(this.getAttribute('data-project'));
                showProjectModal(projectIndex);
            });
        });
    }

    function initModal() {
        const modal = document.getElementById('portfolio-modal');
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = modal.querySelector('.modal-overlay');

        // Close modal handlers
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    function showProjectModal(projectIndex) {
        const modal = document.getElementById('portfolio-modal');
        const modalBody = document.getElementById('modal-body');
        const project = portfolioData[projectIndex];

        if (!project) return;

        // Build modal content
        const modalContent = `
            <div class="project-modal">
                <div class="project-header">
                    <h2>${project.title}</h2>
                    <div class="project-meta">
                        <span class="project-client">Client: ${project.client}</span>
                        ${project.duration ? `<span class="project-duration">Durée: ${project.duration}</span>` : ''}
                        ${project.deliverables ? `<span class="project-deliverables">Livrables: ${project.deliverables}</span>` : ''}
                    </div>
                </div>
                
                <div class="project-placeholder">
                    <div class="video-placeholder">
                        ${project.category === 'montage' ? '🎬' : project.category === 'motion' ? '✨' : '🎨'}
                        <p>Aperçu du projet ${project.title}</p>
                    </div>
                </div>
                
                <div class="project-description">
                    <h3>Description</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="project-objectives">
                    <h3>Objectifs</h3>
                    <ul>
                        ${project.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-results">
                    <h3>Résultats</h3>
                    <ul>
                        ${project.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-techniques">
                    <h3>Techniques Utilisées</h3>
                    <div class="technique-tags">
                        ${project.techniques.map(tech => `<span class="technique-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-cta">
                    <a href="#contact" class="btn btn--primary" onclick="document.getElementById('portfolio-modal').classList.add('hidden'); document.body.style.overflow = 'auto';">
                        Démarrer un projet similaire
                    </a>
                </div>
            </div>
        `;

        modalBody.innerHTML = modalContent;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Add modal styles
        const modalStyles = `
            <style>
                .project-modal { max-width: 100%; }
                .project-header { margin-bottom: 24px; }
                .project-header h2 { margin-bottom: 12px; font-size: 28px; }
                .project-meta { display: flex; gap: 16px; flex-wrap: wrap; font-size: 14px; color: var(--color-text-secondary); }
                .project-placeholder { 
                    height: 250px; 
                    background: var(--color-bg-4); 
                    border-radius: 12px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    margin-bottom: 32px;
                    flex-direction: column;
                    gap: 16px;
                }
                .video-placeholder { text-align: center; }
                .video-placeholder::before { content: attr(data-icon); font-size: 48px; display: block; margin-bottom: 16px; }
                .project-description, .project-objectives, .project-results, .project-techniques { margin-bottom: 24px; }
                .project-description h3, .project-objectives h3, .project-results h3, .project-techniques h3 { 
                    margin-bottom: 12px; 
                    font-size: 20px;
                    color: var(--color-primary);
                }
                .project-objectives ul, .project-results ul { padding-left: 20px; }
                .project-objectives li, .project-results li { margin-bottom: 8px; }
                .technique-tags { display: flex; gap: 8px; flex-wrap: wrap; }
                .technique-tag { 
                    background: var(--color-secondary); 
                    padding: 6px 12px; 
                    border-radius: 20px; 
                    font-size: 14px;
                    color: var(--color-text);
                }
                .project-cta { text-align: center; margin-top: 32px; }
                .project-placeholder div { font-size: 3rem; margin-bottom: 16px; }
                .project-placeholder p { color: var(--color-text-secondary); }
            </style>
        `;

        if (!document.querySelector('#modal-styles')) {
            const styleElement = document.createElement('div');
            styleElement.innerHTML = modalStyles;
            styleElement.id = 'modal-styles';
            document.head.appendChild(styleElement);
        }
    }

    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (!data.name || !data.email || !data.message) {
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Veuillez entrer une adresse email valide.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showNotification('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add notification styles
        const notificationStyles = `
            <style>
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 24px;
                    z-index: 3000;
                    max-width: 400px;
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    box-shadow: var(--shadow-lg);
                    animation: slideInRight 0.3s ease-out;
                }
                .notification--success { border-left: 4px solid var(--color-success); }
                .notification--error { border-left: 4px solid var(--color-error); }
                .notification--info { border-left: 4px solid var(--color-info); }
                .notification-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px 20px;
                }
                .notification-message { color: var(--color-text); font-size: 14px; }
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: var(--color-text-secondary);
                    margin-left: 16px;
                }
                .notification-close:hover { color: var(--color-text); }
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            </style>
        `;

        if (!document.querySelector('#notification-styles')) {
            const styleElement = document.createElement('div');
            styleElement.innerHTML = notificationStyles;
            styleElement.id = 'notification-styles';
            document.head.appendChild(styleElement);
        }

        document.body.appendChild(notification);

        // Close notification
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .pricing-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Set initial state and observe elements
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease-out';
            observer.observe(element);
        });
    }

    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add loading state for better UX
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add loading styles
        const loadingStyles = `
            <style>
                body:not(.loaded) .hero-content { opacity: 0; transform: translateY(30px); }
                body.loaded .hero-content { 
                    opacity: 1; 
                    transform: translateY(0); 
                    transition: all 1s ease-out;
                }
            </style>
        `;
        
        if (!document.querySelector('#loading-styles')) {
            const styleElement = document.createElement('div');
            styleElement.innerHTML = loadingStyles;
            styleElement.id = 'loading-styles';
            document.head.appendChild(styleElement);
        }
    });

    // Add scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        
        const progressStyles = `
            <style>
                .scroll-progress {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: rgba(0,0,0,0.1);
                    z-index: 9999;
                }
                .scroll-progress-bar {
                    height: 100%;
                    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
                    width: 0%;
                    transition: width 0.1s ease-out;
                }
            </style>
        `;
        
        if (!document.querySelector('#progress-styles')) {
            const styleElement = document.createElement('div');
            styleElement.innerHTML = progressStyles;
            styleElement.id = 'progress-styles';
            document.head.appendChild(styleElement);
        }
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
        });
    }

    // Initialize scroll progress
    initScrollProgress();
});
