/* eslint userscripts/no-invalid-metadata: ["error", { top: "required" }] */

// ==UserScript==
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
