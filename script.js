// Import Firebase configuration
import { app, analytics } from './firebase-config.js';
import { getStorage } from "firebase/storage";

// WebRamp - Professional Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('WebRamp Website Loading...');
    
    // Initialize Firebase Storage
    const storage = getStorage(app);

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Enhanced hover effects for cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Service item hover effects
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    });
    
    // Initialize body opacity
    document.body.style.opacity = '0';

    // Video functionality - using native controls

    // Auto-scrolling testimonials functionality
    const testimonialsScroll = document.querySelector('.testimonials-scroll');
    if (testimonialsScroll) {
        // Duplicate testimonials for seamless scrolling
        const testimonials = testimonialsScroll.innerHTML;
        testimonialsScroll.innerHTML = testimonials + testimonials;
        
        // Pause on hover
        testimonialsScroll.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        testimonialsScroll.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    // Enhanced hover effects for new elements
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const logoItems = document.querySelectorAll('.logo-item');
    logoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Site Audit Form functionality
    const siteAuditForm = document.getElementById('siteAuditForm');
    if (siteAuditForm) {
        siteAuditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const auditData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                website: formData.get('website'),
                business: formData.get('business'),
                goals: formData.get('goals')
            };
            
            // Show success message
            const submitButton = this.querySelector('.btn-primary');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you! Your audit request has been submitted. We\'ll send your detailed report within 24 hours.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // SEO Audit Form functionality
    const seoAuditForm = document.getElementById('seoAuditForm');
    if (seoAuditForm) {
        seoAuditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const website = this.querySelector('#seoWebsite').value;
            const email = this.querySelector('#seoEmail').value;
            
            // Show success message
            const submitButton = this.querySelector('.seo-audit-btn');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'PROCESSING...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you! Your free SEO audit request has been submitted. We\'ll send your detailed report within 24 hours.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // Enhanced Counter Animation for About Page
    function animateAboutCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + '+';
                }
            }, 16);
        });
    }

    // Scroll-triggered animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('about-stats')) {
                        animateAboutCounters();
                    }
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.about-stats, .stat-showcase-item, .expertise-category, .process-step').forEach(el => {
            observer.observe(el);
        });
    }

// Initialize scroll animations
initScrollAnimations();

// Enhanced Digital Suite Animations
function initDigitalSuiteAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate service cards with stagger
                if (entry.target.classList.contains('service-card')) {
                    const cards = entry.target.parentElement.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                }
                
                // Animate process steps with stagger
                if (entry.target.classList.contains('process-step')) {
                    const steps = entry.target.parentElement.querySelectorAll('.process-step');
                    steps.forEach((step, index) => {
                        setTimeout(() => {
                            step.classList.add('animate-in');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .process-step, .metric-card-large, .certification-card, .strength-item').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced form validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success state
                const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
                submitBtn.textContent = 'PROCESSING...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                    alert('Thank you! Your request has been submitted successfully.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }
        });
    });
}

// SEO Audit Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const seoForm = document.getElementById('seoAuditForm');
    if (seoForm) {
        seoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const website = document.getElementById('seoWebsite').value;
            const email = document.getElementById('seoEmail').value;
            
            if (website && email) {
                // Show processing state
                const submitBtn = document.querySelector('.seo-audit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'PROCESSING...';
                submitBtn.disabled = true;
                
                // Simulate processing
                    setTimeout(() => {
                    alert('Thank you! Your free SEO audit request has been submitted. We\'ll deliver your personalized report within 24 hours.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    document.getElementById('seoAuditForm').reset();
                    }, 2000);
            }
        });
    }
    
    // Video Loading and Error Handling
    const video = document.getElementById('heroVideo');
    const videoLoading = document.getElementById('videoLoading');
    const videoPlayOverlay = document.getElementById('videoPlayOverlay');
    
    if (video) {
        console.log('Video element found, initializing...');
        
        // Ensure video is visible
        video.style.display = 'block';
        video.style.visibility = 'visible';
        video.style.opacity = '1';
        
        // Try to play video immediately
        setTimeout(() => {
            console.log('Attempting to play video...');
            video.play().then(() => {
                console.log('Video playing successfully');
                if (videoLoading) videoLoading.style.display = 'none';
                if (videoPlayOverlay) videoPlayOverlay.style.display = 'none';
            }).catch(e => {
                console.log('Autoplay failed, showing play button:', e);
                if (videoLoading) videoLoading.style.display = 'none';
                if (videoPlayOverlay) videoPlayOverlay.style.display = 'flex';
            });
        }, 2000);
        
        // Handle video events
        video.addEventListener('loadstart', function() {
            console.log('Video load started');
            if (videoLoading) videoLoading.style.display = 'flex';
        });
        
        video.addEventListener('loadeddata', function() {
            console.log('Video data loaded');
            if (videoLoading) videoLoading.style.display = 'none';
            // Force play after data is loaded
            video.play().catch(e => {
                console.log('Play failed after load:', e);
                if (videoPlayOverlay) videoPlayOverlay.style.display = 'flex';
            });
        });
        
        video.addEventListener('canplay', function() {
            console.log('Video can play');
            if (videoLoading) videoLoading.style.display = 'none';
            // Try to play when video is ready
            video.play().catch(e => {
                console.log('Play failed when ready:', e);
                if (videoPlayOverlay) videoPlayOverlay.style.display = 'flex';
            });
        });
        
        video.addEventListener('playing', function() {
            console.log('Video is now playing');
            if (videoLoading) videoLoading.style.display = 'none';
            if (videoPlayOverlay) videoPlayOverlay.style.display = 'none';
        });
        
        video.addEventListener('error', function(e) {
            console.error('Video error:', e);
            if (videoLoading) {
                videoLoading.innerHTML = `
                    <div style="text-align: center;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: #ef4444; margin-bottom: 10px;"></i>
                        <p style="color: #ef4444; margin: 0;">Video failed to load</p>
                        <a href="VIDEO/RAJ series 1.mp4" style="color: #3b82f6; text-decoration: underline; margin-top: 10px; display: inline-block;">Download Video</a>
                    </div>
                `;
                videoLoading.style.display = 'flex';
            }
        });
        
        // Play button click handler
        if (videoPlayOverlay) {
            videoPlayOverlay.addEventListener('click', function() {
                console.log('Play button clicked');
                video.play().then(() => {
                    console.log('Manual play successful');
                    videoPlayOverlay.style.display = 'none';
                }).catch(e => {
                    console.error('Manual play failed:', e);
                });
            });
        }
        
        // Force video to be visible
        video.style.background = 'transparent';
        video.style.backgroundColor = 'transparent';
    }

    // FAQ Accordion Functionality
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        console.log('Found FAQ items:', faqItems.length);
        
        if (faqItems.length === 0) {
            console.log('No FAQ items found, retrying...');
            setTimeout(initFAQ, 1000);
            return;
        }
        
        faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            if (question && answer) {
                console.log(`FAQ item ${index + 1} initialized`);
                
                // Remove any existing listeners
                question.removeEventListener('click', handleFAQClick);
                
                // Add new listener
                question.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`FAQ item ${index + 1} clicked`);
                    
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQ items
                    faqItems.forEach((otherItem, otherIndex) => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            console.log(`FAQ item ${otherIndex + 1} closed`);
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        console.log(`FAQ item ${index + 1} closed`);
                    } else {
                        item.classList.add('active');
                        console.log(`FAQ item ${index + 1} opened`);
                    }
                });
            }
        });
    }
    
    function handleFAQClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Initialize FAQ when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQ);
    } else {
        initFAQ();
    }

    // Simple FAQ Toggle Function
    function toggleFAQ(element) {
        const faqItem = element.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = element.querySelector('i');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                const otherAnswer = item.querySelector('.faq-answer');
                const otherIcon = item.querySelector('i');
                otherAnswer.style.maxHeight = '0';
                otherAnswer.style.padding = '0 20px';
                otherIcon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current item
        if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
            answer.style.maxHeight = '200px';
            answer.style.padding = '0 20px';
            icon.style.transform = 'rotate(180deg)';
        } else {
            answer.style.maxHeight = '0';
            answer.style.padding = '0 20px';
            icon.style.transform = 'rotate(0deg)';
        }
    }

    // Initialize all enhancements
    initDigitalSuiteAnimations();
    initSmoothScroll();
    initFormValidation();
});

    // New FAQ Toggle Function
    function toggleNewFAQ(element) {
        console.log('FAQ toggle function called');
        
        const faqItem = element.parentElement;
        const answer = faqItem.querySelector('.faq-answer-new');
        const icon = element.querySelector('.faq-icon');
        
        console.log('FAQ item:', faqItem);
        console.log('Answer element:', answer);
        console.log('Icon element:', icon);
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item-new').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                const otherAnswer = item.querySelector('.faq-answer-new');
                const otherIcon = item.querySelector('.faq-icon');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.padding = '0 30px';
                    otherAnswer.style.display = 'block';
                }
                if (otherIcon) {
                    otherIcon.style.transform = 'rotate(0deg)';
                    otherIcon.style.background = 'rgba(59, 130, 246, 0.1)';
                    otherIcon.style.color = '#3b82f6';
                }
            }
        });
        
        // Toggle current item
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
            if (answer) {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 30px';
                answer.style.display = 'block';
            }
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
                icon.style.background = 'rgba(59, 130, 246, 0.1)';
                icon.style.color = '#3b82f6';
            }
        } else {
            faqItem.classList.add('active');
            if (answer) {
                answer.style.maxHeight = '300px';
                answer.style.padding = '25px 30px';
                answer.style.display = 'block';
                answer.style.visibility = 'visible';
                answer.style.opacity = '1';
            }
            if (icon) {
                icon.style.transform = 'rotate(45deg)';
                icon.style.background = '#3b82f6';
                icon.style.color = 'white';
            }
        }
        
        console.log('FAQ toggle completed');
    }

    console.log('WebRamp Website Loaded Successfully! 🚀');
});