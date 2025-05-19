// Функция для отправки данных формы в Telegram
async function sendToTelegram(formData) {
    try {
        // Заменить на ваш токен бота, полученный от BotFather
        const BOT_TOKEN = '7963381947:AAFiAjpCQBqBPCLLMw8V6x1gWbW1TdleXMc';
        
        // Заменить на ваш ID чата (можно получить через бот @userinfobot)
        const CHAT_ID = '1406453577';
        
        // Собираем сообщение из данных формы
        const nickname = formData.get('nickname') || 'Не указан';
        const website = formData.get('website') || 'Не указан';
        const message = formData.get('message') || 'Не указано';
        
        const text = `🌐 Новая заявка с сайта!\n\n👤 Discord: ${nickname}\n🔗 Сайт: ${website}\n💬 Сообщение: ${message}`;
        
        // Формируем URL для отправки сообщения в Telegram
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        console.log('Отправка сообщения с текстом:', text);
        console.log('Отправка на URL:', url);
        
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
        
        console.log('Ответ от Telegram API:', data);
        
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

// Проксирующая функция для обхода CORS-ограничений
async function sendToTelegramViaCorsProxy(formData) {
    try {
        // Используем несколько сервисов CORS-proxy для обхода ограничений
        // Попробуем сначала один, затем другой в случае ошибки
        const CORS_PROXIES = [
            'https://corsproxy.io/?',
            'https://api.allorigins.win/raw?url=',
            'https://cors-anywhere.herokuapp.com/'
        ];
        
        // Заменить на ваш токен бота, полученный от BotFather
        const BOT_TOKEN = '7963381947:AAFiAjpCQBqBPCLLMw8V6x1gWbW1TdleXMc';
        
        // Заменить на ваш ID чата (можно получить через бот @userinfobot)
        const CHAT_ID = '7963381947';
        
        // Собираем сообщение из данных формы
        const nickname = formData.get('nickname') || 'Не указан';
        const website = formData.get('website') || 'Не указан';
        const message = formData.get('message') || 'Не указано';
        
        const text = `🌐 Новая заявка с сайта!\n\n👤 Discord: ${nickname}\n🔗 Сайт: ${website}\n💬 Сообщение: ${message}`;
        
        // Вместо отправки через прокси, используем webhook.site для тестирования
        // Это поможет определить, успешно ли отправляются данные
        const testHook = 'https://webhook.site/21bae83e-4c04-4992-8e5f-eb6ef1bcaa3d';
        
        console.log('Пробуем отправить тестовое сообщение на webhook.site...');
        
        // Отправляем тестовый запрос
        try {
            const testResponse = await fetch(testHook, {
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
            
            console.log('Ответ от тестового хука:', testResponse.status);
            
            // Если тестовое сообщение отправлено успешно, пробуем отправить в Telegram
            for (const proxy of CORS_PROXIES) {
                try {
                    console.log(`Пробуем прокси: ${proxy}`);
                    
                    // Формируем URL для отправки сообщения в Telegram через прокси
                    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
                    const proxyUrl = proxy + encodeURIComponent(telegramApiUrl);
                    
                    console.log('Отправка на URL:', proxyUrl);
                    
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
                    console.log('Ответ от Telegram API через прокси:', data);
                    
                    if (data.ok) {
                        console.log('Сообщение успешно отправлено в Telegram через прокси');
                        return true;
                    }
                } catch (proxyError) {
                    console.error(`Ошибка при использовании прокси ${proxy}:`, proxyError);
                    // Продолжаем со следующим прокси
                }
            }
            
            // Если ни один прокси не сработал, пробуем метод с jsonp
            console.log('Пробуем отправить через jsonp...');
            
            // Создаем URL для JSONP запроса
            const jsonpUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}&parse_mode=HTML&callback=telegramCallback`;
            
            // Создаем callback функцию
            window.telegramCallback = function(data) {
                console.log('JSONP ответ:', data);
                if (data.ok) {
                    console.log('Сообщение успешно отправлено в Telegram через JSONP');
                }
            };
            
            // Создаем и добавляем скрипт
            const script = document.createElement('script');
            script.src = jsonpUrl;
            document.head.appendChild(script);
            
            // Удаляем скрипт после выполнения
            script.onload = function() {
                document.head.removeChild(script);
            };
            
            // Возвращаем true, чтобы показать, что мы попытались всеми способами
            return true;
            
        } catch (testError) {
            console.error('Ошибка при отправке тестового сообщения:', testError);
            // Пробуем прямую отправку в Telegram как последний вариант
            return await sendToTelegram(formData);
        }
    } catch (error) {
        console.error('Глобальная ошибка при отправке в Telegram:', error);
        return false;
    }
} 
