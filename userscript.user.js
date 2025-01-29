// ==UserScript==
// @name         OpenWRT Apply and Reset Timer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds input and button to trigger Apply and Reset actions with a delay
// @author       You
// @match        *://*/*  // Можно уточнить URL, чтобы скрипт работал только на нужной странице
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Создаем элементы интерфейса
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.backgroundColor = '#fff';
    container.style.border = '1px solid #000';
    container.style.padding = '10px';
    container.style.zIndex = '9999';

    // Создаем поле для ввода времени
    const inputField = document.createElement('input');
    inputField.type = 'number';
    inputField.placeholder = 'Время в секундах';
    inputField.style.marginRight = '10px';

    // Создаем кнопку Apply for..
    const applyButton = document.createElement('button');
    applyButton.innerText = 'Apply for..';
    
    // Добавляем элементы в контейнер
    container.appendChild(inputField);
    container.appendChild(applyButton);
    document.body.appendChild(container);

    // Получаем кнопки на странице
    const applyBtn = document.querySelector('.appID');
    const resetBtn = document.querySelector('.ressId');

    // Обработчик нажатия на кнопку Apply for..
    applyButton.addEventListener('click', () => {
        const timeInSeconds = parseInt(inputField.value, 10);
        if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
            alert('Пожалуйста, введите валидное время в секундах');
            return;
        }

        // Нажимаем кнопку Apply
        if (applyBtn) {
            applyBtn.click();
        }

        // Через указанное время нажимаем кнопку Reset
        setTimeout(() => {
            if (resetBtn) {
                resetBtn.click();
            }
        }, timeInSeconds * 1000); // Преобразуем секунды в миллисекунды
    });
})();
