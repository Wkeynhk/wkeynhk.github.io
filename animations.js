document.addEventListener('DOMContentLoaded', () => {
    // Минимальный набор функций без анимаций
    
    // Отключаем все анимации, в том числе параллакс
    // document.addEventListener('mousemove', safeParallaxEffect);
    
    // Отключаем анимацию при скролле
    // window.addEventListener('scroll', enhancedScrollAnimation);
    
    // Оставляем только простые эффекты для взаимодействия (при наведении)
    initializeButtonHoverEffects();
    
    // Отключаем создание частиц
    // createLightParticles();
    
    // Отключаем анимации для информационного блока
    // animateInfoBoxImmediate();
    
    // Оставляем простые эффекты для кнопок, но без сложных анимаций
    initializeSimpleInstallButtons();
    
    // Отключаем лишние анимации для логотипа
    // animateLogo();
    
    // Мгновенно отображаем все элементы
    showAllElementsImmediately();
    
    // Добавляем красивые и безопасные анимации, которые не мешают прокрутке
    
    // Плавная анимация для всех существующих элементов при запуске
    showWithSafeAnimation();
    
    // Эффекты наведения для кнопок и карточек
    initializeHoverEffects();
    
    // Добавляем анимации интерактивности, которые срабатывают только при действиях пользователя
    initializeInteractiveEffects();
    
    // Дополнительные анимации для улучшения внешнего вида без нагрузки на производительность
    addSubtleAnimations();
    
    // Проверяем, что прокрутка работает правильно
    ensureScrollFunctionality();
    
    // Добавляем новые красивые анимации
    createMatrixEffect();
    createFloatingParticles();
});

// Максимально упрощенная функция отображения элементов
function showAllElementsImmediately() {
    document.querySelectorAll('.source-card, .btn, .info-box, .contact-form, .thank-you-container').forEach(element => {
        if (element) {
            element.style.opacity = '1';
            element.style.transform = 'none';
            // Не добавляем класс show, так как он может иметь анимации
        }
    });
}

// Упрощенная функция для кнопок - только hover эффекты без анимаций
function initializeButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Не добавляем ripple-эффект
    });
}

// Простая инициализация кнопок установки без анимаций
function initializeSimpleInstallButtons() {
    const buttons = document.querySelectorAll('.install-btn');
    // Не добавляем пульсацию и сложные эффекты
}

// Для совместимости оставляем пустые функции
function parallaxEffect() {}
function scrollAnimation() {}
function animateInfoBox() {}
function animateLogo() {}
function createParticles() {}

// Безопасная версия параллакса только для фона
function safeParallaxEffect(e) {
    const stars = document.querySelector('.twinkling');
    if (stars) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        stars.style.backgroundPosition = `${x * 10}px ${y * 10}px`;
    }
}

// Улучшенная анимация при скролле - более быстрая и плавная
function enhancedScrollAnimation() {
    const elements = document.querySelectorAll('.source-card, .info-box');
    
    elements.forEach(element => {
        if (element) {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            } else {
                element.style.transform = 'translateY(10px)';
                element.style.opacity = '0.9';
            }
        }
    });
}

// Улучшенные карточки с мягкими эффектами при наведении
function initializeEnhancedCards() {
    const cards = document.querySelectorAll('.source-card');
    
    cards.forEach((card) => {
        // Обеспечиваем полную видимость карточек
        card.style.opacity = '1';
        card.style.transform = 'none';
        
        // Улучшенные эффекты при наведении
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'var(--accent-color)';
            
            // Анимация иконки
            const icon = card.querySelector('.source-icon i');
            if (icon) icon.style.animation = 'pulse 1.5s infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            card.style.borderColor = 'var(--border-color)';
            
            // Отключение анимации иконки
            const icon = card.querySelector('.source-icon i');
            if (icon) icon.style.animation = 'none';
        });
    });
}

// Немедленная анимация инфо-блока без задержек
function animateInfoBoxImmediate() {
    const infoBox = document.querySelector('.info-box');
    if (infoBox) {
        infoBox.style.opacity = '1';
        infoBox.style.transform = 'translateY(0)';
        infoBox.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
}

// Эффект параллакса
function parallaxEffect(e) {
    // Отключаем параллакс-эффект, который мог вызывать проблемы с нижней частью страницы
    // Комментируем предыдущий код для возможного будущего использования
    /*
    this.querySelectorAll('.hero-content h1, .hero-content p, .source-card').forEach(element => {
        const speed = element.getAttribute('data-speed') || 3;
        const x = (window.innerWidth - e.pageX * speed) / 150;
        const y = (window.innerHeight - e.pageY * speed) / 150;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    */
    
    // Вместо этого добавим более мягкий эффект, который не будет влиять на положение элементов
    // и не вызовет проблем с отображением нижней части страницы
    const stars = document.querySelector('.twinkling');
    if (stars) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        stars.style.backgroundPosition = `${x * 10}px ${y * 10}px`;
    }
}

// Анимация скролла
function scrollAnimation() {
    const elements = document.querySelectorAll('.source-card, .btn, .info-box, .contact-form, .thank-you-container');
    
    elements.forEach(element => {
        // Проверяем, существует ли элемент перед работой с ним
        if (element) {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('show');
            }
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

// Безопасная анимация для элементов при загрузке
function showWithSafeAnimation() {
    // Устанавливаем 100% видимость для всех элементов
    document.querySelectorAll('.source-card, .btn, .info-box, .contact-form, .thank-you-container').forEach(element => {
        if (element) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
    
    // Добавляем анимации для элементов, которые уже видны на экране
    // Это безопасно, так как элемент уже виден, мы просто добавляем визуальный эффект
    setTimeout(() => {
        const cards = document.querySelectorAll('.source-card');
        cards.forEach((card, index) => {
            // Небольшая пульсация карточек с задержкой
            setTimeout(() => {
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 200);
            }, index * 150);
        });
    }, 300);
}

// Эффекты наведения для интерактивных элементов
function initializeHoverEffects() {
    // Эффекты для карточек
    const cards = document.querySelectorAll('.source-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'var(--accent-color)';
            
            // Подсветка иконки
            const icon = card.querySelector('.source-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.boxShadow = '0 10px 25px rgba(0, 200, 83, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            card.style.borderColor = 'var(--border-color)';
            
            // Возврат иконки в нормальное состояние
            const icon = card.querySelector('.source-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.boxShadow = '';
            }
        });
    });
    
    // Эффект пульсации для кнопок установки
    const installButtons = document.querySelectorAll('.install-btn');
    installButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px) scale(1.03)';
            button.style.boxShadow = '0 10px 20px rgba(0, 200, 83, 0.4)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Интерактивные анимации, которые запускаются по действиям пользователя
function initializeInteractiveEffects() {
    // Анимация эффекта нажатия для всех кнопок
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(-1px)';
            button.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    });
    
    // Эффект для логотипа при наведении
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.textShadow = '0 0 10px rgba(0, 200, 83, 0.8), 0 0 20px rgba(0, 200, 83, 0.5)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.textShadow = '';
        });
    }
}

// Добавление тонких анимаций для улучшения внешнего вида
function addSubtleAnimations() {
    // Анимация подсветки для иконки в source-card при наведении
    document.querySelectorAll('.source-card .source-icon i').forEach(icon => {
        // Создаем плавный эффект свечения при наведении на карточку
        const card = icon.closest('.source-card');
        if (card) {
            card.addEventListener('mouseenter', () => {
                icon.style.color = 'var(--accent-color-hover)';
                icon.style.textShadow = '0 0 15px var(--accent-color)';
            });
            
            card.addEventListener('mouseleave', () => {
                icon.style.color = '';
                icon.style.textShadow = '';
            });
        }
    });
    
    // Небольшая пульсация иконок в карточках (автономная)
    document.querySelectorAll('.source-icon').forEach(icon => {
        setInterval(() => {
            icon.style.transform = 'scale(1.05)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 600);
        }, 5000); // Раз в 5 секунд
    });
}

// Проверка и обеспечение корректной работы прокрутки
function ensureScrollFunctionality() {
    // Убедимся, что body можно прокручивать
    document.body.style.overflow = 'auto';
    
    // Проверяем, что мобильное меню не блокирует прокрутку, когда закрыто
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    
    if (menuToggle && navMenu && menuBackdrop) {
        menuToggle.addEventListener('click', function() {
            // Если меню открыто - запрещаем прокрутку body
            // Если закрыто - разрешаем
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        // При закрытии меню восстанавливаем прокрутку
        menuBackdrop.addEventListener('click', function() {
            document.body.style.overflow = 'auto';
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.body.style.overflow = 'auto';
            });
        });
    }
}

// Создаем эффект матрицы в стиле киберпанк с зелеными элементами
function createMatrixEffect() {
    // Сначала создаем контейнеры для эффекта матрицы
    const matrixBg = document.createElement('div');
    matrixBg.classList.add('matrix-bg');
    document.body.appendChild(matrixBg);
    
    const matrixRain = document.createElement('canvas');
    matrixRain.classList.add('matrix-rain');
    matrixBg.appendChild(matrixRain);
    
    // Настройка канваса
    const ctx = matrixRain.getContext('2d');
    matrixRain.width = window.innerWidth;
    matrixRain.height = window.innerHeight;
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        matrixRain.width = window.innerWidth;
        matrixRain.height = window.innerHeight;
    });
    
    // Символы для "матрицы"
    const matrixChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    
    // Размер шрифта и количество колонок
    const fontSize = 14;
    const columns = Math.floor(matrixRain.width / fontSize);
    
    // Массив для хранения текущей позиции Y для каждой колонки
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    // Функция для отрисовки "дождя из символов"
    function drawMatrix() {
        // Полупрозрачный черный фон для создания эффекта угасания
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrixRain.width, matrixRain.height);
        
        // Устанавливаем цвет и шрифт для символов
        ctx.fillStyle = '#00c853'; // Зеленый цвет в соответствии с темой сайта
        ctx.font = fontSize + 'px monospace';
        
        // Отрисовка символов
        for (let i = 0; i < drops.length; i++) {
            // Выбираем случайный символ
            const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            
            // Рисуем символ
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Если символ достиг низа или с вероятностью 0.975, сбрасываем его в начало
            if (drops[i] * fontSize > matrixRain.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Двигаем символ вниз
            drops[i]++;
        }
    }
    
    // Запускаем анимацию
    setInterval(drawMatrix, 33); // ~30 кадров в секунду
}

// Создаем эффект плавающих частиц
function createFloatingParticles() {
    // Создаем контейнер для частиц
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('floating-particles');
    document.body.appendChild(particlesContainer);
    
    // Создаем частицы
    const particleCount = 15; // Небольшое количество для производительности
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Случайный размер
        const size = Math.random() * 15 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Случайное положение
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Случайная длительность анимации
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        
        // Случайная задержка для равномерного появления
        const delay = Math.random() * 15;
        particle.style.animationDelay = delay + 's';
        
        // Изменяем направление для некоторых частиц
        if (Math.random() > 0.5) {
            particle.style.animationDirection = 'reverse';
        }
        
        // Добавляем частицу в контейнер
        particlesContainer.appendChild(particle);
    }
} 