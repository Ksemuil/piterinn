const navbarHTML = `
    <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/piterinn/index.html">
            <figure class="image">
                <img src="/piterinn/public/img/logo.png" alt="Наше лого! Вау!"/>
            </figure>
            
        </a>
        <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="navbarMain">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
    </div>
    <div id="navbarMain" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item is-tab" href="/piterinn/src/admin.html">
                Администратор
            </a>
            <a class="navbar-item is-tab" href="/piterinn/src/docs.html">
                Документы
            </a>
            <a class="navbar-item is-tab" href="/piterinn/src/FAQ.html">
                FAQ
            </a>
            <a class="navbar-item is-tab" href="/piterinn/src/Memes.html">
                Memes!
            </a>
        </div>
        <div id="navbarEnd" class="navbar-end">
            <a class="navbar-item is-tab" href="/piterinn/src/changelog.html">
                Список изменений
            </a>
        </div>
    </div>
</nav>`;

document.getElementById('nav').innerHTML = navbarHTML;

//Бургер-меню
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

//Подсветка табов
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы навигации
    const navItems = document.querySelectorAll('.navbar-item');

    // Получаем текущий URL
    let currentPage = window.location.href;

    // Проходим по каждому элементу навигации
    navItems.forEach(item => {
        const navLink = item.href;

        // Явно исключаем логотип из подсветки
        if (navLink.includes('index.html')) {
            return; // Пропускаем проверку для логотипа
        }

        // Если текущий URL содержит ссылку элемента навигации
        if (currentPage.includes(navLink)) {
            item.classList.add('is-active');
        } else {
            item.classList.remove('is-active');
        }
    });
});

// Добавляем favicon через JS
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/x-icon';
link.href = '/piterinn/public/img/favicon.png';  // Укажите правильный путь к вашему favicon
document.head.appendChild(link);

// Находим все кнопки спойлеров и добавляем каждому обработчик события
document.querySelectorAll('.spoiler-toggle').forEach(function(button) {
    button.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

//Футер
const footerHTML = `
<footer class="footer">
    <div class="content has-text-centered">
        <strong>Сели@регистрируй</strong>
        <br>
        <br>
        <strong>Shitcoded by FOOI & FOLI</strong>
    </div>
</footer>`;

document.getElementById('footer').innerHTML = footerHTML;

// Добавляем кнопку "Вверх"
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.className = 'button is-link-50';
backToTopButton.title = 'Go to top';
backToTopButton.innerText = '↑ Вверх';
document.body.appendChild(backToTopButton);

// Стилизация кнопки "Вверх"
const style = document.createElement('style');
style.innerHTML = `
    #backToTop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        z-index: 1000;
        padding: 10px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 5px;
    }
    #backToTop:hover {
        background-color: #4258ff;
    }
`;
document.head.appendChild(style);

// Показываем/скрываем кнопку "Вверх" при прокрутке
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Прокрутка вверх при нажатии на кнопку
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
