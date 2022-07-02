export class Section {
  constructor({items, renderer}, imageSelector) {
    this._items = items;
    this._renderer = renderer;
    this._imageSelector = imageSelector;
    this._container = document.querySelector(`.${this._imageSelector}`);
  }

  addImage = (item) => {
    this._container.prepend(this._renderer(item));
  }

  renderItems = () => {
    this._items.forEach(item => {
      this.addImage(item);
    });
  }

}

