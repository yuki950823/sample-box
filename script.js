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


// Function to switch Air Conditioner images and button states
function switchACImage(type) {
    const sectionTwoImage = document.getElementById('sectionTwoImage');
    const btnAirConditioner = document.getElementById('btnAirConditioner');
    const btnFurnace = document.getElementById('btnFurnace');
    const btnCoil = document.getElementById('btnCoil');
    
    if (!sectionTwoImage) return;
    
    // Reset all buttons to inactive state (gray background)
    btnAirConditioner.style.backgroundColor = '#64748B';
    btnAirConditioner.style.color = '#FFFFFF';
    
    btnFurnace.style.backgroundColor = '#64748B';
    btnFurnace.style.color = '#FFFFFF';
    
    btnCoil.style.backgroundColor = '#64748B';
    btnCoil.style.color = '#FFFFFF';
    
    // Fade out current image
    sectionTwoImage.style.opacity = '0';
    
    // After fade out, change image and set active button
    setTimeout(() => {
        if (type === 'air-conditioner') {
            sectionTwoImage.src = 'assets/images/08-update.png';
            sectionTwoImage.style.transform = 'translate(144px, 144px)';
            btnAirConditioner.style.backgroundColor = '#FFFFFF';
            btnAirConditioner.style.color = '#475569';
        } else if (type === 'furnace') {
            sectionTwoImage.src = 'assets/images/furnace.png';
            sectionTwoImage.style.transform = 'translate(144px, 144px) scale(1.2)';
            btnFurnace.style.backgroundColor = '#FFFFFF';
            btnFurnace.style.color = '#475569';
        } else if (type === 'coil') {
            sectionTwoImage.src = 'assets/images/coil.png';
            sectionTwoImage.style.transform = 'translate(144px, 144px) scale(1.5)';
            btnCoil.style.backgroundColor = '#FFFFFF';
            btnCoil.style.color = '#475569';
        }
        
        // Fade in new image
        requestAnimationFrame(() => {
            sectionTwoImage.style.opacity = '1';
        });
    }, 300);
}

// Apple-style trend capsule interaction with smooth expand/collapse
document.addEventListener('DOMContentLoaded', () => {
    const trendCapsules = document.querySelectorAll('.trend-capsule');
    const capsuleStates = new Map();

    trendCapsules.forEach(capsule => {
        const isInitiallyExpanded =
            capsule.style.getPropertyValue('--content-opacity') === '1' ||
            capsule.getAttribute('data-initial-expanded') === 'true';

        capsuleStates.set(capsule, isInitiallyExpanded);

        if (isInitiallyExpanded) {
            // Set up expanded state immediately (no animation on load)
            capsule.style.setProperty('--content-position', 'relative');
            capsule.style.setProperty('--content-visibility', 'visible');
            capsule.style.setProperty('--header-position', 'absolute');
            capsule.style.setProperty('--capsule-bg-color', 'rgba(100, 116, 139, 0.5)');
            capsule.style.setProperty('--header-opacity', '0');
            capsule.style.setProperty('--header-pointer-events', 'none');
            capsule.style.setProperty('--content-opacity', '1');
            capsule.style.setProperty('--content-offset-y', '0px');
            capsule.style.setProperty('--content-pointer-events', 'auto');
        } else {
            // Set up collapsed state immediately (no animation on load)
            capsule.style.setProperty('--content-position', 'absolute');
            capsule.style.setProperty('--content-visibility', 'hidden');
            capsule.style.setProperty('--header-position', 'relative');
            capsule.style.setProperty('--capsule-bg-color', 'rgba(52, 58, 76, 0.5)');
            capsule.style.setProperty('--header-opacity', '1');
            capsule.style.setProperty('--header-pointer-events', 'auto');
            capsule.style.setProperty('--content-opacity', '0');
            capsule.style.setProperty('--content-offset-y', '0px');
            capsule.style.setProperty('--content-pointer-events', 'none');
        }

        capsule.addEventListener('click', (e) => {
            // Prevent toggle if clicking on action buttons
            if (e.target.tagName === 'BUTTON' && e.target !== capsule) return;

            const isCurrentlyExpanded = capsuleStates.get(capsule);

            // Collapse all other capsules
            trendCapsules.forEach(otherCapsule => {
                if (otherCapsule !== capsule && capsuleStates.get(otherCapsule)) {
                    collapseCapsule(otherCapsule);
                }
            });

            if (!isCurrentlyExpanded) {
                expandCapsule(capsule);
                
                // Change image based on category with smooth transition
                const category = capsule.getAttribute('data-category');
                const sectionTwoImage = document.getElementById('sectionTwoImage');
                if (sectionTwoImage && (category === 'countertops' || category === 'air-conditioner')) {
                    // Fade out current image
                    sectionTwoImage.style.opacity = '0';
                    
                    // After fade out, change image and transform
                    setTimeout(() => {
                        if (category === 'countertops') {
                            sectionTwoImage.src = 'assets/images/countertop.png';
                            sectionTwoImage.style.transform = 'translate(480px, 144px) scale(2.1)';
                        } else if (category === 'air-conditioner') {
                            sectionTwoImage.src = 'assets/images/08-update.png';
                            sectionTwoImage.style.transform = 'translate(144px, 144px)';
                            // Set Air Conditioner button as active
                            const btnAirConditioner = document.getElementById('btnAirConditioner');
                            const btnFurnace = document.getElementById('btnFurnace');
                            const btnCoil = document.getElementById('btnCoil');
                            if (btnAirConditioner) {
                                btnAirConditioner.style.backgroundColor = '#FFFFFF';
                                btnAirConditioner.style.color = '#475569';
                            }
                            if (btnFurnace) {
                                btnFurnace.style.backgroundColor = '#64748B';
                                btnFurnace.style.color = '#FFFFFF';
                            }
                            if (btnCoil) {
                                btnCoil.style.backgroundColor = '#64748B';
                                btnCoil.style.color = '#FFFFFF';
                            }
                        }
                        
                        // Fade in new image
                        requestAnimationFrame(() => {
                            sectionTwoImage.style.opacity = '1';
                        });
                    }, 300); // Match opacity transition duration
                }
            }
        });
    });

    function expandCapsule(capsule, options = {}) {
        // Background color changes
        capsule.style.setProperty('--capsule-bg-color', 'rgba(100, 116, 139, 0.5)');

        // Content becomes part of layout (position: relative) immediately
        capsule.style.setProperty('--content-position', 'relative');
        capsule.style.setProperty('--content-visibility', 'visible');
        capsule.style.setProperty('--content-offset-y', '0px');
        
        // Header fades out and becomes absolute overlay
        capsule.style.setProperty('--header-position', 'absolute');
        capsule.style.setProperty('--header-opacity', '0');
        capsule.style.setProperty('--header-pointer-events', 'none');

        // Fade in content
        capsule.style.setProperty('--content-opacity', '1');
        capsule.style.setProperty('--content-pointer-events', 'auto');

        if (!options.skipStateUpdate) {
            capsuleStates.set(capsule, true);
        }
    }

    function collapseCapsule(capsule, options = {}) {
        // Background color changes
        capsule.style.setProperty('--capsule-bg-color', 'rgba(52, 58, 76, 0.5)');

        // Fade out content immediately
        capsule.style.setProperty('--content-opacity', '0');
        capsule.style.setProperty('--content-pointer-events', 'none');

        // Header fades in
        capsule.style.setProperty('--header-opacity', '1');
        capsule.style.setProperty('--header-pointer-events', 'auto');

        // Switch layout immediately - this makes capsule snap to header height
        capsule.style.setProperty('--header-position', 'relative');
        capsule.style.setProperty('--content-position', 'absolute');
        capsule.style.setProperty('--content-visibility', 'hidden');

        if (!options.skipStateUpdate) {
            capsuleStates.set(capsule, false);
        }
    }

    // Populate Calculator Dropdowns
    // Populate Vacancy Time dropdown (1 to 150 days)
    const vacancyTimeSelect = document.getElementById('vacancyTime');
    if (vacancyTimeSelect) {
        for (let i = 1; i <= 150; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i} Day${i > 1 ? 's' : ''}`;
            if (i === 14) option.selected = true; // Default to 14 days
            vacancyTimeSelect.appendChild(option);
        }
    }

    // Populate Rent Increase dropdown ($50 to $10,000 in $50 increments)
    const rentIncreaseSelect = document.getElementById('rentIncrease');
    if (rentIncreaseSelect) {
        for (let i = 50; i <= 10000; i += 50) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `$${i.toFixed(2)}`;
            if (i === 300) option.selected = true; // Default to $300
            rentIncreaseSelect.appendChild(option);
        }
    }
});

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
