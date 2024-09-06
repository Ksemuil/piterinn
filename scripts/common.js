const navbarHTML = `
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="../index.html"">
            <figure class="image">
                <img src="../public/img/logo.png" alt="Наше лого! Вау!"/>
            </figure>
        </a>
        <a class="navbar-item is-tab" href="../src/admin.html">
            Администратор
        </a>
        <a class="navbar-item is-tab" href="../src/docs.html">
            Документы
        </a>
        <a class="navbar-item is-tab" href="../src/FAQ.html">
            FAQ
        </a>
        <a class="navbar-item is-tab" href="../src/Memes.html">
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