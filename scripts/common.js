const navbarHTML = `
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/piterinn/index.html">
            <figure class="image">
                <img src="/piterinn/public/img/logo.png" alt="Наше лого! Вау!"/>
            </figure>
        </a>
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
</nav>`;

document.getElementById('nav').innerHTML = navbarHTML;

const footerHTML = `
<footer class="footer">
    <div class="content has-text-centered">
        <strong>Сели@регистрируй</strong>
        <br>
        <br>
        <strong>Shitcoded by FOOI</strong>
    </div>
</footer>`;

document.getElementById('footer').innerHTML = footerHTML;