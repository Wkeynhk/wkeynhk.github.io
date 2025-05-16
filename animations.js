document.addEventListener('DOMContentLoaded', () => {
    // Создаем эффект параллакса при движении мыши
    document.addEventListener('mousemove', parallaxEffect);
    
    // Добавляем анимацию при скролле
    window.addEventListener('scroll', scrollAnimation);
    
    // Инициализируем анимацию карточек источников
    initializeSourceCards();
    
    // Добавляем анимацию при наведении на кнопки
    initializeButtonEffects();
    
    // Добавляем частицы на фон
    createParticles();
    
    // Добавляем анимацию для информационного блока
    animateInfoBox();
    
    // Добавляем эффект пульсации для кнопок установки
    animateInstallButtons();
    
    // Анимация для логотипа
    animateLogo();
});

// Эффект параллакса
function parallaxEffect(e) {
    this.querySelectorAll('.hero-content h1, .hero-content p, .source-card').forEach(element => {
        const speed = element.getAttribute('data-speed') || 3;
        const x = (window.innerWidth - e.pageX * speed) / 150;
        const y = (window.innerHeight - e.pageY * speed) / 150;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

// Анимация скролла
function scrollAnimation() {
    const elements = document.querySelectorAll('.source-card, .btn, .info-box, .contact-form, .thank-you-container');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

// Инициализация карточек источников
function initializeSourceCards() {
    const cards = document.querySelectorAll('.source-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'var(--accent-color)';
            
            // Добавляем эффект пульсации для иконки
            const icon = card.querySelector('.source-icon i');
            icon.style.animation = 'pulse 1.5s infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            card.style.borderColor = 'var(--border-color)';
            
            // Убираем анимацию пульсации
            const icon = card.querySelector('.source-icon i');
            icon.style.animation = 'none';
        });
    });
}

// Анимация для кнопок установки
function animateInstallButtons() {
    const buttons = document.querySelectorAll('.install-btn');
    buttons.forEach(button => {
        // Добавляем мягкое свечение
        setInterval(() => {
            button.style.boxShadow = '0 0 15px var(--accent-color)';
            setTimeout(() => {
                button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
            }, 1000);
        }, 3000);
    });
}

// Эффекты для кнопок
function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const x = e.clientX - button.getBoundingClientRect().left;
            const y = e.clientY - button.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Анимация для информационного блока
function animateInfoBox() {
    const infoBox = document.querySelector('.info-box');
    if (infoBox) {
        infoBox.style.opacity = '0';
        infoBox.style.transform = 'translateY(20px)';
        
        // Анимация появления с задержкой
        setTimeout(() => {
            infoBox.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            infoBox.style.opacity = '1';
            infoBox.style.transform = 'translateY(0)';
        }, 800);
    }
}

// Анимация для логотипа
function animateLogo() {
    const logo = document.querySelector('.logo-text');
    logo.addEventListener('mouseover', () => {
        logo.style.animation = 'glow 1.5s ease-in-out infinite alternate';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.animation = 'none';
    });
}

// Создание частиц на фоне
function createParticles() {
    const starsContainer = document.querySelector('.stars');
    const count = 100;
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Используем зеленый оттенок для некоторых звезд
        const isGreen = Math.random() > 0.7;
        if (isGreen) {
            star.style.backgroundColor = 'rgba(0, 200, 83, ' + (Math.random() * 0.7 + 0.3) + ')';
            star.style.boxShadow = '0 0 10px rgba(0, 200, 83, 0.8)';
        }
        
        // Добавляем разные размеры звезд
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Добавляем разную яркость и скорость мерцания
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        
        starsContainer.appendChild(star);
    }
}

// Добавляем CSS для новых элементов через JavaScript
const style = document.createElement('style');
style.textContent = `
    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background-color: white;
        border-radius: 50%;
        animation: twinkle ease infinite;
    }
    
    @keyframes twinkle {
        0% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.2; transform: scale(0.8); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes glow {
        from { text-shadow: 0 0 5px rgba(0, 200, 83, 0.5), 0 0 10px rgba(0, 200, 83, 0.3); }
        to { text-shadow: 0 0 10px rgba(0, 200, 83, 0.8), 0 0 20px rgba(0, 200, 83, 0.5); }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 200, 83, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .btn-primary:hover i {
        animation: shake 0.5s ease;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
    }
    
    @keyframes notification-in {
        0% { transform: translateX(120%); }
        100% { transform: translateX(0); }
    }
    
    @keyframes notification-out {
        0% { transform: translateX(0); }
        100% { transform: translateX(120%); }
    }
`;

document.head.appendChild(style); 