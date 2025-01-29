// @name         Remove annoying Google widget request
// @version      0.1
// @match        *://*.google.com/*
// @match        *://*.google.ru/*
// @updateURL https://gist.github.com/anauthentic/8ba0ecf98cb5cf917563e1e12e6c035f/raw/remove-annoying-google-widget-request.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Создаем элементы
    const container = document.createElement('div');
    const input = document.createElement('input');
    const buttonApplyFor = document.createElement('button');

    // Настраиваем элементы
    input.type = 'number';
    input.placeholder = 'Введите секунды';
    buttonApplyFor.innerText = 'Apply for...';

    // Добавляем элементы на страницу
    container.appendChild(input);
    container.appendChild(buttonApplyFor);
    document.body.appendChild(container);  // Измените на нужный контейнер

    // Обработчик события для кнопки
    buttonApplyFor.addEventListener('click', () => {
        const seconds = parseInt(input.value);
        if (isNaN(seconds) || seconds <= 0) {
            alert('Пожалуйста, введите положительное число');
            return;
        }

        // Нажимаем кнопку с классом appId через указанное количество секунд
        setTimeout(() => {
            const applyButton = document.querySelector('.appID');
            if (applyButton) {
                applyButton.click();
            } else {
                console.error('Кнопка с классом appId не найдена');
            }
        }, seconds * 1000);

        // Нажимаем кнопку с классом ressId через указанное количество секунд + небольшая задержка
        setTimeout(() => {
            const resetButton = document.querySelector('.ressId');
            if (resetButton) {
                resetButton.click();
            } else {
                console.error('Кнопка с классом ressId не найдена');
            }
        }, (seconds + 1) * 1000);  // Задержка на 1 секунду после apply
    });
})();
