import {
  validConfiguration,
  formContact,
  submitButton,
} from '../utils/utils.js'

import { FormValidator } from '../components/formValidators.js';

const formValidators = new FormValidator(validConfiguration, formContact);
formValidators.enableValidation();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
})