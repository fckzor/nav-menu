class NavMenu {
    constructor({wrapper, nav, dropdownTogglerText}) {
        this.wrapper = document.querySelector(wrapper),
        this.nav = document.querySelector(nav),
        this.dropdownTogglerText = dropdownTogglerText,
        this.navItems = [...this.nav.children]
    }
    init() {
        // this.addStyles();
        this.createDropdown();
        this.checkWidth();
    }
    // Эти стиди и так прописаны в css, чтобы при ините не было скачка
    // В таком случае дублировать их тут нет смысла

    // addStyles() {
    //     this.wrapper.style.cssText = `
    //         display: flex;
    //         align-items: center;
    //     `;
    //     this.nav.style.cssText = `
    //         display: flex;
    //         align-items: center;
    //         white-space: nowrap;
    //         overflow: hidden;
    //     `;
    // }
    checkWidth() {
        let widthItems = 0;
        this.navItems.forEach(li => {
            widthItems += li.offsetWidth;
            if (widthItems > this.nav.offsetWidth) this.hideItems(li);
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
/*
Для работы скрипта элементу ul и его родителю нужно задать стили, лучше всего в css,
чтобы страница подгружалась уже с нужными стилями

.parent-ul {
    display: flex;
    align-items: center;
}
.ul {
    width: 530px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
} 
*/

// инит
const nav = new NavMenu({
    wrapper: '.nav__wrapper', // селектор родительского элемента ul
    nav: '.nav__ul', // селектор элемента ul
    dropdownTogglerText: document.documentElement.lang === 'ru' ? 'Ещё' : 'More' // текст тоглера, мультиязычный пример
}).init();