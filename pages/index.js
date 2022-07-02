import {
  validConfiguration,
  initialImage,
  formContact,
  submitButton,
  imageTemplate,
} from '../utils/utils.js'
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/formValidators.js';
import { Image } from '../components/Image.js';

const formValidators = new FormValidator(validConfiguration, formContact);
formValidators.enableValidation();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
});

const createImage = (item) => {
  const image = new Image(item, imageTemplate, 'lightbox__table');
  return image.createImage();
}

const newImage = new Section({
  items: initialImage,
  renderer: createImage 
}, 'lightbox__table');
newImage.renderItems();


