/* ============================================
   NAJIP DESIGN - JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---- Inicializar tsParticles en el Hero ----
    if (document.getElementById('tsparticles')) {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.5,
                            color: "#1BB5A7"
                        }
                    }
                },
            },
            particles: {
                color: {
                    value: ["#1BB5A7", "#054352", "#2dd4c4"],
                },
                links: {
                    color: "#054352",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        });
    }

    // ---- Inicializar Swiper (Carrusel Avanzado) ----
    // ---- Inicializar Swiper (Carrusel Avanzado) ----
    if (document.querySelector('.servicesSwiper')) {
        new Swiper('.servicesSwiper', {
            // Configuración del carrusel de servicios principales en servicios.html
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Detiene el scroll automático al poner el cursor encima
            },
            coverflowEffect: {
                rotate: 0,
                stretch: -30,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
    }

    // ---- Inicializar Carruseles Infinitos (Soluciones) ----
    if (document.querySelector('.marqueeSwiper1')) {
        new Swiper('.marqueeSwiper1', {
            spaceBetween: 20,
            centeredSlides: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
        });
    }

    if (document.querySelector('.marqueeSwiper2')) {
        new Swiper('.marqueeSwiper2', {
            spaceBetween: 20,
            centeredSlides: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
        });
    }

    if (document.querySelector('.marqueeSwiper3')) {
        new Swiper('.marqueeSwiper3', {
            spaceBetween: 100,
            centeredSlides: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
        });
    }

    // ---- Inicializar AOS (Animate On Scroll) ----
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        delay: 0,
    });

    // ---- Navbar: cambiar estilo al hacer scroll ----
    const navbar = document.getElementById('mainNavbar');
    const scrollThreshold = 60;

    function handleNavbarScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // ejecutar al cargar

    // ---- Cerrar menú móvil al hacer clic en un link ----
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // ---- Smooth scroll para links de navegación ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ---- Marcar link activo según la sección visible ----
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNav() {
        const scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNav);
    highlightActiveNav();

    // ---- Año actual en el footer ----
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ---- Efecto parallax suave en el hero ----
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image-wrapper');

    if (heroSection && heroImage) {
        window.addEventListener('scroll', function () {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.15;

            if (scrolled < window.innerHeight) {
                heroImage.style.transform = 'translateY(' + rate + 'px)';
            }
        });
    }

    // ---- Tooltip WhatsApp: mostrar brevemente al cargar ----
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    if (whatsappTooltip) {
        setTimeout(function () {
            whatsappTooltip.style.opacity = '1';
            setTimeout(function () {
                whatsappTooltip.style.opacity = '0';
            }, 4000);
        }, 3000);
    }

    // ---- Efecto interactivo de CTA (Seguimiento de cursor con imágenes flotantes) ----
    const ctaSection = document.querySelector('[data-interactive-bg="true"]');
    if (ctaSection) {
        const interactiveElements = ctaSection.querySelectorAll('.interactive-element');

        ctaSection.addEventListener('mousemove', (e) => {
            const rect = ctaSection.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posición X del ratón dentro de la sección
            const y = e.clientY - rect.top; // Posición Y dentro de la sección

            // Convertir a porcentajes relativas al centro
            const xOffset = (x / rect.width - 0.5) * 2;
            const yOffset = (y / rect.height - 0.5) * 2;

            interactiveElements.forEach((el, index) => {
                // Hacer las imágenes visibles al mover el ratón
                el.style.opacity = '0.35';

                // Efecto pseudo-aleatorio de velocidad y dirección
                const speed = (index + 1) * 25;
                const moveX = xOffset * speed * (index % 2 === 0 ? 1 : -1);
                const moveY = yOffset * speed * (index % 3 === 0 ? -1 : 1);

                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });

        ctaSection.addEventListener('mouseleave', () => {
            interactiveElements.forEach((el) => {
                // Ocultar al salir suavemente
                el.style.opacity = '0';
                el.style.transform = `translate(0px, 0px)`;
            });
        });
    }

});
