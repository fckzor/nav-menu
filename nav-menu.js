class NavMenu {
    constructor({wrapper, nav, dropdownTogglerText}) {
        this.wrapper = document.querySelector(wrapper),
        this.nav = document.querySelector(nav),
        this.dropdownTogglerText = dropdownTogglerText,
        this.navItems = [...this.nav.children]
    }
    init() {
        this.checkWidth();
    }
    checkWidth() {
        let widthItems = 0, dropdown = 0;
        this.navItems.forEach(li => {
            widthItems += li.offsetWidth;
            if (widthItems > this.nav.offsetWidth) {
                dropdown++;
                if (dropdown === 1) this.createDropdown();
                this.hideItems(li);
            }
        });
    }
    createDropdown() {
        this.wrapper.insertAdjacentHTML('beforeEnd', `
            <div class="dropdown__wrapper">
                <span class="dropdown__toggler">${this.dropdownTogglerText}</span>
                <ul class="dropdown__list"></ul>
            </div>
        `);
    }
    hideItems(item) {
        document.querySelector('.dropdown__list').insertAdjacentElement('beforeEnd', item);
    }
}

const nav = new NavMenu({
    wrapper: '.nav__wrapper', // селектор родительского элемента ul
    nav: '.nav__ul', // селектор элемента ul
    dropdownTogglerText: document.documentElement.lang === 'ru' ? 'Ещё' : 'More' // текст тоглера, мультиязычный пример
}).init();