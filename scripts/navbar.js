/*
<nav>
    <ul>
        <li><a href="./index.html">ESER VE KONUSU</a></li>
        <li><a href="./about.html">YAZAR HAKKINDA</a></li>
        <li><a href="./contact.html">ESERLERİN VİDEOSU</a></li>
    </ul>
</nav>
*/

const menuButtons = [
    {
        id: 0,
        name: "ESER VE KONUSU",
        url: "./index.html"
    },
    {
        id: 1,
        name: "YAZAR HAKKINDA",
        url: "./about.html"
    },
    {
        id: 2,
        name: "ESERLERİN VİDEOSU",
        url: "./contact.html"
    }
]

function NavBar() {
    const nav = document.createElement("nav");
    document.body.prepend(nav);

    const ul = document.createElement("ul");
    nav.appendChild(ul);

    menuButtons.forEach(menu => {
        const li = document.createElement("li");
        ul.appendChild(li);

        const link = document.createElement("a");
        link.href = menu.url;
        link.innerHTML = menu.name;
        li.appendChild(link);
    });
}

NavBar();