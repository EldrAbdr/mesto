export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._itemList = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderElement() {
        this._itemList.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._container.prepend(item);
    }
}