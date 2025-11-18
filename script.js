(function () {
    const items = ['Home', 'About', 'Services', 'Contact'];
    const ul = document.getElementById('navItems');
    if (!ul) return;

    items.forEach(name => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const anchor = document.createElement('a');
        anchor.className = 'nav-link';
        const id = name.toLowerCase().replace(/\s+/g, '');
        anchor.href = '#' + id;
        anchor.textContent = name;

        li.appendChild(anchor);
        ul.appendChild(li);
    });
})();

