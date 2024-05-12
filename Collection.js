// Возврат на страницу назад
function goToPage(url) {
    window.location.href = url;
}

function searchImages() {
    var input = document.getElementById('searchInput').value.toLowerCase(); // Получаем значение из поля ввода и приводим его к нижнему регистру
    var filteredImages = images.filter(function(image, index) {
        return imageTitles[index].toLowerCase().includes(input); // Фильтруем изображения по совпадению с введенным текстом
    });

    // Показываем только отфильтрованные изображения
    images.forEach(function(image, index) {
        var img = document.getElementsByClassName('expandable-image')[index];
        if (filteredImages.includes(image)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
document.getElementById('searchInput').addEventListener('input', searchImages);

// Возможность листать изображения
var slideIndex = 0;
var images = []; // Список всех загруженных изображений

window.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.getElementById('imageContainer');
    var artsFolderPath = 'Arts/'; // Путь к папке Arts

    var numImages = 50;
    for (var i = 1; i <= numImages; i++) {
        var img = document.createElement('img');
        var imgSrc = artsFolderPath + 'image' + i + '.jpg';
        img.src = imgSrc;
        img.className = 'expandable-image';
        img.setAttribute("onclick", "openModal('" + imgSrc + "')");
        imageContainer.appendChild(img);
        images.push(imgSrc); // Добавляем ссылку на изображение в список
    }
});

// Названия для каждой картинки
var imageTitles = [
    "Twilight Forest, nature",
    "Moai Carnival, other",
    "The Desert Of Time, fiction",
    "Flat Irregularities, nature",
    "Royal Painting, other",
    "Wolves At The Watering Hole, other",
    "Russian Winter, nature",
    "UFO Attacks, other",
    "The Walking Dead Tree, nature",
    "Blue Town, other",
    "Cyber Fighter, other",
    "Brown Wave, min",
    "Red in White Orange, min",
    "Cyberpunk 3000, other",
    "Time Dose, fiction",
    "The Forest Of Spiders, nature",
    "Ferrari Among The Canyons",
    "Amazon, nature",
    "Town Lamp, min",
    "Zebra In Boots, fiction",
    "Cypresses Of The Palace, nature",
    "Golf Club, nature",
    "Lake Taiga, nature",
    "Halloween, fiction",
    "Small Water Capsule, nature",
    "Movement In The Wind, other",
    "The Clover Symbol, other",
    "Ghosts On The Defensive, fiction",
    "Full Moon, nature",
    "Northern Lights, nature",
    "The Butcher's House, other",
    "Patterns In The Steering Wheel, other",
    "Golden Dust, min",
    "The Red Sun, nature",
    "The Flower of Happiness, min",
    "Rainbow Cup, fiction",
    "The Abstraction of Being, other",
    "The Clover Seal, other",
    "The Dark Forest, nature",
    "The Royal Library, other",
    "A Library Hidden In Darkness, other",
    "View Of The Eiffel Tower, other",
    "Bootleg Hokage, fiction",
    "Collection FV, other",
    "Thread Gradient, other",
    "The Foggy Taiga, nature",
    "Minimalism In White, min",
    "Abstract Cubism & Cyclism, min",
    "Japanese Everyday Life, other",
    "The Circle Erased In The Comanche, min",
];

// При открытии модального окна, отображаем название
function openModal(imgSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var imageTitleContainer = document.getElementById("imageTitle");

    // Finding the index of the image in the images array
    var index = images.indexOf(imgSrc);
    // Extracting the title without color
    var title = imageTitles[index].split(",")[0];

    modal.style.display = "block";
    modalImg.src = imgSrc;
    slideIndex = index; // Обновляем slideIndex, чтобы он указывал на текущее изображение
    imageTitleContainer.innerHTML = "<p>" + title + "</p>"; // Using the extracted title
    updateImageTitle(); // Update title without color
}


// Закрываем модальное окно
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function plusSlides(n) {
    var filteredImages = images.filter(function(image, index) {
        return document.getElementsByClassName('expandable-image')[index].style.display !== "none";
    });

    var currentIndex = filteredImages.indexOf(images[slideIndex]);
    var newIndex = (currentIndex + n) % filteredImages.length;
    if (newIndex < 0) {
        newIndex = filteredImages.length - 1;
    }

    slideIndex = images.indexOf(filteredImages[newIndex]);

    var modalImg = document.getElementById("img01");
    modalImg.src = filteredImages[newIndex];
    updateImageTitle(filteredImages); // Передаем отфильтрованные изображения в функцию обновления заголовка
}

function updateImageTitle(filteredImages) {
    var imageTitleContainer = document.getElementById("imageTitle");
    var currentIndex = filteredImages.indexOf(images[slideIndex]);
    var title = imageTitles[images.indexOf(filteredImages[currentIndex])].split(",")[0]; // Используем заголовок из отфильтрованного массива
    imageTitleContainer.innerHTML = "<p>" + title + "</p>";
}


function downloadImage() {
    var imgSrc = images[slideIndex]; // Получаем ссылку на текущее изображение
    if (imgSrc) {
        // Создаем абсолютный URL для изображения
        var absoluteImgSrc = window.location.origin + '/' + imgSrc;

        var a = document.createElement('a');
        a.href = absoluteImgSrc;

        // Обрезаем название файла после последней запятой
        var filename = imageTitles[slideIndex].split(',').slice(0, -1).join(',');

        a.download = filename.trim(); // Устанавливаем имя файла для скачивания
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// Define function to filter images by color
function filterByColor(color) {
    var filteredImages = []; // Массив для отфильтрованных изображений

    // Сбросить выделение всех текстовых меток
    var labels = document.querySelectorAll('.filter-label');
    labels.forEach(function(label) {
        label.classList.remove('selected');
    });

    // Фильтровать изображения по выбранному цвету
    images.forEach(function(image, index) {
        var img = document.getElementsByClassName('expandable-image')[index];
        if (imageTitles[index].toLowerCase().includes(color.toLowerCase())) {
            img.style.display = "block"; // Показать изображение
            filteredImages.push(image); // Добавить изображение в массив отфильтрованных
        } else {
            img.style.display = "none"; // Скрыть изображение
        }
    });

    // Выделить выбранную текстовую метку
    var selectedLabel = document.querySelector('.filter-label[onclick="filterByColor(\'' + color + '\')"]');
    selectedLabel.classList.add('selected');
}

function resetFilters() {
    // Сбросить все чекбоксы
    var checkboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });

    // Отобразить все изображения
    images.forEach(function(image, index) {
        var img = document.getElementsByClassName('expandable-image')[index];
        img.style.display = "block";
    });
}
