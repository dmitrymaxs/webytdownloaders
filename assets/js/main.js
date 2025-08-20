// Основной JavaScript для сайта

document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен успешно!');
    
    // Плавная прокрутка для навигационных ссылок
    initSmoothScrolling();
    
    // Анимация появления секций при прокрутке
    initScrollAnimations();
    
    // Добавление интерактивности к карточкам проектов
    initProjectCards();
});

/**
 * Инициализация плавной прокрутки для якорных ссылок
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Инициализация анимаций при прокрутке
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Добавление интерактивности к карточкам проектов
 */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#3498db';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e1e8ed';
        });
    });
}

/**
 * Утилита для логирования
 */
function log(message) {
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

// Экспорт функций для возможного использования в других скриптах
window.siteUtils = {
    log: log,
    initSmoothScrolling: initSmoothScrolling,
    initScrollAnimations: initScrollAnimations,
    initProjectCards: initProjectCards
};