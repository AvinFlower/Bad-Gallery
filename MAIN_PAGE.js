function goToPage(url) {
    window.location.href = url;
}

function animateAsciiArt() {
    const pre = document.getElementById('ascii-art');
    const asciiArt = pre.innerHTML.split('\n');
    const animationChars = [['+', '-', '=', '~', '*', '#', '@', '&', '%', '$', '!', '^', '?'], // Набор символов для первой "области"
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'], // Набор символов для второй "области"
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']]; // Набор символов для третьей "области"

    let index = 0;


    function changeChars() {
        let newAsciiArt = '';
        for (let i = 0; i < asciiArt.length; i++) {
            const line = asciiArt[i];
            const charSet = animationChars[i % animationChars.length]; // Выбираем набор символов в зависимости от строки
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                if (char !== ' ') { // Игнорируем пробелы
                    const randomChar = charSet[Math.floor(Math.random() * charSet.length)]; // Выбираем случайный символ из набора
                    newAsciiArt += randomChar;
                } else {
                    newAsciiArt += char; // Оставляем пробелы без изменений
                }
            }
            if (i < asciiArt.length - 1) {
                newAsciiArt += '\n'; // Добавляем перенос строки кроме последней строки
            }
        }
        pre.textContent = newAsciiArt; // Обновляем текст ASCII-арта
        index++;
        if (index < animationChars[0].length) {
            setTimeout(changeChars, 100); // Повторяем анимацию с интервалом 100 миллисекунд
        } else {
            pre.textContent = asciiArt.join('\n'); // Восстанавливаем исходный ASCII-арт
            animateAsciiArt2();
        }
    }

    changeChars(); // Запускаем анимацию
}

function animateAsciiArt2() {
    const pre = document.getElementById('ascii-art');
    const asciiArt = pre.innerHTML;
    const animationChars = ['+', '~', '*', '#', '@', '&', '%', '$', '?'];
    let index = 0;

    function changeChars() {
        let newAsciiArt = '';
        for (let i = 0; i < asciiArt.length; i++) {
            const char = asciiArt[i];
            if (char !== ' ' && char !== '\n' && char !== '\t') {
                if (Math.random() < 0.6) {
                    newAsciiArt += animationChars[Math.floor(Math.random() * animationChars.length)];
                } else {
                    newAsciiArt += char;
                }
            } else {
                newAsciiArt += char;
            }
        }
        pre.textContent = newAsciiArt;
        index++;
        if (index < animationChars.length) {
            setTimeout(changeChars, 150);
        } else {
            pre.textContent = asciiArt;
            animateAsciiArt3();
        }
    }

    changeChars();
}

function animateAsciiArt3() {
    const pre = document.getElementById('ascii-art');
    const asciiArt = pre.innerHTML;
    const animationChars = ['+', '*', '#', '&', '%', '$', '?'];
    let index = 0;

    function changeChars() {
        let newAsciiArt = '';
        for (let i = 0; i < asciiArt.length; i++) {
            const char = asciiArt[i];
            if (char !== ' ' && char !== '\n' && char !== '\t') {
                if (Math.random() < 0.3) {
                    newAsciiArt += animationChars[Math.floor(Math.random() * animationChars.length)];
                } else {
                    newAsciiArt += char;
                }
            } else {
                newAsciiArt += char;
            }
        }
        pre.textContent = newAsciiArt;
        index++;
        if (index < animationChars.length) {
            setTimeout(changeChars, 200);
        } else {
            pre.textContent = asciiArt;
        }
    }

    changeChars();
}

function generateRandomLetters() {
    const rectangle = document.querySelector('.rectangle');
    const rect = rectangle.getBoundingClientRect(); // Получаем координаты и размеры прямоугольника
    const centerX = (rect.left + rect.width / 2) * 0.942; // X-координата центра прямоугольника
    const centerY = (rect.top + rect.height / 2) * 0.85; // Y-координата центра прямоугольника
    const newLetters = document.querySelectorAll('.new-letter');

    newLetters.forEach(letter => letter.remove());

    const radiusX = (rect.width / 2) * 0.4; // Радиус прямоугольника по оси X
    const radiusY = (rect.height / 2) * 0.9; // Радиус прямоугольника по оси Y
    const charCount = 60;

    for (let i = 0; i < charCount; i++) {
        const angle = (Math.PI * 2 / charCount) * i;
        const x = centerX + Math.cos(angle) * radiusX;
        const y = centerY + Math.sin(angle) * radiusY;

        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add('new-letter');
        pixel.textContent = getRandomLetter();
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.color = getRandomColor();
        rectangle.appendChild(pixel);

        setTimeout(() => {
            pixel.textContent = getRandomLetter();
        }, i * 200);
    }

    // Создаем вторую фигуру с большим радиусом
    const radiusX2 = (rect.width / 2) * 0.6; // Радиус прямоугольника по оси X (больший радиус)
    const radiusY2 = (rect.height / 2) * 1.2; // Радиус прямоугольника по оси Y (больший радиус)
    const charCount2 = 80;

    for (let i = 0; i < charCount2; i++) {
        const angle = (Math.PI * 2 / charCount2) * i;
        const x = centerX + Math.cos(angle) * radiusX2;
        const y = centerY + Math.sin(angle) * radiusY2;

        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add('new-letter');
        pixel.textContent = getRandomLetter();
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.color = getRandomColor();
        rectangle.appendChild(pixel);

        setTimeout(() => {
            pixel.textContent = getRandomLetter();
        }, (i + charCount) * 200); // Задержка для второй фигуры
    }

    // Создаем третью фигуру с радиусом в два раза больше
    const radiusX3 = (rect.width / 2) * 0.8; // Радиус прямоугольника по оси X (еще больший радиус)
    const radiusY3 = (rect.height / 2) * 1.8; // Радиус прямоугольника по оси Y (еще больший радиус)
    const charCount3 = 100;

    for (let i = 0; i < charCount3; i++) {
        const angle = (Math.PI * 2 / charCount3) * i;
        const x = centerX + Math.cos(angle) * radiusX3;
        const y = centerY + Math.sin(angle) * radiusY3;

        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add('new-letter');
        pixel.textContent = getRandomLetter();
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.color = getRandomColor();
        rectangle.appendChild(pixel);

        setTimeout(() => {
            pixel.textContent = getRandomLetter();
        }, (i + charCount + charCount2) * 200); // Задержка для третьей фигуры
    }

    // Создаем четвертую фигуру с радиусом еще больше
    const radiusX4 = (rect.width / 2) * 0.98; // Радиус прямоугольника по оси X (еще больший радиус)
    const radiusY4 = (rect.height / 2) * 2; // Радиус прямоугольника по оси Y (еще больший радиус)
    const charCount4 = 120;

    for (let i = 0; i < charCount4; i++) {
        const angle = (Math.PI * 2 / charCount4) * i;
        const x = centerX + Math.cos(angle) * radiusX4;
        const y = centerY + Math.sin(angle) * radiusY4;

        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add('new-letter');
        pixel.textContent = getRandomLetter();
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.color = getRandomColor();
        rectangle.appendChild(pixel);

        setTimeout(() => {
            pixel.textContent = getRandomLetter();
        }, (i + charCount + charCount2 + charCount3) * 200); // Задержка для четвертой фигуры
    }
}

function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

function getRandomColor() {
    return `rgb(74,93,140)`;
}

function incrementViewCount() {
    // Retrieve the current view count from local storage or set to 0 if it doesn't exist
    let count = localStorage.getItem('viewCount');
    count = count ? parseInt(count) + 1 : 1;

    // Update the view count in local storage
    localStorage.setItem('viewCount', count);

    // Display the updated view count on the page
    document.getElementById('viewCount').textContent = count;
}

window.onload = () => {
    animateAsciiArt()
    setInterval(generateRandomLetters, 200); // Генерировать случайные буквы каждые 1.5 секунды
    incrementViewCount();
};