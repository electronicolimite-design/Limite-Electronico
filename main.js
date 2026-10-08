// JavaScript functionality for LÍMITE ELECTRÓNICO

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking any nav link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Contact Form Submission Redirecting to WhatsApp
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value;
            const business = document.getElementById('form-business').value;
            const service = document.getElementById('form-service').value;
            const message = document.getElementById('form-message').value;

            const text = `Hola, mi nombre es *${name}* del negocio *${business}*.\n\nEstoy interesado en el servicio: *${service}*.\n\nDetalles: ${message}`;
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/573134426880?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});