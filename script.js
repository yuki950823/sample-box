// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
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

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// Trend pills interaction
const trendButtons = document.querySelectorAll('button[class*="Air Conditioner"], button[class*="Flooring"], button[class*="Countertops"], button[class*="Appliances"], button[class*="Lighting"], button[class*="Plumbing"]');
const trendsSection = document.querySelector('.trends-section');

if (trendsSection) {
    const allTrendButtons = trendsSection.querySelectorAll('button');
    allTrendButtons.forEach((button, index) => {
        if (index > 0 && index < 7) { // Skip first button (active) and non-trend buttons
            button.addEventListener('click', function() {
                allTrendButtons.forEach(btn => {
                    if (btn.classList.contains('bg-brand-purple')) {
                        btn.classList.remove('bg-brand-purple', 'hover:bg-indigo-700');
                        btn.classList.add('bg-gray-800', 'border', 'border-gray-700', 'hover:bg-gray-700');
                    }
                });
                
                this.classList.remove('bg-gray-800', 'border', 'border-gray-700', 'hover:bg-gray-700');
                this.classList.add('bg-brand-purple', 'hover:bg-indigo-700');
            });
        }
    });
}

// Form submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.textContent = 'Submitted! ✓';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            }, 2000);
        }, 1500);
    });
}

// Calculator functionality with currency formatting
const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
    if (input.placeholder.includes('value') || input.placeholder.includes('budget')) {
        input.addEventListener('blur', (e) => {
            let value = e.target.value.replace(/[^0-9]/g, '');
            if (value) {
                value = parseInt(value).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                });
                e.target.value = value;
            }
        });
        
        input.addEventListener('focus', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(section);
});

// Add loading effect to images
document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in-out';
    
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
});

// Button hover effects with ripple
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
        `;
        
        if (this.style.position !== 'absolute' && this.style.position !== 'relative') {
            this.style.position = 'relative';
        }
        this.style.overflow = 'hidden';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Log page load time
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    console.log('Sample-box website ready! 🚀');
});
