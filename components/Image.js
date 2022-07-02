export class Image {
  constructor({name, link}, imageTemplate, imageSelector) {
    this._name = name;
    this._link = link;
    this._imageSelector = imageSelector;
    this._imageTemplate = imageTemplate;
  }


  _getTemplate = () => {
    const imageTemplate = this._imageTemplate.cloneNode(true);
    return imageTemplate;
  };


  createImage = () => {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.lightbox__photo');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    
    return this._element;
  }
}

