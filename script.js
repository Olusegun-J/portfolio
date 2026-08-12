// ============================================
// PAGE LOADER
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 600);
});

// ============================================
// PROGRESS BAR
// ============================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// ============================================
// NAVBAR
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// MOBILE NAV
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) navLinks.classList.remove('show');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// TYPEWRITER
// ============================================
const typewriterElement = document.getElementById('typewriterText');
const phrases = [
    'Medical Virtual Assistant',
    'EMR & Telehealth Specialist',
    'HIPAA-Trained Professional',
    'Healthcare Administrator',
    'Registered Nurse'
];
let phraseIndex = 0,
    charIndex = 0,
    isDeleting = false,
    typewriterTimeout;

function typeWriterEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            typewriterTimeout = setTimeout(() => {
                isDeleting = true;
                typeWriterEffect();
            }, 2000);
            return;
        }
        typewriterTimeout = setTimeout(typeWriterEffect, 80);
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typewriterTimeout = setTimeout(typeWriterEffect, 400);
            return;
        }
        typewriterTimeout = setTimeout(typeWriterEffect, 40);
    }
}
setTimeout(typeWriterEffect, 800);

// ============================================
// GLOW TRAIL
// ============================================
const glowTrail = document.getElementById('glowTrail');
let glowTimeout;
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    glowTrail.style.left = e.clientX + 'px';
    glowTrail.style.top = e.clientY + 'px';
    glowTrail.classList.add('active');
    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => glowTrail.classList.remove('active'), 3000);
});
document.addEventListener('mouseleave', () => glowTrail.classList.remove('active'));

// ============================================
// SPOTLIGHT
// ============================================
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    spotlight.style.setProperty('--x', e.clientX + 'px');
    spotlight.style.setProperty('--y', e.clientY + 'px');
    spotlight.classList.add('visible');
});
document.addEventListener('mouseleave', () => spotlight.classList.remove('visible'));

// ============================================
// CUSTOM CURSOR
// ============================================
const customCursor = document.getElementById('customCursor');
let cursorTimeout;
if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        customCursor.classList.add('active');
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => customCursor.classList.remove('active'), 2000);
    });
    document.addEventListener('mouseleave', () => customCursor.classList.remove('active'));
    document.querySelectorAll('a, .btn, .work-new, .service-new, .testimonial-carousel-item, .tilt-card, .booking-pill, .work-sample-item')
        .forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('hover'));
        });
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        if (window.innerWidth <= 768) return;
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = parseInt(this.dataset.strength) || 15;
        const moveX = (x / rect.width) * strength;
        const moveY = (y / rect.height) * strength;
        this.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// GEOMETRIC SHAPES
// ============================================
function createGeometricShapes() {
    const container = document.getElementById('geometricShapes');
    if (!container) return;
    for (let i = 1; i <= 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        container.appendChild(shape);
    }
}
createGeometricShapes();

// ============================================
// ECG
// ============================================
function initECG() {
    const canvas = document.getElementById('ecgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = Math.min(100, window.innerHeight * 0.1);
    let time = 0;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = Math.min(100, window.innerHeight * 0.1);
    }
    window.addEventListener('resize', resize);

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.strokeStyle = '#6C3BCE';
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(108, 59, 206, 0.3)';
        time += 0.04;
        const startY = height / 2;
        ctx.moveTo(0, startY);
        for (let i = 0; i < width; i += 1.5) {
            const t = (i / width) * 20 + time;
            let y = startY;
            const phase = t % (2 * Math.PI);
            if (phase < 0.2) y -= 8 * Math.sin(phase * 30);
            else if (phase < 0.35) {
                const qrs = (phase - 0.2) / 0.15;
                y -= 25 * Math.sin(qrs * Math.PI);
            } else if (phase < 0.6) {
                const tw = (phase - 0.35) / 0.25;
                y -= 12 * Math.sin(tw * Math.PI);
            } else y -= 2 * Math.sin(phase * 2);
            y += (Math.random() - 0.5) * 1.5;
            ctx.lineTo(i, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
        requestAnimationFrame(draw);
    }
    draw();
}
setTimeout(initECG, 500);

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container || window.innerWidth < 768) return;
    const icons = ['fa-heartbeat', 'fa-stethoscope', 'fa-pills', 'fa-syringe', 'fa-hospital', 'fa-user-md', 'fa-ambulance', 'fa-medkit', 'fa-vial', 'fa-file-medical'];
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const size = Math.random() * 14 + 10;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 12;
        const drift = (Math.random() - 0.5) * 250;
        const opacity = Math.random() * 0.15 + 0.05;
        const color = ['#1A0A3E', '#6C3BCE', '#9B6FE0'][Math.floor(Math.random() * 3)];
        particle.innerHTML = `<i class="fas ${icon}" style="color:${color};font-size:${size}px;"></i>`;
        particle.style.cssText =
            `left:${Math.random() * 100}%;--duration:${duration}s;--delay:${delay}s;--drift:${drift}px;--opacity:${opacity};animation-delay:${delay}s;`;
        container.appendChild(particle);
    }
}

// ============================================
// 3D TILT
// ============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / rect.height) * -8;
        const rotateY = ((x - rect.width / 2) / rect.width) * 8;
        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });
    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// ============================================
// BUTTON RIPPLE
// ============================================
document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.cssText =
            `position:absolute;top:${y}px;left:${x}px;width:0;height:0;border-radius:50%;background:rgba(255,255,255,0.3);transform:translate(-50%,-50%);pointer-events:none;transition:width 0.6s ease,height 0.6s ease;`;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
        }, 10);
        setTimeout(() => ripple.remove(), 700);
    });
});

// ============================================
// ACTIVE NAV LINK
// ============================================
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
    });
    navLinkItems.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// STATS COUNTER
// ============================================
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            const suffix = entry.target.dataset.suffix || '';
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                entry.target.textContent = Math.floor(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(updateCounter);
                else entry.target.textContent = target + suffix;
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
counters.forEach(counter => counterObserver.observe(counter));

// ============================================
// CASE STUDY MODAL
// ============================================
const caseStudies = {
    telehealth: {
        title: "Telehealth Implementation",
        subtitle: "Virtual care setup for a growing practice",
        problem: "A growing medical practice needed to transition to telehealth services quickly but lacked a structured implementation plan and staff training.",
        process: "Led the telehealth implementation process including platform selection, staff training, patient communication protocols, and workflow integration. Created comprehensive guides for both staff and patients, and conducted training sessions for clinical teams.",
        result: "✅ Successful telehealth implementation\n✅ 50+ virtual consultations delivered monthly\n✅ Staff confident in telehealth delivery",
        tools: ["Telehealth Platforms", "Training", "Project Management"]
    },
    emr: {
        title: "EMR System Transition",
        subtitle: "Seamless migration to a new EHR platform",
        problem: "A healthcare facility needed to migrate from an outdated EMR system to a modern platform without disrupting patient care or losing data.",
        process: "Managed the full EMR transition including data migration, staff training, workflow redesign, and go-live support. Ensured zero data loss and minimal downtime.",
        result: "✅ Successful migration with zero data loss\n✅ Staff trained within 2 weeks\n✅ Improved documentation efficiency by 40%",
        tools: ["EMR Systems", "Data Migration", "Staff Training"]
    },
    workflow: {
        title: "Workflow Optimization",
        subtitle: "Streamlining patient intake and scheduling",
        problem: "A busy clinic was struggling with long patient wait times, scheduling conflicts, and inefficient intake processes.",
        process: "Streamlined patient intake workflows, implemented a digital scheduling system, and created clear protocols for patient flow management. Trained staff on the new processes and monitored performance metrics.",
        result: "✅ 50% reduction in patient wait times\n✅ Improved patient satisfaction\n✅ Efficient daily operations for 50+ patients",
        tools: ["Calendly", "Google Calendar", "Patient Communication"]
    }
};

const modalOverlay = document.getElementById('caseModal'),
    modalContent = document.getElementById('modalContent'),
    modalClose = document.getElementById('modalClose');
document.querySelectorAll('.work-new').forEach(card => {
    card.addEventListener('click', function () {
        const study = caseStudies[this.dataset.case];
        if (!study) return;
        modalContent.innerHTML = `
            <h2>${study.title}</h2>
            <p class="modal-subtitle">${study.subtitle}</p>
            <div class="modal-section"><h3><i class="fas fa-exclamation-triangle" style="color:var(--accent);"></i> The Challenge</h3><p>${study.problem}</p></div>
            <div class="modal-section"><h3><i class="fas fa-cogs" style="color:var(--accent);"></i> What I Did</h3><p>${study.process}</p></div>
            <div class="modal-section"><h3><i class="fas fa-chart-line" style="color:var(--accent);"></i> The Outcome</h3><div class="modal-result"><p>${study.result.replace(/\n/g, '<br>')}</p></div></div>
            <div class="modal-section" style="margin-bottom:0;"><h3><i class="fas fa-tools" style="color:var(--accent);"></i> Tools Used</h3><div class="modal-tags">${study.tools.map(t => `<span>${t}</span>`).join('')}</div></div>
        `;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function (e) { if (e.target === this) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

// ============================================
// WORK SAMPLES — CONTINUOUS SLOW SCROLL (45 seconds)
// ============================================
const workTrack = document.getElementById('workSamplesTrack');

function initWorkContinuousScroll() {
    if (!workTrack) {
        console.warn('⚠️ Work track not found!');
        return;
    }

    const cards = workTrack.querySelectorAll('.work-sample-item');
    const totalCards = cards.length;

    console.log(`✅ Work continuous scroll initializing with ${totalCards} cards`);

    if (totalCards === 0) {
        console.warn('⚠️ No work cards found!');
        return;
    }

    // Clone cards for seamless looping
    const cardsArray = Array.from(cards);
    cardsArray.forEach(card => {
        const clone = card.cloneNode(true);
        clone.id = '';
        workTrack.appendChild(clone);
    });

    // Get the width of the original set (half of total track width)
    const totalWidth = workTrack.scrollWidth / 2;

    // Duration for a full cycle — slower (60 seconds)
    const duration = 60;

    // Kill any existing animation
    if (window.workAnimationId) {
        cancelAnimationFrame(window.workAnimationId);
        window.workAnimationId = null;
    }

    let startTime = null;
    let isPaused = false;
    let pausedTime = 0;

    function animateWorkScroll(timestamp) {
        if (isPaused) {
            window.workAnimationId = requestAnimationFrame(animateWorkScroll);
            return;
        }

        if (startTime === null) {
            startTime = timestamp - pausedTime;
        }

        const elapsed = (timestamp - startTime) / 1000;
        const progress = (elapsed % duration) / duration;
        const x = -progress * totalWidth;

        workTrack.style.transform = `translateX(${x}px)`;

        window.workAnimationId = requestAnimationFrame(animateWorkScroll);
    }

    // Start animation
    window.workAnimationId = requestAnimationFrame(animateWorkScroll);

    // Pause on hover
    const wrapper = workTrack.closest('.work-samples-carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            isPaused = true;
            if (startTime !== null) {
                const elapsed = (performance.now() - startTime) / 1000;
                pausedTime = elapsed;
            }
        });

        wrapper.addEventListener('mouseleave', () => {
            isPaused = false;
            startTime = performance.now() - pausedTime * 1000;
        });
    }

    // Store for resize handling
    window._workTrack = workTrack;
    window._workTotalWidth = totalWidth;
    window._workDuration = duration;
}

// Initialize work carousel on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initWorkContinuousScroll, 200);
    });
} else {
    setTimeout(initWorkContinuousScroll, 200);
}

// Handle resize for work carousel
let workResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(workResizeTimeout);
    workResizeTimeout = setTimeout(() => {
        if (!workTrack) return;

        // Kill existing animation
        if (window.workAnimationId) {
            cancelAnimationFrame(window.workAnimationId);
            window.workAnimationId = null;
        }

        // Remove clones (keep only original cards)
        const cards = workTrack.querySelectorAll('.work-sample-item');
        const cardsArray = Array.from(cards);
        if (window._originalCount) {
            const originalCount = window._originalCount;
            if (cardsArray.length > originalCount) {
                cardsArray.slice(originalCount).forEach(clone => {
                    if (clone.parentNode) {
                        clone.parentNode.removeChild(clone);
                    }
                });
            }
        } else {
            const originalCount = cardsArray.length / 2;
            window._originalCount = originalCount;
            if (cardsArray.length > originalCount) {
                cardsArray.slice(originalCount).forEach(clone => {
                    if (clone.parentNode) {
                        clone.parentNode.removeChild(clone);
                    }
                });
            }
        }

        // Re-initialize
        initWorkContinuousScroll();
    }, 300);
});

// ============================================
// TESTIMONIALS AUTO CAROUSEL (Every 3 seconds)
// ============================================
const track = document.getElementById('testimonialCarouselTrack'),
    dotsContainer = document.getElementById('testimonialDots'),
    items = track.querySelectorAll('.testimonial-carousel-item'),
    totalItems = items.length;
let currentIndex = 0,
    autoSlideInterval,
    isTransitioning = false;

function getItemsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function createDots() {
    const itemsPerView = getItemsPerView(),
        totalDots = 3;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToSlide(i * itemsPerView);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    const itemsPerView = getItemsPerView(),
        maxIndex = totalItems - itemsPerView;
    currentIndex = Math.min(index, maxIndex);
    if (currentIndex < 0) currentIndex = 0;
    const gap = 30,
        itemWidth = items[0].offsetWidth || 300;
    track.style.transform = `translateX(-${currentIndex * (itemWidth + gap)}px)`;
    const dots = dotsContainer.querySelectorAll('.dot'),
        activeDotIndex = Math.floor(currentIndex / itemsPerView);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === activeDotIndex));
    setTimeout(() => { isTransitioning = false; }, 800);
}

function nextSlide() {
    const itemsPerView = getItemsPerView(),
        maxIndex = totalItems - itemsPerView;
    goToSlide(currentIndex + itemsPerView >= maxIndex ? 0 : currentIndex + itemsPerView);
}

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
}
createDots();
startAutoSlide();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        createDots();
        goToSlide(currentIndex);
        resetAutoSlide();
    }, 300);
});
const carouselWrapper = document.querySelector('.testimonial-carousel-wrapper');
carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carouselWrapper.addEventListener('mouseleave', startAutoSlide);

// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        const btn = this.querySelector('.btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
    });
}

// ============================================
// BACK TO TOP
// ============================================
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// INITIALIZE PARTICLES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    let particleTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(particleTimeout);
        particleTimeout = setTimeout(() => {
            const container = document.getElementById('particlesContainer');
            if (container) container.innerHTML = '';
            createParticles();
        }, 500);
    });
});

console.log('🩺 Jesuje Olusegun · Registered Nurse & Medical Virtual Assistant Portfolio ready!');