export const validConfiguration = {
  formSelector: 'form',
  inputSelector: 'form__input',
  submitButtonSelector: 'button_type_submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorMessage: 'form__input-error_active',
};

export const initialImage = [
  {
    name: 'image1',
    link: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
  },
  {
    name: 'image2',
    link: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'
  },
  {
    name: 'image3',
    link: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
  },
  {
    name: 'image4',
    link: 'https://avatars.mds.yandex.net/i?id=1efb59edadec80b91aed9efcac68b04b_l-5877972-images-thumbs&n=27&h=384&w=480'
  },
  {
    name: 'image5',
    link: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg'
  },
  {
    name: 'image6',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqGDA1xOiBILew3Fk7mw7n8ktRsMb-rKVLUlOpJzvWe0rpv7ovfufL8YI0NP_NSOrkyM&usqp=CAU'
  },
  {
    name: 'image7',
    link: 'http://pristor.ru/wp-content/uploads/2018/06/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA-%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88%D0%BE%D0%BC-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-5.jpg'
  },
  {
    name: 'image8',
    link: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg'
  }
]

export const formContact = document.querySelector('.contact__form');
export const submitButton = document.querySelector('.button_type_submit');
export const imageTemplate = document.querySelector('.foto').content.querySelector('.lightbox__item');