// Функция для отправки данных формы в Telegram
async function sendToTelegram(formData) {
    // Заменить на ваш токен бота, полученный от BotFather
    const BOT_TOKEN = '7963381947:AAFiAjpCQBqBPCLLMw8V6x1gWbW1TdleXMc';
    
    // Заменить на ваш ID чата (можно получить через бот @userinfobot)
    const CHAT_ID = '7963381947';
    
    // Собираем сообщение из данных формы
    const nickname = formData.get('nickname') || 'Не указан';
    const website = formData.get('website') || 'Не указан';
    const message = formData.get('message') || 'Не указано';
    
    const text = `🌐 Новая заявка с сайта!\n\n👤 Discord: ${nickname}\n🔗 Сайт: ${website}\n💬 Сообщение: ${message}`;
    
    // Формируем URL для отправки сообщения в Telegram
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    try {
        // Отправляем запрос к API Telegram
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            console.log('Сообщение успешно отправлено в Telegram');
            return true;
        } else {
            console.error('Ошибка при отправке в Telegram:', data);
            return false;
        }
    } catch (error) {
        console.error('Ошибка при отправке в Telegram:', error);
        return false;
    }
}

// Проксирующая функция для обхода CORS-ограничений через сервис CORS Anywhere
async function sendToTelegramViaCorsProxy(formData) {
    // Используем сервис CORS-proxy для обхода ограничений
    const CORS_PROXY = 'https://corsproxy.io/?';
    
    // Заменить на ваш токен бота, полученный от BotFather
    const BOT_TOKEN = '7963381947:AAFiAjpCQBqBPCLLMw8V6x1gWbW1TdleXMc';
    
    // Заменить на ваш ID чата (можно получить через бот @userinfobot)
    const CHAT_ID = '7963381947';
    
    // Собираем сообщение из данных формы
    const nickname = formData.get('nickname') || 'Не указан';
    const website = formData.get('website') || 'Не указан';
    const message = formData.get('message') || 'Не указано';
    
    const text = `🌐 Новая заявка с сайта!\n\n👤 Discord: ${nickname}\n🔗 Сайт: ${website}\n💬 Сообщение: ${message}`;
    
    // Формируем URL для отправки сообщения в Telegram через прокси
    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const proxyUrl = CORS_PROXY + encodeURIComponent(telegramApiUrl);
    
    try {
        // Отправляем запрос к API Telegram через прокси
        const response = await fetch(proxyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            console.log('Сообщение успешно отправлено в Telegram');
            return true;
        } else {
            console.error('Ошибка при отправке в Telegram:', data);
            return false;
        }
    } catch (error) {
        console.error('Ошибка при отправке в Telegram:', error);
        return false;
    }
} 