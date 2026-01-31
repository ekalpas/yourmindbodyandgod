// Mind, Body & God - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Email Form Submission
    // NOTE: Replace this with your actual email provider integration
    // ConvertKit, Beehiiv, Mailchimp, etc.
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[name="email"]').value;

            // Placeholder - replace with actual form submission
            // For ConvertKit: https://developers.convertkit.com/#adding-a-subscriber-to-a-form
            // For Beehiiv: Use their embed form instead

            console.log('Email submitted:', email);

            // Show success message
            const formContainer = this.parentElement;
            formContainer.innerHTML = `
                <div class="form-success" style="text-align: center; padding: 2rem;">
                    <h3 style="color: var(--deep-ocean); margin-bottom: 1rem;">You're in!</h3>
                    <p style="color: var(--text-medium);">Check your inbox for The Zero Protocol guide.</p>
                </div>
            `;
        });
    }

    // Buy Button - Stripe Checkout
    // NOTE: Replace with your Stripe checkout link or Stripe.js integration
    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', function(e) {
            // If using a Stripe Payment Link, replace the href in HTML instead
            // If using Stripe.js checkout, implement here:

            // Example Stripe Checkout redirect:
            // window.location.href = 'https://buy.stripe.com/your-payment-link';

            console.log('Buy button clicked - connect Stripe');
        });
    }

    // Navbar background on scroll
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.boxShadow = 'var(--shadow-md)';
            } else {
                nav.style.boxShadow = 'var(--shadow-sm)';
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add visible class styling
    const style = document.createElement('style');
    style.textContent = `
        section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

/*
 * INTEGRATION NOTES:
 *
 * 1. EMAIL PROVIDER (ConvertKit recommended)
 *    - Create a form in ConvertKit
 *    - Replace the email-form with ConvertKit's embed code, or
 *    - Use their API: POST to https://api.convertkit.com/v3/forms/{form_id}/subscribe
 *
 * 2. STRIPE CHECKOUT
 *    Option A: Payment Link (simplest)
 *    - Create a Payment Link in Stripe Dashboard
 *    - Replace the buy-button href with the link
 *
 *    Option B: Stripe.js Checkout
 *    - Add <script src="https://js.stripe.com/v3/"></script>
 *    - Create a checkout session on your backend
 *    - Redirect to Stripe hosted checkout
 *
 * 3. ANALYTICS (optional)
 *    - Google Analytics 4
 *    - Plausible (privacy-focused)
 *    - Simple Analytics
 */
