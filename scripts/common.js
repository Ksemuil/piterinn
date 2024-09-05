// Функция для загрузки HTML-файла в указанный элемент
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки файла: ' + file);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Ошибка:', error));
}

// Определяем путь к файлам навигации и футера
function loadCommonElements() {
    // Абсолютные пути
    loadHTML('/common/nav.html', 'nav');
    loadHTML('/common/footer.html', 'footer');
}

// Вызываем функцию для загрузки элементов
loadCommonElements();
