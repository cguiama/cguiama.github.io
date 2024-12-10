// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
let isMenuOpen = false;
let lastScrollPosition = 0;

document.getElementById('menuButton').addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        isMenuOpen = false;
    });
});

// Scroll effect for navbar
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20 || window.scrollY > window.innerHeight) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Verificação inicial para a navbar e parallax
    handleNavbarScroll();
    const parallax = document.querySelector(".parallax-container");

    // Verificar a visibilidade do parallax no carregamento
    if (window.scrollY > window.innerHeight) {
        parallax.classList.add("parallax-hidden");
    } else {
        parallax.classList.remove("parallax-hidden");
    }

    // Scroll da navbar
    const navbar = document.getElementById('navbar');
    const parallaxContainer = document.querySelector('.parallax-container');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const parallaxHeight = parallaxContainer.offsetHeight;

        // Alterar o comportamento da navbar com o scroll
        if (scrollY > parallaxHeight) {
            navbar.classList.add('bg-white', 'shadow-md');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
        }
    });
});

document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
    const parallaxContainer = document.querySelector('.parallax-container');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const footer = document.querySelector('footer');
    const footerHeight = footer.offsetHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Quando o usuário rolar um pouco para baixo, a navbar vai aparecer
    if (scrollPosition > parallaxContainer.offsetHeight) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }

    // Se o usuário estiver no topo da página, esconde a navbar
    if (scrollPosition === 0) {
        navbar.style.opacity = 0; // Esconde a navbar
        navbar.classList.remove('nav-scrolled'); // Remove a classe nav-scrolled
    }
    // Se o usuário rolar até o fim da página, esconde a navbar
    else if (scrollPosition + windowHeight >= documentHeight - footerHeight) {
        navbar.style.opacity = 0; // Esconde a navbar
    } else {
        navbar.style.opacity = 1; // Mostra a navbar
        navbar.classList.add('nav-scrolled');
    }
});


// Form handling
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);

    // Add your form submission logic here
    console.log('Form submitted:', formObject);

    // Reset form after submission
    contactForm.reset();
});

// Smooth scroll for anchor links
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

// Apply input mask
const telefoneInput = document.getElementById('telefone');
const im = new Inputmask('(99) 99999-9999');
im.mask(telefoneInput);
